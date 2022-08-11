/*CMD
  command: 💸 Оплатить
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");

User.setProperty("buy", 10);

Bot.runCommand("💎ПРЕМИУМ💎")
