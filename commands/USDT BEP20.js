/*CMD
  command: USDT BEP20
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 11){
 User.setProperty("withdrow", "USDT BEP20");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "💰 Кошелёк для оплаты: `0x1Ec31e8F64142D5Fc5a948Fd0103A2Fa0d9505fA`");
}

