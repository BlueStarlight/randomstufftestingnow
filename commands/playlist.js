const Discord = require("discord.js");

exports.run = function (client, message, args) {
   if (message.guild.id === "634089658258554900") {
   message.channel.send("Here is the server playlist:")
   message.channel.send("https://open.spotify.com/playlist/4qRrcDEW8d4uQyYdKipufd?si=scl_pXkqQJi5JhD5PUogmw")}
   else 
   message.channel.send("You do not have this option set up yet. To send a help request, please use the following command: `*helpsetup [what you need help with]` :)")
  
};

