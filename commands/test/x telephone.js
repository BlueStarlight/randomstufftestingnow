const Discord = require("discord.js");


exports.run = function (client, message, args) {
//  let serverOptions = ["687484332322848808", "695860237198032956", "634089658258554900"];
//  let random = Math.floor(Math.random() * serverOptions.length);

 const telephone = message.guild.channels.find(channel => channel.name === "telephone");
//  message.channel.send(serverOptions[random]);

if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !telephone) {
  message.guild.createChannel('telephone', 'text');
}
if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !telephone) { 
  console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
}  


/*let me = client.users.get("471811050031939597");
let otherServer = client.guild.get('691366343181729870');

me.send(`Assistance is needed at ${message.guild.name} in ${message.channel.name} by ` + message.author)
otherServer.send("Hello there! *Invisibot\* would just like to inform you that there are a couple new emojis that come with the `.emojis` command! Please let me know if you have any suggestions for the bot with `.suggest` Thanks for the support! :)" + message.content)

message.channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`)
  + me.send(`your invite code is: https://discord.gg/${invite.code}`))
  .catch(console.error);

message.channel.send("Thanks! Your message has been sent :)")

  console.log(`A message was sent in ${message.channel.name} by ${user}. \n Here was their message: ` + "`" + message + "`");
*/
}