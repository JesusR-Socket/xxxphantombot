/*CMD
  command: ⚔️НАЧИНАЮЩИЙ⚔️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 7){
 User.setProperty("buy", 1);
 Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "Нажмите ✅ Я оплатил для дальнейших действий\n☎️ По всем вопросам пишите: @XXXPHANTOM_SUPPORT");
}else{
Bot.sendKeyboard("💳 Карта,💎 USDT,\n❌ Вернуться", "⭕️ Выберите способ оплаты:");
User.setProperty("buy", 1);
}
