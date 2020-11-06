const Discord = require("discord.js");
const index = require("../index")
const config = require("../config.json");

exports.run = function (client, message, args) {

        message.channel.send('Resetting...')
        .then(() => client.destroy())
        .then(() => client.login(config.token))
        .then(() => message.channel.send('Done!'));

}