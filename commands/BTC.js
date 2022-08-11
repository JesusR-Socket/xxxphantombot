/*CMD
  command: BTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 11){
 User.setProperty("withdrow", "BTC");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "💰 Кошелёк для оплаты: `3J1A4e5E33BkhiRRb2miA8cCdQLj4yFxCu`");
}
