//const Discord = require('discord.io');
//v12
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require('./config.json');
client.login(config.token);

//useful

const fs = require("fs");
const enmap = require("enmap"); //npm i enmap
var schedule = require('node-schedule'); //npm i enmap
const wait = require('util').promisify(setTimeout); // A useful method to create delay without blocking the whole script.
const invites = {};

//voice stuff
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-static')

//mc


//STARTUP//

client.on('ready', () => {
    console.log(" ")
    console.log("____*____~____*____")
    console.log(`I'm ready! Logged in as ${client.user.tag}!`);
    console.log(" ")
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 
  
    //client.user.setPresence("idle")
    client.user.setActivity(`invisible in ${client.guilds.cache.size} servers :)`, {type: "PLAYING"});
    //client.user.setStatus("idle", `invisible in ${client.guilds.cache.size} servers :)`);

    let greetCh = client.channels.cache.get(`695860237198032959`)
    greetCh.send(`||I'm back!||`)
  
      // List servers the bot is connected to
      console.log(" ")
      console.log("Servers:")
      client.guilds.cache.forEach((guild) => {
          console.log(" ")
          console.log(" - " + guild.name + ` [${guild.id}]`)
  
          // List all channels
          guild.channels.cache.forEach((channel) => {
              console.log(` -- ${channel.name} (${channel.type})  - ${channel.id}`)
          })
      });
      
      wait(1000);
  
    // Load all invites for all guilds and save them to the cache.
    client.guilds.cache.forEach(g => {
      g.fetchInvites().then(guildInvites => {
        invites[g.id] = guildInvites;
      });
    });

});

client.on("ready", ()=> {

	var rule = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	rule.minute = 0; // Must set to 0 or scheduled job will run every minute.
  rule.hour = 14;
  var i = schedule.scheduleJob(rule, function() {
    client.channels.cache.get('709428443292368997').send("Announcement at 2PM");

  });

  var rule2 = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	rule2.minute = 0; // Must set to 0 or scheduled job will run every minute.
  rule2.hour = 12;
  var t = schedule.scheduleJob(rule2, function() {
    client.channels.cache.get('755523818965172417').send("**Reminder:** \n Run the `pls daily` command. \n \n ---pings--- \n <@758343708574744596> <@431296848397991936> <@712875030136225872> <@471811050031939597>");
    client.channels.cache.get('686685348721721347').send("**Reminder:** \n Run the `pls daily` command. \n \n ---pings--- \n <@&758367780961255446>");
  });

  var rule3 = new schedule.RecurrenceRule(); // Creates new Recurrence Rule
	rule3.minute = 1; // Must set to 0 or scheduled job will run every minute.
  //rule3.hour = 12;
  var i = schedule.scheduleJob(rule3, function() {
    client.channels.cache.get('755523818965172417').send("**Reminder:** \n Run the `pls hourly` and `pls work` commands.");
    client.channels.cache.get('686685348721721347').send("**Reminder:** \n Run the `pls hourly` and `pls work` commands.");
  });

})



//COMMAND HANDLING

/*
 * Event handler
 */
fs.readdir("events", function(error, files) {
  if(error) throw error;

  files.forEach(file => {
    let split = file.split(".");
    let name = split[0];
    let suffix = split[1];

    if(suffix !== "js") return;

    let props = require("./events/" + file);

    client.on(name, props.bind(null, client));
  });
})

/*
 * Command handlers
 */
client.commands = new enmap();
fs.readdir("commands", function(error, files) {
  if(error) throw error;
  
  files.forEach(file => {
    let split = file.split(".");
    let name = split[0];
    let suffix = split[1];

    if(suffix !== "js") return;

    let props = require("./commands/" + file);

    props.name = name;
    client.commands.set(name, props);
  });
})


client.commands = new enmap();
fs.readdir("emojis", function(error, files) {
  if(error) throw error;
  
  files.forEach(file => {
    let split = file.split(".");
    let name = split[0];
    let suffix = split[1];

    if(suffix !== "js") return;

    let props = require("./emojis/" + file);

    props.name = name;
    client.commands.set(name, props);
  });
})



//GUILD EVENTS//

client.on("guildCreate", guild => {

  // This event triggers when the bot joins a guild.
  console.log(`\n .*.*.*.+++ \n New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`invisible in ${client.guilds.cache.size} servers :)`, {type: "PLAYING"});

  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`\n ---.-.\n I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`invisible in ${client.guilds.cache.size} servers :)`, {type: "PLAYING"});
});

