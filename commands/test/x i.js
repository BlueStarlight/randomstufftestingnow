const Discord = require("discord.js");

exports.run = function (client, message, args) {

    var prefix = '.i';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
    //const command = args2.shift().toLowerCase(); (/ +/g)

        let name = args2[0]; // Remember arrays are 0-based!.
        let age = args2[1];
        //let location = args2[2];
        let gender = args2[2];
        let color = args2[3];
        let hobbies = args2[4];
        let other = args2[5];
        let author = args2[6];

    //const args2 = message.content.slice(prefix.length).split(', ');
    //const command = args.shift().toLowerCase();
    
    //let args = message.content.split(", ").slice(1);
    
        let embed = new Discord.MessageEmbed()
            .setTitle(name)
            //.setDescription(message.content.replace('.i', ''))
            .setFooter(author)
            .setColor('#202020')
            .addField("Age:", age)
            //.addField("Location:", location)
            .addField("Gender:", gender)
            .addField("Color:", color)
            .addField("Hobbies:", hobbies)
            .addField("Other:", other);

            
            //select colors
            if (message.content.includes("red")) {
                //embed.setDescription(message.content.replace('.i .red', ''))
                embed.setColor('#d80000')}
            if (message.content.includes("blue")) {
                embed.setColor('#41d4ff')
                }
            if (message.content.includes("yellow")) {
                embed.setColor('#ffeb27') 
                }
            if (message.content.includes("lime")) {
                embed.setColor('#99FF33') 
                }
            if (message.content.includes("teal")) {
                embed.setColor('#23EFA4')
                }
            if (message.content.includes("white")) {
                embed.setColor('#FFFFFF')
                }
            if (message.content.includes("purple")) {
                embed.setColor('#7605CD')
                }
            
            message.channel.send(embed);

        //message.channel.send("User: " + message.author.toString());
    //if (message.content.includes("edit")) {embed.setDescription(message.content.replace('.embed edit', ''))}
    
    }