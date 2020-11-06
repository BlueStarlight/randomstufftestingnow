exports.run = (client, message, args) => {
    
    message.channel.send("Hey")



    function update(msgId, time, channelid, prize, winnersInt, message) {

        setTimeout(function(){ 
    
            let gtime = time/3600000 + " hours remaining!";
            if(time < 3600000) {
                gtime = time/60000 + " minuets remaining!";
            }
    
            console.log(gtime + "p: " + prize);
    
            let embed = new Discord.MessageEmbed()
                .setColor("#7289da")
                            .setTitle("Giveaway!")
                .addField('Prize: ', prize)
                .addField('Amount of winners: ', winnersInt)
                           .addField('Time: ', gtime)
            const msg = message.channel.fetchMessage(msgId);
            msg.edit(embed);
    
            time - 60000;
    
            if(time > 0) {
                     update(msgId, time, channel, prize, winnersInt, message);
            }
    
        }, 60000);
    
    
    }

    message.channel.fetchMessages({around: msgId, limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(embed);
    });



    /*
    var prefix = '.';
    const args2 = message.content.slice(prefix.length).trim().split(/ +/g);
    //const command = args2.shift().toLowerCase();

        let age = args2[0]; // Remember arrays are 0-based!.
        let sex = args2[1];
        let location = args2[2];
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. TEST`);
      */
}