client.on("guildMemberAdd", member => {
  if(member.user.bot) return;

  let guild = member.guild; 
    let memberTag = member.user.toString(); 
  
    member.guild.fetchInvites().then(guildInvites => {
      // This is the *existing* invites for the guild.
      const ei = invites[member.guild.id];
      // Update the cached invites for the guild.
      invites[member.guild.id] = guildInvites;
      // Look through the invites, find the one for which the uses went up.
      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
      // This is just to simplify the message being sent below (inviter doesn't have a tag property)
      const inviter = client.users.cache.get(invite.inviter.id);
      // Get the log channel (change to your liking)
      const logChannel = guild.channels.cache.find(channel => channel.name === "logs");
  
      logChannel.send(member.user.toString() + ` joined using invite code ${invite.code} from ${inviter} Invite was used ${invite.uses} times since its creation.`)
      .catch(console.error)
  
      let welcome = guild.channels.cache.find(channel => channel.name.includes("welcome"));
  
  if (welcome) {
  
    let embed = new Discord.MessageEmbed()
    .setTitle("A new user joined") 
    .setDescription(`Welcome ${member} hope you enjoy your time in **` + member.guild.name + "**") 
    .setThumbnail(member.user.displayAvatarURL()) 
    .addField("Members now", member.guild.memberCount) 
    .setTimestamp()
    .setFooter(`Invited by: ${inviter.tag}`);

    welcome.send(embed)
    console.log("\n .*.*.*.+++ \n new member joined " + guild  + "\n" + memberTag)
  }

  else if (!welcome) { 
    const ruleChannel = member.guild.channels.cache.get("701573237682733087")
    const roleChannel = member.guild.channels.cache.get("662680183500832798")

    let embed = new Discord.MessageEmbed()
    .setTitle("A new user joined") 
    .setDescription(`Welcome ${member} hope you enjoy your time in **` + member.guild.name + `**\n Please be sure to check out the ${ruleChannel} and ${roleChannel}!`) 
    .setThumbnail(member.user.displayAvatarURL()) 
    .addField("Members now", member.guild.memberCount) 
    .setTimestamp()
    .setFooter(`Invited by: ${inviter.tag}`);

    let welcome2 = guild.channels.cache.find(channel => channel.name === "🌟new-people");
    welcome2.send(embed)
    console.log("\n .*.*.*.+++ \n new member joined " + guild.name + guild + "\n Found alternate channel and welcomed new member: " + memberTag)
   }

  else {
    console.log("\n .*.*.*.+++ \n new member joined \n couldn't find welcome channel in: " + guild.id + "\n")
    return;
  }
  
  })//end of "find invites"
  });

client.on("guildMemberAdd", member => {
    let guild = member.guild; 
    /*if(member.guild.id==="634089658258554900") {
      let intro = member.guild.channels.cache.get('705573731212329064')
      intro.send("· · ─────── ·❖· ─────── · ·\n┊↠ "+ member +" \n╭───・•・───\n┊Name: \n┊Age: \n┊Gender: \n┊Birthday: \n┊Status: \n┊Likes: \n┊Dislikes: \n┊Dms: \n┊Extra: \n╰───・•・─── '")
    }*/
  })
  
client.on("guildMemberRemove", member => {
    //if (member.client) return;
    let guild = member.guild; 
    console.log(`\n Member left: ` + member.user.tag + " from: " + guild);
    console.log("Bye bye :(");
  
  //GG
  if (member.guild.id = '634089658258554900') {
    let welcomeChannel = member.guild.channels.cache.get('721069983324438559')
    if(welcomeChannel){
      welcomeChannel.send(member.toString() + " left... *we are [most likely] sad...\* \n Bye bye :wave:")
      }
    }
  
  //testing
  if (member.guild.id = '695860237198032956') {
    let welcomeChannel = member.guild.channels.cache.get('696943257279660114')
    if(welcomeChannel){
        welcomeChannel.send(member.toString() + " left... *we are [most likely] sad...\* \n Bye bye :wave:")
        }
    }
  
  //FrozenFire
  if (member.guild.id = '687484332322848808') {
    let welcomeChannel = member.guild.channels.cache.get('687484332322848868')
    if(welcomeChannel){
      welcomeChannel.send(member.toString() + " left... *we are [most likely] sad...\* \n Bye bye :wave:")
      }
    }
  
  //RPG
    if (member.guild.id = '716653039217410148') {
      let welcomeChannel = member.guild.channels.cache.get('716684685463257190')
      if(welcomeChannel){
        welcomeChannel.send(member.toString() + " has left the server... *we are [most likely] sad...\* \n Bye bye :wave:")
        }
      }
  
  //testing
  if (member.guild.id = '720767442279727195') {
    let welcomeChannel = member.guild.channels.cache.get('720792205786218508')
    if(welcomeChannel){
        welcomeChannel.send(member.toString() + " left... *we are [most likely] sad...\* \n Bye bye :wave:")
        }
    }
  
  //particles
    if (member.guild.id = '727357472930791486') {
      let welcomeChannel = member.guild.channels.cache.get('727359338028728340')
      if(welcomeChannel){
          welcomeChannel.send(member.toString() + " left the particles... \n Bye bye :wave:")
          }
      }
  
  //furry server
  if (member.guild.id = '723844649734766692') {
    let welcomeChannel = member.guild.channels.cache.get('734898022885883995')
    if(welcomeChannel){
      welcomeChannel.send(member.toString() + " has left the server :(\* \n Bye bye :wave:")
      }
    }
  
  //brott server
  if (member.guild.id = '737052958059003931') {
    let welcomeChannel = member.guild.channels.cache.get('738491662262861854')
    if(welcomeChannel){
      welcomeChannel.send(member.toString() + " <this fucktard just left \n Bye bye")
      }
    }
  
  //cole's lounge
  if  (member.guild.id = '709822900181663876') {
    let welcomeChannel = member.guild.channels.cache.get('709822900181663879')
    if(welcomeChannel){
      welcomeChannel.send(member.toString() + " left... *we are [most likely] sad...\* \n Bye bye :wave:")
      }
    }
  
  else { 
   console.log(`${member.user.tag} left; couldn't find goodbye channel`)
   return;
  }
  
    
  });

