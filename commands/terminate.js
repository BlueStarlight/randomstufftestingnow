const Discord = require("discord.js");
const config = require("../config.json");

exports.run = function (client, message, args) {

    if (message.author.id === '471811050031939597') {
        message.channel.send('Terminating processes... <a:loading:705109882856013915>')
        .then(message.channel.send('Bye!'))
        .then(() => client.destroy());
    } 
    else message.reply('Goodbye :)');
}

