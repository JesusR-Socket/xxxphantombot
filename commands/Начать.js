/*CMD
  command: Начать
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
Bot.runCommand("main_menu");
if (stat == "partner1"){
 Bot.sendMessage("🔒 Ссылка на чат: https://t.me/+-UHF2B44nYtjODYy");
} else if (stat == "partner2"){
 Bot.sendMessage("🔒 Ссылка на чат: https://t.me/+-UHF2B44nYtjODYy \n🔗 Ссылка на канал: https://t.me/+qluJuZh-D75mNzRi");
} else if (stat == "partner3"){
 Bot.sendMessage("🔒 Ссылка на чат: https://t.me/+-UHF2B44nYtjODYy \n🔗 Ссылка на канал: https://t.me/+qluJuZh-D75mNzRi \n📈 Ссылка на сигналы: https://t.me/+D9BDr5iuZJg5Njcy");
}
Bot.runCommand("sub1");
