const Discord = require("discord.js");

exports.run = function (client, message, args) {

//message.content.replace(".say ", " ");
//message.delete(message)
//.catch(console.error)
//message.channel.send("@" + message.author.tag + ":");
if(message.content.includes("sleep")) {
message.channel.send('<a:stitchsleep:715432940926009365>');
}
};