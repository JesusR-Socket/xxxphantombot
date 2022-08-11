/*CMD
  command: USDT TRC20
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 11){
 User.setProperty("withdrow", "USDT TRC20");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "💰 Кошелёк для оплаты: `TBRkFbgTPrWULYQKPT5C9QCZVxBWFh8nXa`");
}
