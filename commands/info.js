const Discord = require("discord.js");

exports.run = function (client, message, args) {

    let user = client.users.get("471811050031939597");
    let embed = new Discord.MessageEmbed()
        .setTitle("Info")
        .setDescription("I am *invisible* (Still in developmental stages)")
        .setColor('#202020')
        .addField("Creator", user.tag, true)
        .addField("Version", "1.0", true)
        .addField("My purpose", "To be your friendly neighborhood invisible bot :)")
        .addField("Stats:", "In " + client.guilds.size + " servers with " + client.users.size + " members", true)
        .addField("Commands", "Use `.help` to find out about commands!");
    message.channel.send(embed);
}