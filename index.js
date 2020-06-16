const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.login(config.token);

// Réponse du bot suivant une phrase
bot.on('message', msg => {
  if (msg.content === 'ca va ?') {
    msg.channel.send('bien et vous ?');
  } else if (msg.content === 'bien') {
    msg.channel.send('Cool Cool Cool');
  }
});