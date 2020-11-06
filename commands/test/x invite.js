const Discord = require("discord.js");

exports.run = function (client, message, args) {

//const args2 = message.content.slice(prefix.length).split(', ');
//const command = args.shift().toLowerCase();


if (message.author.id === '653774475980046364'||'471811050031939597'||'613071634651283583'||'219509899359551489') {
    let embed = new Discord.MessageEmbed()
        .setTitle("Announcement:")
        .setDescription(message.content.replace('.embed', ''))
        .setColor('#202020');
        if (message.content.includes(".title")) {
            embed.setTitle(message.content.replace('.embed .title', ''))}
        //select colors
        if (message.content.includes(".red")) {
            embed.setDescription(message.content.replace('.embed .red', ''))
            embed.setColor('#d80000')}
        if (message.content.includes(".blue")) {
            embed.setColor('#41d4ff')
            embed.setDescription(message.content.replace('.embed .blue', ''))}
        if (message.content.includes(".yellow")) {
            embed.setColor('#ffeb27') 
            embed.setDescription(message.content.replace('.embed .yellow', ''))}
        if (message.content.includes(".lime")) {
            embed.setColor('#99FF33') 
            embed.setDescription(message.content.replace('.embed .lime', ''))}
        if (message.content.includes(".teal")) {
            embed.setColor('#23EFA4')
            embed.setDescription(message.content.replace('.embed .teal', ''))}
        if (message.content.includes(".white")) {
            embed.setColor('#FFFFFF')
            embed.setDescription(message.content.replace('.embed .white', ''))}
        if (message.content.includes(".purple")) {
            embed.setColor('#7605CD')
            embed.setDescription(message.content.replace('.embed .purple', ''))}

    message.channel.send(embed);
//if (message.content.includes("edit")) {embed.setDescription(message.content.replace('.embed edit', ''))}
}

else (message.channel.send("Sorry, you don't currently have enough permissions :("))

}