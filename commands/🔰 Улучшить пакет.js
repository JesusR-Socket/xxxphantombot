/*CMD
  command: 🔰 Улучшить пакет
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner3ban"){
 Bot.runCommand("main_menu");
} else {
if (stat == "partner1" | stat == "partner1ban"){
 Bot.sendKeyboard("💎ПРЕМИУМ💎,\n💰СТАНДАРТНЫЙ💰,\n‼️ Чем отличаются пакеты,\n❌ Вернуться","⭕️ Выберете до какого пакета хотите улучшить:");
} else if (stat == "partner2" | stat == "partner2ban"){
 Bot.sendKeyboard("💎ПРЕМИУМ💎,\n‼️ Чем отличаются пакеты,\n❌ Вернуться","⭕️ Выберете до какого пакета хотите улучшить:");
}
}
