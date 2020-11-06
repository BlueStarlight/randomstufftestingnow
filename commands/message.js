const Discord = require("discord.js");

exports.run = function (client, message, args) {

    var prefix = '.message ';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
    //const command = args2.shift().toLowerCase(); (/ +/g)

        let name = args2[0];

const recipient = client.users.cache.get(name);
if (!recipient) {message.channel.send("Please mention a user!")}
let embed = new Discord.MassageEmbed()
.setTitle("You've got an anonymous message:")
.setDescription(message.content.replace('.message ' + name + "; ", ''))
.setTimestamp();
if (message.content.toLowerCase().includes("bitch")|| message.content.toLowerCase().includes("retard")|| message.content.toLowerCase().includes("fucking")|| message.content.toLowerCase().includes("fuck") || message.content.toLowerCase().includes("ass") || message.content.toLowerCase().includes("dildo")||message.content.toLowerCase().includes("cunt")){
    message.channel.send("sorry that message contained content that could be considered offensive")
}
else {
recipient.send(embed);
message.author.send("You sent an anonymous message to: "+ recipient + "\n > " + message.content.replace('.message ' + name + "; ", ''))
//recipient.send("You've got an anonymous message: " + "\n > " + message.content.replace('.message ' + name + '; ', ''))
.catch(console.error)
message.channel.send("Thanks! Your message has been sent :)")
.catch(console.error)
}



message.delete(message)
.catch(console.error)
console.log(message.author.tag + " sent an anonymous msg: " + message)
console.log("to: " + recipient.tag)
}

