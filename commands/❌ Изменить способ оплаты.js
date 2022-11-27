/*CMD
  command: ❌ Изменить способ оплаты
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buy = User.getProperty("buy");
if (buy == 1){
Bot.runCommand("⚔️НАЧИНАЮЩИЙ⚔️");
} else if (buy == 2) {
Bot.runCommand("💰СТАНДАРТНЫЙ💰");
} else if (buy == 3) {
Bot.runCommand("💎ПРЕМИУМ💎");
} else if (buy == 100) {
Bot.runCommand("🔮ПРЕМИУМ ПОЖИЗНЕННЫЙ🔮");
} else {
User.setProperty("buy", null);
Bot.runCommand("main_menu");
}

