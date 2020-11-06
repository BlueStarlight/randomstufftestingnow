const Discord = require("discord.js");

exports.run = function (client, message, args) {

if (message.content.includes("sleep")) {
    message.channel.send('<a:bearsleep:705110839681876080>');
}

if (message.content.includes("lol")) {
    message.channel.send('<a:bearlaugh:715432910387150869>');
}

};