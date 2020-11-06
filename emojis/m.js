const Discord = require("discord.js");

exports.run = function (client, message, args) {

//message.content.replace(".say ", " ");
//message.delete(message)
//.catch(console.error)
//message.channel.send("@" + message.author.tag + ":");
//message.channel.send(message.author.tag +':')
if (message.content.includes(".m"))  {

if (message.content.includes(" cold")) {
    message.channel.send('<a:cold:725533446314655745>');
}

if (message.content.includes(" music")) {
    message.channel.send('<a:music:725533305356812319> ');
}

if (message.content.includes(" breadnom")) {
    message.channel.send('<a:breadnom:725539435063803914>');
}

if (message.content.includes(" umm")) {
    message.channel.send('<a:nervous:725533330799591474> ');
}

if (message.content.includes(" chips")) {
    message.channel.send('<a:tiredchips:725533246732894308> ');
}

if (message.content.includes(" eat")) {
    message.channel.send('<a:food:725533213115809885>');
}

if (message.content.includes(" dingdong")) {
    message.channel.send('<a:dingdong:725534913096319066> ');
}

if (message.content.includes(" good")) {
    message.channel.send('<a:good:725533414039748659>');
}

if (message.content.includes("yessir")) {
    message.channel.send('<a:yessir:725533280387989555> ');
}

if (message.content.includes("yup")) {
    message.channel.send('<a:yup:725534982264848526> ');
}

if (message.content.includes(" ?")) {
    message.channel.send('<a:confused:725534379312414720> ');
}

}

else {
    message.channel.send("Sorry, I don't have that blob :(")
}

};