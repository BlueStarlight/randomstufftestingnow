const Discord = require("discord.js");

exports.run = function (client, message, args) {
    let member = message.guild.member
    
    let embed = new Discord.MessageEmbed()
        .setTitle(message.author.tag + "'s Info")
        .setThumbnail(message.author.displayAvatarURL)
        //.setDescription("||you can request a custom description||")
        .addField("ID:",  message.author.id, true)
        .setColor('#202020');

    message.channel.send(embed);

}