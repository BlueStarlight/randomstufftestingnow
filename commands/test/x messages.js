const Discord = require("discord.js");

exports.run = function (client, message, args) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Messages")
        .setDescription("Here are my message-related commands:")
        .setColor('#202020')
        .addField("Say", "Use `.say [some message]` to have me send an 'invisible' message.")
       // .addField("Telephone", "Use `.telephone` to create a telephone channel :)")
        .addField("Emojis", "Use `.emojis` to get a list of available emojis")
        .addField("PM", "Use `.send [@user] [message]` to send an anonymous message")
        .addField("Announce", "Use `.embed [message]` or `.embed .yellow` to create an announcement as an embed ||colors include .red, .yellow, .blue and .teal||");
        //.addField("Economy", "Use `*help money` to learn more about the Kindness economy")
    message.channel.send(embed);
}