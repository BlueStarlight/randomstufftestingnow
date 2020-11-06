const Discord = require("discord.js");

exports.run = function (client, message, args) {
console.log(message.author.tag + "'s message: " + message.content)
//const channel = message.mentions.channel.first();
//if (!channel) {message.channel.send(message.content.replace('.say', ''))}


var prefix = '.sayto ';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
    //const command = args2.shift().toLowerCase(); (/ +/g)

   // let mentionedchannel = message.guild.channels.find(args2[0]); 
    let channel = client.channels.get(mentionedchannel);

message.delete(message)
.catch(console.error)
channel.send(message.content.replace('.say', ''));

};