const Discord = require("discord.js")

exports.run = function (client, message, args) {

let embed = new Discord.MessageEmbed()
.setTitle("Invite Inviz to your server!")
.setURL('https://discord.com/api/oauth2/authorize?client_id=696018806832889866&permissions=8&scope=bot');
message.channel.send(embed)
//message.channel.send("https://discord.com/api/oauth2/authorize?client_id=696018806832889866&permissions=8&scope=bot")

}