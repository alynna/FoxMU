var FoxMU_Guide = [
    [
        "Connecting",
        [
            ["connect", "connect <name> <password> : Will connect you to an existing character"],
            ["connect guest guest", "Connect to a guest character."],
            ["request", "request <name>=<password>=<email> : You can request a new character right from this login screen."],
            ["WHO", "See who is online"],
            ["QUIT", "Decide not to connect"]
        ]
    ],
    [
        "Basic commands",
        [
            ["look", "look <target>: Looks at something, by default the current room.  You can also look at people or things.  In rooms, a list of 'exits' are also commands you can enter to move to a different room."],
	    ["say", "say <text>: says something to the people in your current room. '<text> also does this.   Example: 'hello outputs Yourname says, 'hello'"],
	    ["pose", "pose <text> does a pose.  :<text> is also an alias of this.  Example: :tests outputs YourName tests"],
            ["page", "page <name>=<text>: Send a message to someone on the game privately."],
            ["ws", "Get information on people in the room with you."],
            ["wwi", "Get information on people on the entire game."],
            ["mail #help", "Get information about using the mail system."],
            ["+bbread", "Read the on game bulletin boards."],
            ["options", "Sets all sorts of information about your player, characters, and allows you to configure many other things."]
        ]
    ],
    [
        "RP commands",
        [
            ["+ml", "List registered characters on the game (and open feature characters if any)"],
	    ["spoof", "spoof <text>: poses a line of text with no standard prefixes or suffixes, meaning, just the way you wrote it."],
	    ["goooc", "Set yourself Out of Character"],
	    ["goic", "Set yourself In Character"],
            ["wh", "wh <name>=<text>: Whisper to a person in the room with you."],
            ["mjoin", "mjoin <person>: Request to go to another player."],
            ["msummon", "msummon <player>: Request a player to come to you."],
            ["repose", "Display everything that has happened in the room recently."],
            ["last", "Display everything that has happened on the pub channel recently."],
            ["ooc", "ooc <text>: Speaks OOC to the current room"]
        ]
    ],
    [
        "Chat Channels",
        [
            ["pub", "pub <text>: The public channel, for ooc chatter.  #off can be used to silence it."],
            ["guest", "guest <text>: For new players or for general newbie help"],
            ["rp", "rp <text>: For RP requests and scene announcements"],
            ["comtitle", "comtitle <channel>=<text>: Sets a title for yourself on a chat channel."]
        ]
    ],
    [
        "Additional info",
        [
            ["staff", "This command will list the staff on the game, and who is available"],
            ["colors", "Lists the available standard colors."],
            ["colors256", "Lists the full color set by number.  You must @set me=256color to use this."],
            ["+help", "Get even more MUCK help."],
            ["#Help", "Most commands will list even more help by using <command name> #help"]
        ]
    ]
];
