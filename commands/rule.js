const Discord = require("discord.js");

exports.run = function (client, message, args) {

if (message.guild.id==="727357472930791486") {

    var prefix = '.rule';
    const args2 = message.content.slice(prefix.length).trim().split(' ');

    //let color = args2[0];
    let no = args2[0];
    const recipient = message.mentions.users.first();
    if (!recipient) {message.channel.send("Please mention a user!")}
    let content = message.content.slice(prefix.length + no.length).trim();
    let executor = message.author;
    const logs = message.guild.channels.find(channel => channel.name.includes("logs"));
    
    if (no === "1") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 1")
        //.setThumbnail()
        .setDescription("**No spam** of any sort - also no pinging staff for no reason/spam pinging. \n \n " + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "2") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 2")
        //.setThumbnail()
        .setDescription("Be **respectful** of others feelings, ideas and beliefs etc. - this means don't be racist, sexist or anything like that. \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "3") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 3")
        //.setThumbnail()
        .setDescription("Do not provoke or contribute to arguments and don’t be rude or talk back to the staff members. \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "4") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 4")
        //.setThumbnail()
        .setDescription("No nsfw  :no_entry_sign:  - keep language and behaviour appropriate. This includes any graphic or inappropriate images, as well as the mention of such stuff in text or vc. \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "5") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 5")
        //.setThumbnail()
        .setDescription("Don't promote any other servers or links in the chat such as YouTube and social media or other stuff (unless approved by me or an admin) \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
}

else if (message.guild.id==="634089658258554900") {

    var prefix = '.rule';
    const args2 = message.content.slice(prefix.length).trim().split(' ');

    //let color = args2[0];
    let no = args2[0];
    const recipient = message.mentions.users.first();
    if (!recipient) {message.channel.send("Please mention a user!")}
    let content = message.content.slice(prefix.length + no.length).trim();
    let executor = message.author;
    const logs = message.guild.channels.find(channel => channel.name.includes("logs"));
    
    if (no === "1") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 1")
        //.setThumbnail()
        .setDescription("**No spam** of any sort - also no pinging staff for no reason/spam pinging. \n \n " + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "2") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 2")
        //.setThumbnail()
        .setDescription("Be **respectful** of others feelings, ideas and beliefs etc. - this means don't be racist, sexist or anything of that sort. \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "3") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 3")
        //.setThumbnail()
        .setDescription("**Do not provoke or contribute** to arguments and don’t be rude or talk back to the staff members. \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "4") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 4")
        //.setThumbnail()
        .setDescription("**No nsfw**  :no_entry_sign:  - keep language and behaviour appropriate. This includes any graphic or inappropriate images, or hinting at/mentioning something that is immature or annoying. \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "5") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 5")
        //.setThumbnail()
        .setDescription("**Don't promote** any other servers or links in the chat such as YouTube and social media or other servers (unless approved by me or an admin) \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "6") {
        let embed = new Discord.MessageEmbed()
        .setTitle("Rule: 6")
        //.setThumbnail()
        .setDescription("Do **not** bring back previous arguments or continually bring up the topic of unmuting or unbanning someone. \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
    if (no === "7") {
        let embed = new Discord.MessageEmbed()
        .setTitle("HUG!")
        //.setThumbnail()
        .setDescription("Give **HUGS** <:hug:722584322460352513> (it's in the rules :wink:) \n \n" + content)
        .setColor('#7691FF');

        recipient.send(embed);
        logs.send(executor + " warned " +  recipient);
        logs.send(embed);
        executor.send("You warned " + recipient + "for breaking a rule with the following reason: " + content);
    }
}

else {
    message.channel.send("Sorry, this command isn't fully developed just yet :)");
}

}