const Discord = require("discord.js");

exports.run = function (client, guilds, message, args) {

    client.guilds.cache.forEach(g => {
        g.fetchInvites().then(guildInvites => {
          invites[g.id] = guildInvites;
        });
      });

message.channel.send("Updated known invites- go ahead and send your invite :p")

}