client.on('guildMemberRemove', async member => {
    const logs = member.guild.channels.cache.find(channel => channel.name.includes("logs"));
    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_KICK',
    });
    // Since we only have 1 audit log entry in this collection, we can simply grab the first one
    const kickLog = fetchedLogs.entries.first();
  
    // Let's perform a sanity check here and make sure we got *something*
    if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);
  
    // We now grab the user object of the person who kicked our member
    // Let us also grab the target of this action to double check things
    const { executor, target } = kickLog;
  
    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same kicked member
    if (target.id === member.id) {
      logs.send(`${member.user.tag} left the guild; kicked by ${executor.tag}?`)
      console.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
    } else {
      logs.send(`${member.user.tag} left the guild, audit log fetch was inconclusive.`)
      console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`);
    }
  });

client.on('guildBanAdd', async (guild, user) => {
    const logs = guild.channels.cache.find(channel => channel.name.includes("logs"));
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_BAN_ADD',
    });
    // Since we only have 1 audit log entry in this collection, we can simply grab the first one
    const banLog = fetchedLogs.entries.first();
  
    // Let's perform a sanity check here and make sure we got *something*
    if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);
  
    // We now grab the user object of the person who banned the user
    // Let us also grab the target of this action to double check things
    const { executor, target } = banLog;
  
    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same kicked member
    if (target.id === user.id) {
      logs.send(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, wielded by the mighty ${executor.tag}`)
      console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, wielded by the mighty ${executor.tag}`);
    } else {
      logs.send(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`)
      console.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`);
    }
  });


  client.on('message', message => {
    if(message.content.startsWith(".welcome1")) {
      const prefix = ".welcome1"
      let args2 = message.content.slice(prefix.length).trim().split(' ')
  
      let userid = args2[0]
      let member = message.guild.members.cache.find(userid)
      const ruleChannel = member.guild.channels.cache.get("701573237682733087")
      const roleChannel = member.guild.channels.cache.get("662680183500832798")
  
      let embed = new Discord.MessageEmbed()
      .setTitle("A new user joined") 
      .setDescription(`Welcome ${member} hope you enjoy your time in **` + member.guild.name + `**\n Please be sure to check out the ${ruleChannel} and ${roleChannel}!`) 
      .setThumbnail(member.user.displayAvatarURL()) 
      .addField("Members now", member.guild.memberCount) 
      .setTimestamp()
      .setFooter(`(late welcome)`);
  
      let welcome2 = message.guild.channels.cache.find(channel => channel.name === "🌟new-people");
      welcome2.send(embed);
      console.log("\n .*.*.*.+++ \n LATE: " + message.guild.name + message.guild + "\n welcomed new member: " + memberTag);
     
    }
  })



//COMMANDS

client.on('message', async message => {

  if(message.author.bot) return;
  

  //clean commands
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if (command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);

  }

if(message.content.includes(".msg edit")) {
    var prefix = '.msg edit ';
    const args2 = message.content.slice(prefix.length).trim().split('; ');
      let msgid = args2[0];
      let newmsg = args2[1]

    message.channel.messages.fetch({around: msgid, limit: 1}).catch(console.error)
  .then(messages => {
    const fetchedMsg = messages.first(); // messages is a collection!)
    // do something with it
    fetchedMsg.edit(newmsg).catch(console.error);
  });
}

if(message.content.includes(".msg del")) {
  var prefix = '.msg del ';
  const args2 = message.content.slice(prefix.length).trim().split('; ');
    let msgid = args2[0];
    let newmsg = args2[1]

  message.channel.messages.fetch({around: msgid, limit: 1})
.then(messages => {
  const fetchedMsg = messages.first(); // messages is a collection!)
  // do something with it
  fetchedMsg.delete(fetchedMsg);
  console.log("deleted: " + fetchedMsg.content)
});
message.delete(message)
}

if(message.content.includes(".msg react")) {
  var prefix = '.msg react ';
  const args2 = message.content.slice(prefix.length).trim().split('; ');
    let msgid = args2[0];
    let emoji = args2[1]

message.channel.messages.fetch({around: msgid, limit: 1})
.then(messages => {
  const fetchedMsg = messages.first();
  if(emoji === "bear lol") {
    fetchedMsg.react('716561084793880626');
  }
  else if(emoji === "sad") {
    fetchedMsg.react('701245543925415957');
  }
  else if(emoji === "happy") {
    fetchedMsg.react('701245543925415957');
  }
  else if(emoji === "drawheart") {
    fetchedMsg.react('702237447311851638');
  }
  else if(emoji === "clap") {
    fetchedMsg.react('720874505605480500');
  }
  else if(emoji === "verified") {
    fetchedMsg.react('702237343280660512');
  }
  else if(emoji === "loading") {
    fetchedMsg.react('705109882856013915');
  }
  else if(emoji === "virtualthink") {
    fetchedMsg.react('720876133884624959');
  }
  else if(emoji === "100") {
    fetchedMsg.react('720882331031699516');
  }
  else if(emoji === "crazyeyes") {
    fetchedMsg.react('722123756545507418');
  }
  else if(emoji === "angryping") {
    fetchedMsg.react('722123730419187723');
  }
  else if(emoji === "bouncebread") {
    fetchedMsg.react('702237395185172501');
  }
  else if(emoji === "countdown") {
    fetchedMsg.react('715432063892717622');
  }
  else if(emoji === "cutecat") {
    fetchedMsg.react('702237144231575693');
  }
  else if(emoji === "pensive") {
    fetchedMsg.react('769356824758976552');
  }
  else if(emoji === "munch") {
    fetchedMsg.react('725528361497264209');
  }
  else {
    fetchedMsg.react(emoji);
  }
});

}

if(message.content.startsWith(config.prefix + "meg del")) {
  const args2 = message.content.slice(".meg del").trim().split(" ");
  let amount = args2[2]

  message.channel.bulkDelete(amount, true).catch(err => {
    console.error(err);
    message.channel.send('There was an error trying to bulk delete messages in this channel! Check if you included a number in your command? e.g. `.meg del 15`');
  });
  message.channel.send("Deleted " + amount + " messages")

}


if (message.content.startsWith('.mute')) {

  var prefix = '.mute';
  const args2 = message.content.slice(prefix.length).trim().split(' ');

  let reason = args2[1];



  let user = message.member;
  let role = message.guild.roles.cache.find(r => r.name === ("Muted"));
  let memberrole = message.guild.roles.cache.find(r => r.name.includes("Member"));
  let bmember = message.mentions.members.first();
  if (!role) return message.channel.send("Seems you don't have a role named `Muted`. Please set this up before continuing. ")
  if (!memberrole) return message.channel.send("I can't seem to find the `Member` role, perhaps there is another name for it but I can't recognize it.. :( ||try `.helpsetup [the issue]` perhaps?||")
  if (!user) return message.channel.send("Error: I can't identify the user..")
  
  if (!user.hasPermission("MUTE_MEMBERS")) return message.channel.send("Sorry, it seems you dont have permission to mute members.")
  
  const logs = user.guild.channels.cache.find(channel => channel.name.includes("logs"));

  if (!bmember) return message.channel.send("Please mention someone");
  if (bmember) { 
    bmember.roles.add(role)
    bmember.roles.remove(memberrole)
    message.channel.send("Muted.")
    logs.send(`${bmember} has been muted by ${user} due to: ` + reason)
    bmember.send("You were muted in " + message.guild.name + "\n" + reason)
    user.send(`You muted ${bmember}` + " in " + message.guild.name + "\n" + reason)
  }

}


if (message.content.startsWith('.unmute')) {

var prefix = '.unmute';

let user = message.member;
let role = message.guild.roles.cache.find(r => r.name === "Muted");
let memberrole = message.guild.roles.cache.find(r => r.name.includes("Member"));

let bmember = message.mentions.members.first();
if (!role) return message.channel.send("Seems you don't have a role named `Muted`. Please set this up before continuing.")
if (!memberrole) return message.channel.send("I can't seem to find the `Member` role, perhaps there is another name for it but I can't solve this for you.. :( ||try `.helpsetup [the issue]` perhaps?||")
if (!user) return message.channel.send("Error: I can't identify the user..")

if (!user.hasPermission("MUTE_MEMBERS")) return message.channel.send("Sorry, it seems you dont have permission to mute members.")

const logs = user.guild.channels.cache.find(channel => channel.name.includes("logs"));

if (!bmember) return message.channel.send("Please mention someone");
if (bmember) { 
  bmember.roles.remove(role)
  bmember.roles.add(memberrole)
  message.channel.send("Unmuted.")
  logs.send(`${bmember} has been unmuted by ${user}`)
  bmember.send("You were unmuted in " + message.guild.name)
  user.send(`You've umuted ${bmember}` + " in " + message.guild.name)
}

}

