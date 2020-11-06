const Discord = require("discord.js");

exports.run = function (client, message, args) {

    var prefix = '.img';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
    //const command = args2.shift().toLowerCase(); (/ +/g)
   

if (message.content.includes("foxplay")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("foxy :)")
        //.setDescription(message.content.replace('.i', ''))
        .setColor('#8B0000')
        .setImage('https://cdn.discordapp.com/emojis/702270291350519859.gif?v=1')
        .setFooter('');

message.channel.send(embed);

    //message.channel.send("User: " + message.author.toString());
//if (message.content.includes("edit")) {embed.setDescription(message.content.replace('.embed edit', ''))}
}


if (message.content.includes("happy")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("happy?")
        .setColor('#ffeb27')
        .setImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aninews.in%2Fnews%2Flifestyle%2Fquirky%2Fdoes-nature-make-us-happy-science-says-yes201711031238540001&psig=AOvVaw0sXtJ5z-M5omI6Tj8AjSxK&ust=1589346779015000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiGr7bIrekCFQAAAAAdAAAAABAW')
        .setFooter('');

message.channel.send(embed);
}


if (message.content.includes("brottdog2020")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("Vote BrottDog2020")
        .setAuthor("*Verified*", 'https://cdn.discordapp.com/emojis/702237343280660512.gif?v=1')
        //.setDescription(message.content.replace('.i', ''))
        .setColor('#0000A0')
        .setFooter('Running for Discord presidential election now! ')
        .setImage('https://cdn.discordapp.com/attachments/709618925436010577/709619705899384892/A2riHIuwRbOMAAAAAElFTkSuQmCC.png');

message.channel.send(embed);

    //message.channel.send("User: " + message.author.toString());
//if (message.content.includes("edit")) {embed.setDescription(message.content.replace('.embed edit', ''))}
}


if (message.content.includes("have a snickers")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("HAVE A SNICKERS")
        .setColor('#ffeb27')
        .setImage('https://media.discordapp.net/attachments/738212612029808680/751484710202507354/Screen_Shot_2020-09-04_at_12.41.00_PM.png')
        .setFooter('');

message.channel.send(embed);
}





    }