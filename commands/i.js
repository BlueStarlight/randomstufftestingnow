const Discord = require("discord.js");

exports.run = function (client, message, args) {

    var prefix = '.i';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
    //const command = args2.shift().toLowerCase(); (/ +/g)
   
    if(message.content.includes("hug")) {
    const sender = message.author;
    const recipient = message.mentions.users.first();
    if (!recipient) {message.channel.send("Please mention a user!")}
    if (message.content.includes("<@&")) return;
    
    if (message.content.includes("random")) {
    let embed = new Discord.MessageEmbed()
        .setTitle(sender.username + " gives a random hug to " + recipient.username)
        .setImage("https://tenor.com/view/hug-random-hug-gif-4905713");

    message.channel.send(embed).catch(console.error);
    }
    else if (message.content.includes("virtual")) {
        let embed = new Discord.MessageEmbed()
            .setTitle(sender.username + " gives " + recipient.username + " a virtual hug ")
            .setImage("https://tenor.com/view/hug-virtual-hug-hug-sent-gif-5026057");
    
        message.channel.send(embed).catch(console.error);
        }
    else if (message.content.includes("warm")) {
    let embed = new Discord.MessageEmbed()
        .setTitle(sender.username + " gives " + recipient.username + " a warm hug ");

    message.channel.send(embed).catch(console.error);
    }
    else {
    let embed = new Discord.MessageEmbed()
        .setTitle(sender.username + " gives a hug to " + recipient.username);

    message.channel.send(embed).catch(console.error);
    }
    
    console.log(" ")
    console.log(message.author.tag + " hugs: " + recipient.tag)

    }


    if(message.content.includes("cookie")) {
        const sender = message.author;
        const recipient = message.mentions.users.first();
        
        
        //if (message.content.includes("<@&")) return;
        
        if (message.content.includes("eat")) {
            let embed = new Discord.MessageEmbed()
            .setTitle(sender.username + " eats a <:starbuckscookie:717679668194705478>");
            //.setImage('https://cdn.discordapp.com/emojis/725528361497264209.gif?v=1');
    
        message.channel.send(embed).catch(console.error);
        message.channel.send("<a:munch:725528361497264209>").catch(console.error);
        }

        else if (!message.content.includes("eat")) {
        if (!recipient) {message.channel.send("Please mention a user!")}
        let embed = new Discord.MessageEmbed()
            .setTitle(sender.username + " gives " + recipient.username + " a <:starbuckscookie:717679668194705478>");
            //.setImage('https://tenor.com/view/tim-hortons-cookies-delicious-yummy-national-cookie-day-gif-16659532');
    
        message.channel.send(embed).catch(console.error);

        console.log(" ")
        console.log(message.author.tag + " gives cookie: " + recipient.tag)
        }


        
    
        }



if (message.content.includes("foxplay")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("foxy :)")
        //.setDescription(message.content.replace('.i', ''))
        .setColor('#8B0000')
        .setImage('https://cdn.discordapp.com/emojis/702270291350519859.gif?v=1')
        .setFooter('');

message.channel.send(embed);
}


if (message.content.includes("vote")) {
    let embed = new Discord.MessageEmbed()
        .setTitle("Vote for " + message.author.tag)
        .setAuthor("*Verified*", 'https://cdn.discordapp.com/emojis/702237343280660512.gif?v=1')
        //.setDescription(message.content.replace('.i', ''))
        .setColor('#0000A0')
        .setFooter('Running for Discord presidential election now! ')
        .setImage(message.author.displayAvatarURL());

message.channel.send(embed);

    //message.channel.send("User: " + message.author.toString());
//if (message.content.includes("edit")) {embed.setDescription(message.content.replace('.embed edit', ''))}
}




}