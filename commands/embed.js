const Discord = require("discord.js");

exports.run = function (client, message, args) {

//const args2 = message.content.slice(prefix.length).split(', ');
//const command = args.shift().toLowerCase();

//let args = message.content.split(", ").slice(1);

    var prefix = '.embed';
    const args2 = message.content.slice(prefix.length).trim().split('; ');

    //let color = args2[0];
    let title = args2[1];
    let content = args2[2];

if (message.author.id === '653774475980046364'||'471811050031939597'||'613071634651283583'||'219509899359551489'||'444621793425096735') {
    let embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(content)
        .setColor('#202020');

        if (message.content.includes(".red")) {
            //embed.setDescription(message.content.replace('.embed .red', ''))
            embed.setColor('#d80000')}
        if (message.content.includes(".blue")) {
            embed.setColor('#41d4ff')
            }
        if (message.content.includes(".darkblue")) {
            embed.setColor('#2c41a8')
            }
        if (message.content.includes(".yellow")) {
            embed.setColor('#ffeb27') 
            }
        if (message.content.includes(".lime")) {
            embed.setColor('#99FF33') 
            }
        if (message.content.includes(".teal")) {
            embed.setColor('#23EFA4')
            }
        if (message.content.includes(".white")) {
            embed.setColor('#fcfcfc')
            }
        if (message.content.includes(".purple")) {
            embed.setColor('#7605CD')
            }
        if (message.content.includes(".orange")) {
            embed.setColor('#FF8C00')
            }
        if (message.content.includes(".pink")) {
             embed.setColor('#FF69B4')
            }
        if (message.content.includes(".green")) {
            embed.setColor('#008000')
            }

    message.channel.send(embed);
    message.delete(message)
//if (message.content.includes("edit")) {embed.setDescription(message.content.replace('.embed edit', ''))}
}

else (message.channel.send("Sorry, you don't currently have enough permissions :("))

}