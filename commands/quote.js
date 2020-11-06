const Discord = require("discord.js");

exports.run = function (client, message, args) {


    var prefix = '.quote ';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
    //const command = args2.shift().toLowerCase(); (/ +/g)

        let quote = args2[1]; // Remember arrays are 0-based!.
        let author = args2[2];
        //let location = args2[2];


    //const args2 = message.content.slice(prefix.length).split(', ');
    //const command = args.shift().toLowerCase();
    
    //let args = message.content.split(", ").slice(1);
    
        let embed = new Discord.MessageEmbed()
            .setFooter(`quoted by: ${message.author.tag}`, message.author.displayAvatarURL)
            .setDescription("❝ " + quote + " ❞\n ~" + author)
            .setColor('#202020')

            
            //select colors
            if (message.content.includes("red")) {
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





    //old ver:

//const args2 = message.content.slice(prefix.length).split(', ');
//const command = args.shift().toLowerCase();

//let args = message.content.split(", ").slice(1);
/*
if (message.author.id === '653774475980046364'||'471811050031939597'||'613071634651283583'||'219509899359551489') {
    let embed = new Discord.MessageEmbed()
        .setTitle("")
        .setDescription(message.content.replace('.embed', ''))
        .setColor('#202020');
        if (message.content.includes(".title")) {
            embed.setTitle(message.content.replace('.embed .title', ''))}
        //select colors
        if (message.content.includes(".red")) {
            embed.setDescription(message.content.replace('.embed .red', ''))
            embed.setColor('#d80000')}
        if (message.content.includes(".blue")) {
            embed.setColor('#41d4ff')
            embed.setDescription(message.content.replace('.embed .blue', ''))}
        if (message.content.includes(".yellow")) {
            embed.setColor('#ffeb27') 
            embed.setDescription(message.content.replace('.embed .yellow', ''))}
        if (message.content.includes(".lime")) {
            embed.setColor('#99FF33') 
            embed.setDescription(message.content.replace('.embed .lime', ''))}
        if (message.content.includes(".teal")) {
            embed.setColor('#23EFA4')
            embed.setDescription(message.content.replace('.embed .teal', ''))}
        if (message.content.includes(".white")) {
            embed.setColor('#FFFFFF')
            embed.setDescription(message.content.replace('.embed .white', ''))}
        if (message.content.includes(".purple")) {
            embed.setColor('#7605CD')
            embed.setDescription(message.content.replace('.embed .purple', ''))}

    message.channel.send(embed);
//if (message.content.includes("edit")) {embed.setDescription(message.content.replace('.embed edit', ''))}
}

else (message.channel.send("Sorry, you don't currently have enough permissions :("))
*/
}