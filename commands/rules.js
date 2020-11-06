const Discord = require("discord.js");

exports.run = function (client, message, args) {

if (message.guild.id==="713288980891828235") {
    let embed = new Discord.MessageEmbed()
        .setTitle("· · ─────────── ·**Server Rules**· ─────────── · ·")
        //.setThumbnail()
        .setDescription("Please follow our rules at all times and be respectful to our other members and staff. Thank you!")
        .setColor('#FF8C00')
        .addField("1", "**Be nice** Don’t say mean things to others that would hurt them. Bullying, swearing with cancer, discrimination, racism and sexual behavior is not allowed against another person, unless that person agrees to it.",true)
        .addField("2", "Use **channels** strictly for their intended purposes \n(e.g. don't use bots out of the bots channel; keep all videos/photos in #videos-and-links-and-pics, and so on)")
        .addField("3", "**Treat each other with respect.**", true)
        .addField("4", "**No NSFW** in the server",true)
        .addField("5", "**Scamming and hacking** is not aloud. (you will get banned)",true)
        .addField("6", "**No promoting** other servers or anything else at all. ", true)
        .addField("7", "Please Don’t ask for roles.",true)
        .addField("8", "No spamming, long text, or word walls", true)
        .addField("9", "Racism, homophobia, inappropriate language, and other forms of bigotry is not tolerated and will be dealt with accordingly. Being disrespectful towards others isn't the right way to handle things either. Keep your toxicity somewhere else, nobody wants it here.")
        .addField("10", "It is OK to have a couple of disagreements but please handle it in a **mature manner** and/or take it to the DMs. Discussion of moderator actions and any forms of disrespect to staff is not tolerated.", true)
        .setFooter("***Please follow the rules and have a great time!***");

    message.channel.send(embed);
}

else if (message.guild.id==="634089658258554900") {
    let embed = new Discord.MessageEmbed()
        .setTitle("· · ─────────── ·**Server Rules**· ─────────── · ·")
        //.setThumbnail()
        .setDescription("Please follow our rules at all times and be respectful to our other members and staff. Thank you!")
        .setColor('#FF8C00')
        .addField("1", "**No spam** of any sort - also no pinging staff for no reason/spam pinging.",true)
        .addField("2", "Be **respectful** of others feelings, ideas and beliefs etc. - this means don't be racist, sexist or anything of that sort.")
        .addField("3", "**Do not provoke or contribute** to arguments and don’t be rude or talk back to the staff members.", true)
        .addField("4", "**No nsfw**  :no_entry_sign:  - keep language and behaviour appropriate. This includes any graphic or inappropriate images, or hinting at/mentioning something that is immature or annoying.",true)
        .addField("5", "**Don't promote** any other servers or links in the chat such as YouTube and social media or other servers (unless approved by me or an admin)",true)
        .addField("6", "Do **not** bring back previous arguments or continually bring up the topic of unmuting or unbanning someone.", true)
        .addField("7", "Give **HUGS** <:hug:722584322460352513> ",true)
        
        .addField("Note:", "If you disobey these rules you will get a strike, may be muted, kicked or even banned from the server.", true)
        .setFooter("Thank you for taking the time to read over the rules so that we can all have an enjoyable, friendly and nontoxic community :)");

    message.channel.send(embed);
}

else if (message.guild.id==="727357472930791486") {
    let embed = new Discord.MessageEmbed()
        .setTitle("· · ─────────── ·**Server Rules**· ─────────── · ·")
        //.setThumbnail()
        .setDescription("Keep everything friendly, appropriate and be respectful to our other members and staff. Thank you!")
        .setColor('#7691FF')
        .addField("1", "**No spam** of any sort - also no pinging staff for no reason/spam pinging.",true)
        .addField("2", "Be **respectful** of others feelings, ideas and beliefs etc. - this means don't be racist, sexist or anything like that.", true)
        .addField("3", "Do not provoke or contribute to arguments and don’t be rude or talk back to the staff members.", true)
        .addField("4", "No nsfw  :no_entry_sign:  - keep language and behaviour appropriate. This includes any graphic or inappropriate images, as well as the mention of such stuff in text or vc.", true)
        .addField("5", "Don't promote any other servers or links in the chat such as YouTube and social media or other stuff (unless approved by me or an admin)",  true)
        .setFooter("\n *Please follow the rules and have a great time!*");

if (message.author.id === '471811050031939597' || message.author.id === '687482555293106217') {
    message.channel.send(embed);
    }
else return;
}

else {
message.channel.send("sorry, this server doesn't have any rules registered yet");
}

}