if (message.content.startsWith('.kick')) {

  var prefix = '.kick';
  const args2 = message.content.slice(prefix.length).trim().split(' ');
  let reason = args2[1];

  let user = message.member;
  let bmember = message.mentions.members.first();
  if (!user) return message.channel.send("Error: I can't identify the user..")
  
  if (!user.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, it seems you dont have permission to kick members.")
  
  const logs = user.guild.channels.cache.find(channel => channel.name.includes("logs"));

  if (!bmember) return message.channel.send("Please mention someone");
  if (bmember) { 
    bmember.kick();
    logs.send(`${bmember} has been kicked by ${user} due to: ` + reason)
    bmember.send("You were kicked from " + message.guild.name + "\n" + reason)
    user.send(`You kicked ${bmember}` + " in " + message.guild.name + "\n" + reason)
  }

 
}

if (message.content.startsWith('.makerole')) {
var prefix = '.makerole';
const args2 = message.content.slice(prefix.length).trim().split(' ');

let role = args2[0];

if(role = "member") {
  message.member.guild.roles.create({ data: { name: 'Member', permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL'] } });
}
if(role = "muted") {
  message.member.guild.roles.create({ data: { name: 'Muted', permissions: {SEND_MESSAGES:false} } });
}
else return;


  /* .then(() => {
	const filter = m => <message>.author.id === m.author.id;

	<message>.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
		.then(messages => {
			<message>.channel.send(`You've entered: ${messages.first().content}`);
		})
		.catch(() => {
			<message>.channel.send('You did not enter any input!');
		});
}); */
}

/*if(message.content.includes(".msg vote")) {
  var prefix = '.msg vote ';
  const args2 = message.content.slice(prefix.length).trim().split('; ');
    let msgid = args2[0];
    let newmsg = args2[1]

  message.channel.messages.fetch({around: msgid, limit: 1})
.then(messages => {
  const fetchedMsg = messages.first();
  fetchedMsg.react('👍').then(() => fetchedMsg.react('👎'));

  const filter = (reaction, user) => {
  return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
  const reaction = collected.first();

  if (reaction.emoji.name === '👍') {
    message.author.send('you reacted with a thumbs up.');
  } else {
    message.author.send('you reacted with a thumbs down.');
  }
})
.catch(collected => {
  message.author.send('you reacted with neither a thumbs up, nor a thumbs down.');
});
});
}*/



});

client.on('messageReactionAdd', message => {

    //var prefix = '.msg vote ';
    //const args2 = message.content.slice(prefix.length).trim().split('; ');
      let msgid = message.message.id;
      //let newmsg = args2[1]
      const starch = message.message.guild.channels.cache.find(channel => channel.name === "⭐star")

    message.message.channel.messages.fetch({around: msgid, limit: 1})

    let msg = message.message.content;
    let msglink = "https://discord.com/channels/"+message.message.guild.id+'/'+message.message.channel.id+'/'+message.message.id;

    let embed = new Discord.MessageEmbed()
    .setAuthor(message.message.author.username, message.message.author.avatarURL())
    .setDescription("⭐ "+msg+"\n \n [link]("+msglink+")");
    //.addField("link", "[test]("+msglink+")")
    //.setFooter("by "+message.message.author.username);

    if (message.emoji.name === '⭐') {
      if (!starch) return;
      else if (starch) {
      starch.send(embed);
      }
    } else return;
  

  });
  



// OTHER

client.on('message', message => {

  //nickname cmd
if (message.content.startsWith("I'm")) {
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
    message.member.setNickname(message.content.replace("I'm ", ""));
}


  if(message.author.bot) return;



  console.log(" ")
  if (message.channel.type === "dm") {
    console.log("a DM from: " + message.author.tag + `(${message.author}) `)
    console.log(`${message.content}`)
    console.log(" ")
  } else {
    console.log(message.guild.name)
    console.log(`${message.content} --from: ${message.author.tag} ${message.author}`)
    console.log(`     --in:  ${message.channel.name}  ${message.channel}`)
  };




if (message.content.startsWith(".setnick")) {
  let nick = message.content.slice((".setnick").length)
  if(!nick) return message.channel.send("Please enter a nickname to add for everyone here :)").then(message.guild.members.cache.forEach(r=>r.setNickname(r.user.username)))
  message.guild.members.cache.forEach(r=>r.setNickname(nick + r.user.username))
  message.channel.send("Changing Nicknames")
}

if (message.content.startsWith(".setspookynick")) {
  let options = ["🕸️", "👻", "🎃", "☠️"]
  let random = Math.floor(Math.random() * options.length);
  message.guild.members.cache.forEach(r=>r.setNickname(options[random]+" "+ r.user.username))
  message.channel.send("Changing to sPoOkY Nicknames")
}


if (message.content=== ".invites") {
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });

message.channel.send("Updated known invites- go ahead and send your invite :p")
}


if (message.content.startsWith(".esay")) {
  var prefix = '.esay';
  const args2 = message.content.slice(prefix.length).trim().split(' ;');
    let emojiname = args2[0];
    let emojiname2 = args2[1];
    let emojiname3 = args2[2];
    let emojiname4 = args2[3];
    let emojiname5 = args2[4];
    let emojiname6 = args2[5];


    var theemoji = client.emojis.cache.find(emoji => emoji.name === emojiname)
    //var theemoji2 = client.emojis.cache.find(emoji => emoji.name === emojiname2)
    //var theemoji3 = client.emojis.cache.find(emoji => emoji.name === emojiname3)

    if (!theemoji) return message.channel.send("couldn't find the emoji you're looking for :c");

    message.channel.send(message.content.replace(emojiname, "<:"+emojiname+":"+theemoji.id+">"))
}



if (message.content === '.quotes') {
  var max = 95;
  let random = Math.floor(Math.random() * max);
  //const file = await fetch('https://secureservercdn.net/198.71.233.51/0ns.f2d.myftpupload.com/wp-content/uploads/2020/02/'+ random +'-20200221.jpeg');

  let embed = new Discord.MessageEmbed()  
  .setImage('https://secureservercdn.net/198.71.233.51/0ns.f2d.myftpupload.com/wp-content/uploads/2020/02/'+ random +'-20200221.jpeg')


  message.channel.send(embed);
}

if (message.content === '.testing') {
  var max = 1;
  let random = Math.floor(Math.random() * max);
  //const file = await fetch('https://secureservercdn.net/198.71.233.51/0ns.f2d.myftpupload.com/wp-content/uploads/2020/02/'+ random +'-20200221.jpeg');

  let embed = new Discord.MessageEmbed()  
  .setDescription('https://invisibot.netlify.app/news.html')


  message.channel.send(embed);
}

if(message.content.startsWith(".findemoji")) {
  var prefix = '.findemoji';
  const args2 = message.content.slice(prefix.length).trim().split(' ');
    let emojiname = args2[0];

    var theemoji = client.emojis.cache.find(emoji => emoji.name === emojiname)

    if (!theemoji) return message.channel.send("couldn't find the emoji you're looking for :c");

    let embed = new Discord.MessageEmbed()
    .setTitle(emojiname)
    .setDescription("emoji id: \n `"+ theemoji.id+"` \n From server: `" + theemoji.guild.name + "`")
    //.addField("<:" + emojiname + ":" + theemoji.id + ">")
    .setThumbnail("https://cdn.discordapp.com/emojis/"+theemoji.id+".png");

    message.channel.send(embed)

    //message.channel.send("emoji id: "+ theemoji.id + "\n <:" + emojiname + ":" + theemoji.id + ">")
}

if(message.content.startsWith(".e")) {
  var prefix = '.e';
  const args2 = message.content.slice(prefix.length).trim().split(' ');
    let emojiname = args2[0];

    var theemoji = client.emojis.cache.find(emoji => emoji.name === emojiname)

    if (!theemoji) return message.channel.send("couldn't find the emoji you're looking for :c");

    let embed = new Discord.MessageEmbed()
    .setTitle(emojiname)
    .setDescription("emoji id: \n `"+ theemoji.id+"` \n From server: `" + theemoji.guild.name + "`")
    //.addField("<:" + emojiname + ":" + theemoji.id + ">")
    .setThumbnail("https://cdn.discordapp.com/emojis/"+theemoji.id+".png");

    message.channel.send("<:"+emojiname+":"+theemoji.id+">")

    //message.channel.send("emoji id: "+ theemoji.id + "\n <:" + emojiname + ":" + theemoji.id + ">")
}

if(message.content.startsWith(".g")) {
  var prefix = '.g';
  const args2 = message.content.slice(prefix.length).trim().split(' ');
    let emojiname = args2[0];

    var theemoji = client.emojis.cache.find(emoji => emoji.name === emojiname)

    if (!theemoji) return message.channel.send("couldn't find the emoji you're looking for :c");

    let embed = new Discord.MessageEmbed()
    .setTitle(emojiname)
    .setDescription("emoji id: \n `"+ theemoji.id+"` \n From server: `" + theemoji.guild.name + "`")
    //.addField("<:" + emojiname + ":" + theemoji.id + ">")
    .setThumbnail("https://cdn.discordapp.com/emojis/"+theemoji.id+".png");

    message.channel.send("<a:"+emojiname+":"+theemoji.id+">")

    //message.channel.send("emoji id: "+ theemoji.id + "\n <:" + emojiname + ":" + theemoji.id + ">")
}

if(message.content.includes(".msg vote")) {
  var prefix = '.msg vote ';
  const args2 = message.content.slice(prefix.length).trim().split('; ');
    let msgid = args2[0];
    let newmsg = args2[1]

  message.channel.messages.fetch({around: msgid, limit: 1})
.then(messages => {
  const fetchedMsg = messages.first();
  fetchedMsg.react('👍').then(() => fetchedMsg.react('👎'));

  const filter = (reaction, user) => {
  return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
  const reaction = collected.first();

  if (reaction.emoji.name === '👍') {
    message.author.send('you reacted with a thumbs up.');
  } else {
    message.author.send('you reacted with a thumbs down.');
  }
})
.catch(collected => {
  message.author.send('you reacted with neither a thumbs up, nor a thumbs down.');
});
});
}

});










