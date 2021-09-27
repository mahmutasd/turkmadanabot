const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("  v12 sürümüyle sizlerle")
.setTitle(" ➤TürkMad logo menüsü komutları" )
 .setTimestamp()
.setDescription(" **m!altın** \n **m!anime** \n **m!arrow** \n **m!banner**   \n **m!green** \n  **m!habbo** \n **m!kalın** \n  **m!neonmavi** \ ")
.setImage("https://cdn.discordapp.com/attachments/847877405728440371/883725673263423488/untitled.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'logomenü'
}