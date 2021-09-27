const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/847877405728440371/883725673263423488/untitled.png"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `m!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `m!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `m!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:white_small_square: | **m!eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **m!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **m!logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız.


`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | ** Bot Her Gün Güncelleniyor!**.
:white_small_square: | **Bot TürkMad'a Ayittir** `
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/KFJxfX5D3k) \n >  » [Botun Davet Linki](https//discord.com/api/oauth2/authorize?client_id=791609110658547782&permissions=8&scope=bot) \n > » [Oy Verebilirsiniz](https://top.gg/bot/791609110658547782/vote) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
