/*CMD
  command: LTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 11){
 User.setProperty("withdrow", "LTC");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "💰 Кошелёк для оплаты: `6157czWYWwzdXiJZQqkzFFm2ysfko31wfy5L2BXLhgdE`");
}
