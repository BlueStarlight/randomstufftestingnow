const Discord = require("discord.js");

exports.run = function (client, message, args) {

    var prefix = '.mc';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
    //const command = args2.shift().toLowerCase(); (/ +/g)
   
    if (message.content.includes("alphabet")) {
        let embed = new Discord.MessageEmbed ()
        .setTitle("The Morse Code Alphabet")
        .addField("a", ".-", true)
        .addField("b", "-...", true)
        .addField("c", "-.-.", true)
        .addField("d", "-..", true)
        .addField("e", ".", true)
        .addField("f", "..-.", true)
        .addField("g", "--.", true)
        .addField("h", "....", true)
        .addField("i", "..", true)
        .addField("j", ".---", true)
        .addField("k", "-.-", true)
        .addField("l", ".-..", true)
        .addField("m", "--", true)
        .addField("n", "-.", true)
        .addField("o", "---", true)
        .addField("p", ".--.", true)
        .addField("q", "--.-", true)
        .addField("r", ".-.", true)
        .addField("s", "...", true)
        .addField("t", "-", true)
        .addField("u", "..-", true)
        .addField("v", "...-", true)
        .addField("w", ".--", true)
        .addField("x", "-..-", true)
        .addField("y", "-.--", true)
        .addField("z", "--..", true);

        message.channel.send(embed)
    
    } else {
    
    if (message.content.includes(".mc")) {
    
    const morse = (message.content.replace(".mc", "").replace("a", ".-").replace("b", "-...").replace("c", "-.-.").replace("d", "-.."));

    message.channel.send(morse);
    console.log("translated " + message.content + " to morse code - " + message.author)
    }
    //message.content.replace("c", "-.-.")||message.content.replace("d", "-..")

    }




}