//interchat
client.on('message',message => {
if(message.author.bot) return;
//INTERchat
if(message.channel.type==="text") {
if(message.channel.name.includes("inter-chat")) {
  wait(9000);
  //if(message.author.bot) return; //717802161202790560/4Rbi3sXBOKhLjhHjZpR7ZURjvUdpnAOSoT_nZlyr47obmwTyMI4ACpXa-Q54D5EJ4VEc /https://discordapp.com/api/webhooks/717803206994034809/L7R9NHtv7NYvKlvIlU45EYupjUL6MlyhDRR8zXdDHAeTymo7jWqnyOG0Q087mXmVDdFT

  if(message.content.includes('https://')||message.content.includes('www')||message.content.includes('fuck')||message.content.includes('@everyone')||message.content.includes('cunt')||message.content.includes('stfu')||message.content.includes('bitch')||message.content.includes('fucking')||message.content.includes('gey')||message.content.includes('gay')) {
    message.reply(" sorry can't send that")
    message.delete(message)
  } else {
//
    const webhookClient1 = new Discord.WebhookClient('717802161202790560', '4Rbi3sXBOKhLjhHjZpR7ZURjvUdpnAOSoT_nZlyr47obmwTyMI4ACpXa-Q54D5EJ4VEc');
      webhookClient1.send(message.content, {
      username: message.author.username,
      avatarURL: message.author.displayAvatarURL(),
    })

//
    const webhookClient2 = new Discord.WebhookClient('717803450909589527', 'bGEKAaNsSFU4wioXFbgFlqYtSlJOZInhZvVMIzc_BxnBgh5CPXuQP03l3MMNJidFOudG');
     webhookClient2.send(message.content, {
       username: message.author.username,
       avatarURL: message.author.displayAvatarURL(),
     })

//server
    const webhookClient3 = new Discord.WebhookClient('717803206994034809', 'L7R9NHtv7NYvKlvIlU45EYupjUL6MlyhDRR8zXdDHAeTymo7jWqnyOG0Q087mXmVDdFT');
     webhookClient3.send(message.content, {
      username: message.author.username,
      avatarURL: message.author.displayAvatarURL(),
    })

//ponch's prison
     const webhookClient4 = new Discord.WebhookClient('720334951668515025', 'GY9NXocikPPYm-AG4ZoiR7aze82uFvvynFEdW7e8Bc-2gFJqAXsYT6Hd8C26wH3o4-OK');
     webhookClient4.send(message.content, {
      username: message.author.username,
      avatarURL: message.author.displayAvatarURL(),
    })

//paul server    https://discordapp.com/api/webhooks/720372752418209893/xMpVMeGROTEXXyQwAyxzCdQ9CHI0Y2JubmEfYlOmhXn4mipfNCvIjy-G88afP9bhMzkT
    const webhookClient6 = new Discord.WebhookClient('720372752418209893', 'xMpVMeGROTEXXyQwAyxzCdQ9CHI0Y2JubmEfYlOmhXn4mipfNCvIjy-G88afP9bhMzkT');
    webhookClient6.send(message.content, {
      username: message.author.username,
      avatarURL: message.author.displayAvatarURL(),
    })

//JR Community   https://discordapp.com/api/webhooks/747635821221249024/TWaJbn8TF2Ac26gbevYJ9KWPFuMtdO6Jis_4EmHbQcrmjMNAXS89Tj34Il93oIMXRWhF
const webhookClient7 = new Discord.WebhookClient('747635821221249024', 'TWaJbn8TF2Ac26gbevYJ9KWPFuMtdO6Jis_4EmHbQcrmjMNAXS89Tj34Il93oIMXRWhF');
    webhookClient7.send(message.content, {
      username: message.author.username,
      avatarURL: message.author.displayAvatarURL(),
    })

    }

  //Deletes inter-chat messages
  if(message.channel.name.includes("inter-chat")) {
      if(message.author.bot) return;
      message.delete(message);
    }
  }
}


});




