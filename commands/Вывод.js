/*CMD
  command: Вывод
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = User.getProperty("" + user.telegramid + "");

if (stat == "pratner1ban" | stat == "partner2ban" | stat == "partner3ban"){
 Bot.runCommand("main_menu");
} else {
User.setProperty("buy", 11);
Bot.sendKeyboard("💳 Карта,💎 USDT,\n❌ Вернуться", "⭕️ Выберите способ вывода:");

}
