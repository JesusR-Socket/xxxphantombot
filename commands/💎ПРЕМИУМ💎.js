/*CMD
  command: 💎ПРЕМИУМ💎
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (User.getProperty("buy") == 10){
 Bot.sendKeyboard("💳 Карта,💎 USDT,\n❌ Вернуться", "⭕️ Выберите способ оплаты:");
} else if (User.getProperty("buy") == 7){
 User.setProperty("buy", 3);
 Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "Нажмите ✅ Я оплатил для дальнейших действий\n☎️ По всем вопросам пишите: @XXXPHANTOM_SUPPORT");
}else {
 Bot.sendKeyboard("💳 Карта,💎 USDT,\n❌ Вернуться", "⭕️ Выберите способ оплаты:");
if (stat == "partner1" | stat == "partner1ban"){
 User.setProperty("buy", 5);
} else if (stat == "partner2" | stat == "partner2ban"){
 User.setProperty("buy", 6);
} else {
 User.setProperty("buy", 3);
}
}

