const Discord = require("discord.js");

exports.run = function (client, message, args) {

    if (message.content.includes === "msglog") {
        message.channel.send("I'll log message actions in #logs :)")
        let (logsEnabled)=true;
    }
        
    else 
        message.channel.send("Please let me know what to set up (for example `msglog`)")
       

}