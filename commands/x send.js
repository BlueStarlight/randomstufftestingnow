const Discord = require("discord.js");

exports.run = function (client, message, args) {
const sender = message.author;
const recipient = message.mentions.users.first();
if (!recipient) {message.channel.send("Please mention a user!")}

recipient.send("You've got an anoymous message: \n" + "> " + message.content.replace('.send '+recipient, ''))
sender.send("You sent an anoymous message to:" + recipient + "\n > " + message.content.replace('.send ' + recipient, ''))

message.delete(message)
.catch(console.error)
message.channel.send("Thanks! Your message has been sent :)")

console.log(" ")
console.log(message.author.tag + " sent an anonymous msg: " + message)
console.log("to: " + recipient.tag)
}

