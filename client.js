var m = FoxMU_Messages;
var c = FoxMU_Config;

var FoxMU_Client = { };

function StringSocket(recv_callback, connect_callback, disconnect_callback) {

var that = {},  // Public API interface
    ws = [];

that.send = function(str) {
    ws.send_string(str+'\n');
}
that.connect = function(host, port, encrypt) {
    var host = host,
        port = port,
        scheme = "ws://", uri;
    if ((!host) || (!port)) {
        return;
    }
    if (ws) {
        ws.close();
    }
    if (encrypt) {
        scheme = "wss://";
    }
    uri = scheme + host + ":" + port;
    ws.open(uri);
}
that.disconnect = function() {
    if (ws) {
        ws.close();
    }
    disconnect_callback();
}
function constructor() {
    /* Initialize Websock object */
    ws = new Websock();

    ws.on('message', function(e) {
        var arr = Array.prototype.slice.call(ws.rQshiftBytes(ws.rQlen())), str = "", chr;
        while (arr.length > 0) {
            chr = arr.shift();
            str += String.fromCharCode(chr);
        }
        recv_callback(str);
    });
    ws.on('open', function(e) {
        connect_callback();
    });
    ws.on('close', function(e) {
        that.disconnect();
    });
    ws.on('error', function(e) {
	console.log("Error: "+e)
        that.disconnect();
    });
    return that;

} return constructor(); }

var client_websocket = {
    canConnect: false,
    socktype: "HTML5 Websocket",
    connectIId: null,
    connectingIId: null,
    bridge: null,
    // Handle incoming messages
    receive: function(msg) {
	console.log("ISPY < "+msg)
        return FoxMU_UI.handleMessage("receive", msg);
    },
    connect: function() {
	this.connectIId = this.connectIId;
        this.canConnect = true;
	return FoxMU_UI.handleMessage("connected","CONNECT 115200");
	console.log("Connected")
    },
    disconnect: function() {
	FoxMU_UI.handleMessage("disconnected","NO CARRIER");
	console.log("Disconnected")
    },
    tryToConnect: function() {
	console.log("Attempting connection")
	this.bridge = new StringSocket(this.receive, this.connect, this.disconnect);
	FoxMU_UI.handleMessage("connecting","RINGING");	
        if (this.connectingIId == null) {
            this.connectingIId = this.bridge.connect(c.host,c.port,0);
        }
    },
    /* send a command to MUCK */
    command: function(cmd) {
	console.log("ISPY > "+cmd)
        this.bridge.send(cmd);
    }
};

FoxMU_Client = client_websocket; 

/*
var client_flash = {
// The browser doesn't support WebSocket

    canConnect: false,
    socktype: "Flash bridge",
    connectIId: null,
    connectingIId: null,
    bridge: null,

    connect: function() {
        this.bridge.connect(c.host, c.port, c.policyPort);
    },

    disconnect: function() {
        this.bridge.close();
        // the close event is only dispatched when the server closes the
        // connection, in this case, the client is closing the connection, so
        // we should do it here
        this.handleMessage("disconnected");
    },

    tryToConnect: function () {

        if (this.canConnect) {
            this.connect();
            clearInterval(this.connectIId);
            this.connectIId = null;
        }
    },

    loadFlashBridge: function() {
        swfobject.embedSWF(
            "bridge/FoxMU-bridge.swf",
            "FoxMUBridgePlugin",
            "1",
            "1",
            "9.0.0",
            "expressInstall.swf",
            false,
            { allowscriptaccess: "always", wmode: "transparent" },
            false
        );
    },

    command: function (cmd) {
        this.bridge.command(cmd);
    },

    handleMessage: function(msg, info) {
        switch (msg) {
        case "loaded":
            this.bridge = document.getElementById("FoxMUBridgePlugin");
            this.canConnect = true;
            break;
        default:
            break;
        }

        return FoxMU_UI.handleMessage(msg, info);
    }
};
*/