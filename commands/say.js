const Discord = require("discord.js");

exports.run = function (client, message, args) {
console.log(message.author.tag + "'s message: " + message.content)
//const channel = message.mentions.channel.first();
//if (!channel) {message.channel.send(message.content.replace('.say', ''))}

//message.content.replace(".say ", " ");
if(message.content.includes('@everyone')||message.content.includes('@here')||message.content.includes('bitch')||message.content.includes('motherfu')) {
    message.reply(" sorry can't send that")
    message.delete(message)
  } else {
message.delete(message)
.catch(console.error)
message.channel.send(message.content.replace('.say', ''));
  }

};