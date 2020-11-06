const Discord = require("discord.js");

exports.run = function (client, message, args) {
let member = message.author;

if (member.roles.cache.has('713184069088968808')) {
    let roles = "true";

if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        console.log('This member can kick and ban');
        let permissions = ("can kick and ban members");

    let user = client.users.get(message.author);
    let embed = new Discord.MessageEmbed()
        .setTitle("Your info")
        .setAuthor(message.author, message.author.displayAvatarURL)
        .setDescription("Perrmissions:" + permissions)
        .setColor('#202020')
        .addField("Roles:", roles);
    message.channel.send(embed);

}}
} //malfunctioning-...  :(