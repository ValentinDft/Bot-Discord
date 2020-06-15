const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.login(config.token);


client.on('message', msg => {
  if (msg.content === 'ca va ?') {
    msg.reply('bien et vous ?');
  } else if (msg.content === 'bien') {
    msg.reply('Cool Cool Cool');
  }
});