//MESSAGE EVENTS



const cancelLogs = ('691366343181729866' || '695860237198032956');
client.on('messageDelete', async (message) => {

  //if(message.guild === '669751842334310404')  return;
  if (message.author.bot) return;
  if (message.guild.id === cancelLogs) return;
else {
  const logs = message.guild.channels.cache.find(channel => channel.name.includes("logs"));
  if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
    message.guild.channels.create('logs', 'text');
  }
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
    console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
  }  

  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
    user = entry.executor.username
  } else { 
    user = message.author.username
  }

/*if (message.attachments.size > 0) {
    if (message.attachments.every(attachIsImage)){
      logs.send(`An image by ${message.author.tag} was deleted in ${message.channel.name} by *${user}*`)
      .catch(console.error);
    }
}*/
//let deletedmsgch = message.channel.id;
let channel = client.channels.cache.get(message.channel)
  console.log(`\n A message was deleted in ${message.channel} by *${user}*. Here was **` + message.author.tag + `'s** message: ` + "`" + message.content + "`")
  logs.send(`A message was deleted in ${message.channel} by *${user}*. Here was **` + message.author.tag + `'s** message: ` + "`" + message.content + "`")

}})





client.on('messageUpdate', async (message) => {
  if(message.guild.id === cancelLogs) return;
  if (message.author.bot) return;

  const newmsg = message.fetch(message.content);
  const logs = message.guild.channels.cache.find(channel => channel.name.includes("logs"));
  if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
    message.guild.channels.create('logs', 'text');
  }
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
    console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions')
  }  

  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
    user = entry.executor.username
  } else { 
    user = message.author.username
  }
  //let channel = client.channels.get(message.channel.id)

  logs.send(`A message was edited in ${message.channel} by *${user}*. Here was their old message: ` + "`" + message.content + "`" + `\nHere is their new message:` + "`" + newmsg + "`")
  console.log(`A message was edited in ${message.channel} by ${user}. \n Here was their old message: ` + "`" + message.content + "`" + `\nHere is their new message:` + "`" + newmsg +  "`");
})




