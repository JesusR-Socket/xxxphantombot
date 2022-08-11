/*CMD
  command: 💳 Списать с баланса
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var stat = Bot.getProperty("" + user.telegramid + "");
var days = Bot.getProperty("Subscribe:" + user.telegramid + "");

if (stat == "partner1" | stat == "partner1ban"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.setProperty("" + user.telegramid + "", "partner3");
 Bot.setProperty("Subscribe:" + user.telegramid + "", days + 32);
 }
} else if (stat == "partner2" | stat == "partner2ban"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.setProperty("" + user.telegramid + "", "partner3");
 Bot.setProperty("Subscribe:" + user.telegramid + "", days + 32);
 }
} else if (stat == "partner3" | stat == "partner3ban"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.setProperty("" + user.telegramid + "", "partner3");
 Bot.setProperty("Subscribe:" + user.telegramid + "", days + 32);
 }
}
