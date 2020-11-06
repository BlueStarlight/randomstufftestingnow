const Discord = require("discord.js");

exports.run = function (client, message, args) {

      const channel = client.channels.get("695860237198032960");
      if (!channel) return console.error("The channel does not exist!");
      channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
      }).catch(e => {
        // Oh no, it errored! Let's log it to console :)
        console.error(e);
      });

};
