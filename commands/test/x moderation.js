const Discord = require("discord.js");

exports.run = function (client, message, args) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Moderation")
        .setDescription("I hope my moderation commands can be of some service to your server! Here they are:")
        .setColor('#202020')
        .addField("msglog", "A message logging channel is automatically set up when a message is deleted/edited.");
        //.addField("Economy", "Use `*help money` to learn more about the Kindness economy")
    message.channel.send(embed);
}