const Discord = require("discord.js");

exports.run = function (client, message, args) {

    let options = ["https://imgur.com/gallery/yuV1Z8m", "https://i.imgur.com/DKqIful.jpg", "https://i.imgur.com/yRzLRs6.jpg", "https://i.imgur.com/Nu727iX.jpg", "https://i.imgur.com/THR4aR2.jpg", "https://i.imgur.com/WxNKKeQ.jpg", "https://i.imgur.com/mcXL5yc.jpg", "https://i.imgur.com/GtdJhZG.jpg", "https://i.imgur.com/kd9Fxwi.jpg", "https://i.imgur.com/uCozYd9.jpg", "https://i.imgur.com/7bVuQjg.png", "https://i.imgur.com/PPpTZ4z.jpg"];
    let random = Math.floor(Math.random() * options.length);
    message.channel.send(options[random]);
    
}