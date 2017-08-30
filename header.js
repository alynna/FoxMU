var FoxMU_HdrConf = {
            title: FoxMU_Config.MUname,
   titleFontStyle: "arial,sans-serif",
       titleColor: "pink",
    menuFontStyle: "arial,sans-serif",
        menuColor: "#00ff00"
};
var FoxMU_Hdr = {
         "Blog": "javascript:void(0);",
    "Game Help": FoxMU_Config.MUHelpURL,
   "FoxMU Help": "http://"+window.location.hostname+"/help/"
};

function FoxMU_Hdr_init() {
    var st = "<div style='float:left; height:40px; vertical-align:top; font:36px "+FoxMU_HdrConf.titleFontStyle+";'>"+FoxMU_HdrConf.title+"</div>"+
	     "<div style='float:right; height:40px; vertical-align:middle; font:24px; padding:4px;'>";

    for (var x in FoxMU_Hdr) {
        st += " &nbsp;&nbsp; <a href='"+FoxMU_Hdr[x]+"' target='_blank' style='text-decoration:none;vertical-align:middle;color:"+FoxMU_HdrConf.menuColor+";'>"+x+"</a>"+
        "<div class='headerbox'><iframe src='"+FoxMU_Hdr[x]+"' frameborder='0' style='overflow:hidden;border:0px;width:100%;height:100%;'></iframe></div>";
    }
    st += "</div>";
    document.getElementById("AlyHeader").innerHTML = st;
}
