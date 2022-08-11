/*CMD
  command: 💎 USDT
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 11){
Bot.sendKeyboard("USDT TRC20, USDT BEP20,\nBTC, Solana, LTC,\n❌ Вернуться","⭕️ Выберите в чём выводить:");
} else {
Bot.sendKeyboard("USDT TRC20, USDT BEP20,\nBTC, Solana, LTC,\n❌ Вернуться","⭕️ Выберите в чём платить:");
}

if (User.getProperty("buy") == 4){
 Bot.sendMessage("🛑ВНИМАНИЕ! Для апгрейда Вам надо доплатить 100$🛑")
} else if (User.getProperty("buy") == 5){
 Bot.sendMessage("🛑ВНИМАНИЕ! Для апгрейда Вам надо доплатить 300$🛑")
} else if (User.getProperty("buy") == 6){
 Bot.sendMessage("🛑ВНИМАНИЕ! Для апгрейда Вам надо доплатить 200$🛑")
}
