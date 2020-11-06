const Discord = require("discord.js");

exports.run = function (client, message, args) {

    if (message.content.includes("peek")) {
        message.channel.send('<a:girlpeek:715432888748736542>');
    }
    
    if (message.content.includes("peek 2")) {
        message.channel.send('<a:peek2:715432832671023164>');
    }
};