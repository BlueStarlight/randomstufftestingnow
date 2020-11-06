const Discord = require("discord.js");

exports.run = function (client, message, args) {

    var server = message.guild.id;
    var name = "friend-making";

    server.createChannel(name, "text")
    .catch(console.error)

    client.channels.get(friendch)
    console.log();





/*   let me = client.users.get("471811050031939597");

me.send(`Assistance is needed at ${message.guild.name} in ${message.channel.name} by ` + message.author)
me.send(message.author + "'s message:" + message.content)

message.channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`)
  + me.send(`your invite code is: https://discord.gg/${invite.code}`))
  .catch(console.error);

message.channel.send("Thanks! Your message has been sent :)")

/*
  async function replyWithInvite(message) {
    let invite = await message.channel.createInvite(
    {
      maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
      maxUses: 10 // maximum times it can be used
    },
    `Requested with command by ${message.author.tag}`
  )
  .catch(console.log);
  
me.send(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
    }
me.send(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");*/

}