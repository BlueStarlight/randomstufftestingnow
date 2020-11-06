const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let user = client.users.get("471811050031939597");
    let embed = new Discord.MessageEmbed()
        .setTitle("Info")
        .addField("Creator", user.tag + " (and a little bit of Jaap's magic)")
        .addField("My purpose", "Making you happy :D");
    message.channel.send(embed);
}