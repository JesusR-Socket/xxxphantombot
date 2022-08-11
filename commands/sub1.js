/*CMD
  command: sub1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var days = Bot.getProperty("Subscribe:" + user.telegramid + "");

if (days == 1){
 var stat = Bot.getProperty("" + user.telegramid + "");
 if (stat == "partner1" | stat == "partner2" | stat == "partner3"){
 Bot.setProperty("Subscribe:" + user.telegramid + "", days - 1);
 Bot.clearRunAfter({
    label: "sub"
 })
  Api.banChatMember({
    chat_id: "-1001651285486",
    user_id: user.telegramid
 });
  Api.banChatMember({
    chat_id: "-1001323656474",
    user_id: user.telegramid
 });
  Api.banChatMember({
    chat_id: "-1001632745210",
    user_id: user.telegramid
 });
 Bot.sendMessage("⛔️ Ваша подписка закончилась ⛔️");
 Bot.setProperty("" + user.telegramid + "", stat + "ban");
 Bot.runCommand("main_menu");
}
} else {
 if (days == 32 | days == 22){
 Bot.sendMessage("🔰 У Вас осталось " + (days - 2) + " дней подписки 🔰");
} else if (days <= 12 & days > 6){
 Bot.sendMessage("⚠️ У Вас осталось " + (days - 2) + " дней подписки ⚠️");
} else if (days <= 6 & days > 3){
 Bot.sendMessage("⚠️ У Вас осталось " + (days - 2) + " дня подписки ⚠️");
} else if (days == 3){
 Bot.sendMessage("🛑 У Вас остался " + (days - 2) + " день подписки 🛑");
}
}

Bot.setProperty("Subscribe:" + user.telegramid + "", days - 1);

Bot.run( {
    command: "sub1",
    run_after: 60*60*24*10,
    label: "sub"
 } )
