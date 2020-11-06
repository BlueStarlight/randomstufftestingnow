const Discord = require("discord.js");

exports.run = function (client, message, args) {

//message.content.replace(".say ", " ");
//message.delete(message)
//.catch(console.error)
//message.channel.send("@" + message.author.tag + ":");

var prefix = '.bud';
    const args2 = message.content.slice(prefix.length).trim().split(' ');
    //const command = args2.shift().toLowerCase(); (/ +/g)

        let emoji = args2[0];

if (message.content.includes(".bud "+ emoji))  {

if (message.content.includes("bye")) {
    message.channel.send('<a:budbye:702368131422748734>');
}

if (message.content.includes("good")) {
    message.channel.send('<a:budgood:702368056705286225>');
}

if (message.content.includes("music")) {
    message.channel.send('<a:budmusic:702368214088417311>');
}

if (message.content.includes("sneeze")) {
    message.channel.send('<a:budsneeze:702368179359580211>');
}

if (message.content.includes("type")) {
    message.channel.send('<a:budtype:702365957481431100>');
}}

else {
    message.channel.send("Sorry, I don't have that bud :(")
}

};