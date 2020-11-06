const Discord = require("discord.js");

exports.run = function (client, message, args) {


  message.channel.send("To submit your intro, use the following: `.i [your name]; [your age]; [your gender]; [about you]; [anything else]`")



// -------------------------- \\


//message.channel.send("To submit your intro, use the following: \n `.i name [your name]` \n `.i age [your age]` \n `.i gender [your gender]` \n `.i about [about you]` \n `i other [anything else]`")



  ///////
//let me = client.users.get("471811050031939597");
//me.send(`Assistance is needed at ${message.guild.name} in ${message.channel.name} by ` + message.author)
//me.send(message.author + "'s message: " + message.content)
//message.channel.createInvite()
//  .then(invite => console.log(`Created an invite with a code of ${invite.code}`)
//  + me.send(`your invite code is: https://discord.gg/${invite.code}`))
//  .catch(console.error);
//message.channel.send("Thanks! Your message has been sent :) ||It may take a bit for assistance to arrive||")
////
/*
const intros = message.guild.channels.find(channel => channel.name === "intros");
  if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !intros) {
    message.guild.createChannel('intros', 'text');
  }
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !intros) { 
    console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
  }  

/*message.channel.send("Please say your name:")
let name = (message.content)
.then (message.channel.send("Please say your name:"))
let age = (message.content)*/
/*
message.channel.send("Please state your name")
.then(() => {
  const filter = (m) => m.author.id === message.author.id;
  message.channel.awaitMessages(filter, {max: 1, time: 60000, errors: ['time']})
      .then(collected => {
          let msg = collected.first();
          name = msg.content;
        })

const userIntro = new Discord.MessageEmbed()
  .setColor('#0099ff')
	.setTitle(name)
  .attachFiles(['../assets/discordjs.png'])
  .setImage('attachment://discordjs.png')
  .addFields(
		{ name: 'Age', value: "age" },
		{ name: 'Inline field title', value: 'Some value here'},
		{ name: 'Inline field title', value: 'Some value here'},
	);

intros.send(userIntro);
  });

          




//message.delete(message)
//.catch(console.error)
//intros.send(userIntro);
*/

}