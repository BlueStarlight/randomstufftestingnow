const Discord = require("discord.js");

exports.run = function (client, message, args) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Music :)")
        .setDescription("Find a playlist that perfectly fits your mood - perhaps even discover some new songs!")
        .setColor('#202020')
        .addField("`playlist`", "A combination of various genres")
        .addField("`something`", "another playlist test");
    message.channel.send(embed);
}