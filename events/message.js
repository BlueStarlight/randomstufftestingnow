module.exports = (client, message) => {
  if(message.author.bot) return;
  //const index = require ('../index.js')
  const config = require ('../config.json');
  var prefix = config.prefix;
  client.prefix = prefix;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ /g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);
  if(cmd) {
      cmd.run(client, message, args);
  }
}