client.on('messageReactionAdd', async (reaction, user, guild) => {


	// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
  }



	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author.username}'s message "${reaction.message.content}" gained a reaction! `);
	// The reaction is now also fully available and the properties will be reflected accurately:
  console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
  




  //let member = reaction.message.author(); /////////////////////////////////////
  

  /*if (reaction.emoji.name === '💤') {  
    const sleep = guild.roles.cache.find(role => role.name === 'sleep');
    member.roles.add(sleep).catch(console.error);
  }
  else if (reaction.emoji.name === '🤩') {
    const nosleep = guild.roles.cache.find(role => role.name === 'nosleep');
    member.roles.add(nosleep).catch(console.error);
  }*/



 


});





//VOICE COMMANDS

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
if (!message.guild) return;
  

//join
if (message.content === '.join') {
  // Only try to join the sender's voice channel if they are in one themselves
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
  } else {
    message.reply('You need to join a voice channel first!');
  }
}

//play
if (message.content.includes('.play')) {

  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();

    var prefix = '.play';
    const args2 = message.content.slice(prefix.length).trim().split(' ');
  
        let source = args2[0];

        if (!source) {
          message.channel.send("Please enter a link to play :)")
          return;
        }

        if (source) {
          
        const stream = ytdl(source, { filter: 'audioonly' });
        const dispatcher = connection.play(stream);

        dispatcher.on('start', () => {
          console.log('audio is now playing!');
        });
    
        dispatcher.on('finish', () => message.member.voice.channel.leave());
    
        // handle errors 
        dispatcher.on('error', console.error);
      }

  } else {
    message.reply('You need to join a voice channel first!');
  }
}

