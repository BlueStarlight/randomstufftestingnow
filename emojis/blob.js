const Discord = require("discord.js");

exports.run = function (client, message, args) {

//message.content.replace(".say ", " ");
//message.delete(message)
//.catch(console.error)
//message.channel.send("@" + message.author.tag + ":");
//message.channel.send(message.author.tag +':')
if (message.content.includes(".blob"))  {

if (message.content.includes("blush")) {
    message.channel.send('<a:blobblush:702368354786082837>');
}

if (message.content.includes("cry")) {
    message.channel.send('<a:blobcry:702368393193324595>');
}

if (message.content.includes(" trash")) {
    message.channel.send('<a:trash:715418893270908928>');
}

if (message.content.includes("flush")) {
    message.channel.send('<a:flush:715418893270777896>');
}

if (message.content.includes("peek")) {
    message.channel.send('<a:peek:715418893388218439>');
}

if (message.content.includes("popcorn")) {
    message.channel.send('<a:popcorn:715418858839736390>');
}

if (message.content.includes("cringe")) {
    message.channel.send('<a:cringe:715418858479157288>');
}

if (message.content.includes("present")) {
    message.channel.send('<a:present:715418858814439426>');
}

if (message.content.includes("snow 1")) {
    message.channel.send('<a:snow1:715428517273141249>');
}

if (message.content.includes("snow 2")) {
    message.channel.send('<a:snow2:715428489334882406>');
}

if (message.content.includes("snow 12")) {
    message.channel.send('<a:snow1:715428517273141249> <a:snow2:715428489334882406>');
}

if (message.content.includes("partytrash")) {
    message.channel.send('<a:partytrash:715429426564694018>');
}
}

else {
    message.channel.send("Sorry, I don't have that blob :(")
}

};