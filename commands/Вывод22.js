/*CMD
  command: Вывод22
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("Вывод22");
}
else {
var withd = User.getProperty("withdrow");
var wallet = User.getProperty("PaytmWallet");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");

if(data.message < 40 ){
Bot.sendMessage("_❌ Минимальный вывод 40$_")
Bot.runCommand("Вывод22");
}else{
if(data.message > balanceAll.value()){
Bot.sendMessage("_❌ Недостаточно средств, у Вас на счету: "+balanceAll.value().toFixed(2)+" $_")
Bot.runCommand("Вывод22");
}else{
Bot.sendMessage("✅ Запрос отправлен\n\n💰 Сумма: "+data.message+" $\n💳 Кошелёк: "+ withd + " - "+wallet+"\n\n⛔️ Вывод может занимать до 5 дней!")
balanceAll.add(-data.message);
Api.sendMessage({ 
chat_id: "@fffanomxxxadmin", 
text: "🔋 Новый подтверждённый платеж\n\nСтатус : Подтверждён\nTelegramId :* "+user.telegramid+"*\nСумма : *"+data.message+" USDT*\n\nКошелёк:\n"+ withd +": \n`"+wallet+"`" , 
parse_mode: "Markdown"})
}
User.setProperty("withdrow", null);
User.setProperty("PaytmWallet", null);
User.setProperty("buy", null);
Bot.runCommand("main_menu");
}
}
