const Discord = require("discord.js")

exports.run = function (client, message, args) {


let embed = new Discord.MessageEmbed()
.setTitle("Stats:")
.addField(`In ${client.guilds.cache.size} guilds`, "yay :)")
.addField("Users:", client.users.cache.size);
//.setDescription(guildlist);


var guildlist = ["Guilds \n", "list"];
    guildlist.push (client.guilds.cache.forEach((guild) => {
    (guild.name + ` [${guild.id}]`)
    }));


    client.guilds.cache.forEach((guild) => {
        
        message.channel.send(" - " + guild.name + ` [${guild.id}]`)

    });

//.setFooter("Guilds:" + guilds);

message.channel.send(embed)
//message.channel.send(guildlist)

//message.channel.send("Guilds that I am in")

//client.guilds.forEach((guild) => {
//    message.channel.send(" - " + guild.name)
//});

}