const Discord = require("discord.js");

exports.run = function (client, message, args) {

    let embed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setDescription("Hey, I'm your friendly neighbourhood invisibot and I hope I can be of some service to your server! Here are my commands:")
        .setColor('#202020')

        .addField("**Messages**", "Some useful message commands:")
        .addField("Say", "Use `.say [some message]` to have me send an 'invisible' message.", true)
        .addField("Edit", "Use `.msg edit [the message id]; [new message]` to fix a message.", true)
        .addField("Emojis", "Use `.emojis` to get a list of available emojis", true)
        .addField("React", "Use `.msg react [message id]; [emoji]` to have inviz react to a message", true)
        .addField("Embed", "Use `.embed .[color]; [message]` to create an announcement as an embed ||colors include .red, .yellow, .blue, .orange, .pink, .green, .darkblue, .purple, .white, .black, and .teal||", true)
        .addField("Actions", "`.i hug [@user]` and `.i cookie [@user]` send a simple embed")
        /*.addField("PM", "Use `.send [@user] [message]` to send an anonymous message", true)
        .addField("PM [alternate]", "Use `.message [the user's ID]; [message]` to send an anonymous message outside of the server", true)*/
        

        .addField("**Msglog**", "A message logging channel is automatically set up when a message is deleted/edited.")

        .addField("Moderation", "Use `.mute [@user] [reason]` and `.unmute`")

        .addField("**Help Setup**", "Use `.helpsetup [the issue]` if you need some assistance with the bot ||Note: This will temporarily invite someone who can help out with the bot||")
        
        .addField("Music", "Use `.play [song link]` to play music from youtube")
        .setFooter("Remember to include the ; in commands when separating arguments 😉");
        //.addField("Economy", "Use `*help money` to learn more about the Kindness economy")
    message.channel.send(embed);
}