const Discord = require("discord.js");

exports.run = function (client, message, args) {

   // var prefix = '.PM ';
    //const args2 = message.content.slice(prefix.length).trim().split(' ');
    //const command = args2.shift().toLowerCase(); (/ +/g)

     //   let name = args2[0];

//const sender = client.users.get("471811050031939597")
const recipient = client.users.cache.get(" "); //363095363915350033 ? //581614561304510465 colossus
//if (!recipient) {message.channel.send("Please mention a user!")}
message.author.send("sent a message to: " +  recipient.tag)
recipient.send("New message: " + message.content.replace('.pm ', ''))
.catch(console.error)


console.log(message.author.tag + " sent an anonymous msg: " + message)
console.log("to: " + recipient.tag)
}