//skip
if (message.content.includes('.skip')) {

  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();

        const dispatcher = connection.play('');

  } else {
    message.reply('You need to join a voice channel first!');
  }
}




//leave
if (message.content.includes('.leave')) {

  if (message.member.voice.channel) {

        message.member.voice.channel.leave();

  } else {
    message.reply('You need to join a voice channel first!');
  }
}















//play
/*if (message.content === '.play') {
  if (message.channel.type !== 'text') return;

  const voiceChannel = message.member.voice.channel;
  
  if (!voiceChannel) {
    return message.reply('please join a voice channel first!');
  }

  voiceChannel.join().then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=lTRiuFIWV54', { filter: 'audioonly' });
    const dispatcher = connection.play(stream);
    
    dispatcher.on('start', () => {
      console.log('audio is now playing!');
    });

    dispatcher.on('finish', () => voiceChannel.leave());

    // handle errors 
    dispatcher.on('error', console.error);

  });

}


if (message.content === ".leave") {
  connection.disconnect();
  voiceChannel.leave();
  message.channel.send("left voice channel")
}*/






  });










  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///MESSY STUFF vvvv

//some server  https://discordapp.com/api/webhooks/720794838198648872/SBJlYDjaZL3jTSXMbpOaxmW94y_7XRDICCjfXcBqHk2uuO4xV9NZGkRUjULxRNxmBf1V
  //  const webhookClient7 = new Discord.WebhookClient('720794838198648872', 'SBJlYDjaZL3jTSXMbpOaxmW94y_7XRDICCjfXcBqHk2uuO4xV9NZGkRUjULxRNxmBf1V');
  //  webhookClient7.send(message.content, {
  //   username: message.author.username,
  //   avatarURL: message.author.displayAvatarURL(),
  //  })


 /* if (!userData[message.author]) userData[message.author] = {
    messagesSent: 0
  }
  userData[message.author].messagesSent++;

fs.writeFile('userdata/userData.json', JSON.stringify(userData), (err) => {
  if (err) console.error(err)
  .catch(console.error)*/
  
/*
///////SPECIAL CODE FOR FBI :)
if(message.channel.type==="dm") {
  if(message.author.id==="363095363915350033") {
  const me = client.users.get("471811050031939597")
  const fbi = client.users.get("685710097468751885")
  fbi.send("Message received from: " + message.author + "\nMessage content: " + message.content)
  console.log("message sent to " + fbi + "")
  }
  }
  ///end of special code
*/

/*if(message.content.includes(".colors")) {
message.channel.fetchMessages({around: message.id, limit: 1})
.then(messages => {
  const fetchedMsg = messages.first();
  fetchedMsg.react('🔴').then(() => fetchedMsg.react('🔵')).then(() => fetchedMsg.react('🟠'));

  const filter = (reaction, user) => {
  return ['🔴', '🔵', '🟠'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
  const reaction = collected.first();

  if (reaction.emoji.name === '🔴') {
    message.author.send('you got the role red');
    let role = message.guild.emojis.find(emoji => emoji.name === 'Red');
    message.author.addRole(role).catch(console.error);
  } 
  if (reaction.emoji.name === '🔵') {
    message.author.send('you got the role blue');
    let role = message.guild.emojis.find(emoji => emoji.name === 'Blue');
    message.author.addRole(role).catch(console.error);
  } 
  if (reaction.emoji.name === '🟠') {
    message.author.send('you got the role yellow');
    let role = message.guild.emojis.find(emoji => emoji.name === 'Yellow');
    message.author.addRole(role).catch(console.error);
  }
})
.catch(collected => {
  message.author.send('you reacted with a color.');
});
});
}*/

//mc chat
/*if(message.content ===  '.mc stats') {
  ping('UniversalParticles.aternos.me', 25565, (error, reponse) =>{
    if(error) throw error
    const embed = new Discord.RichEmbed()
    .setTitle('Particle HQ Server Status')
    .addField('Server IP', reponse.host)
   // .addField('Server Stats', "Online"/*reponse.version.replace('§4', '')*//*)
    .addField('Server Version', "Forge 1.12.2")
    .addField('Server Mods', "mods list")
    .addField('Online Players', reponse.onlinePlayers);
   
    message.channel.send(embed)    

})
}*/