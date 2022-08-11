/*CMD
  command: ✅ Я оплатил4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("✅ Я оплатил4");
}
else {
var pack;
var id = user.telegramid;
var name = User.getProperty("name");
if (User.getProperty("buy") == 3){
 pack = "Премиум";
} else if (User.getProperty("buy") == 2){
 pack = "Стандартный";
} else if (User.getProperty("buy") == 1){
 pack = "Начинающий";
} else if (User.getProperty("buy") == 4){
 pack = "С начинающего до среднего";
} else if (User.getProperty("buy") == 5){
 pack = "С начинающего до премиум";
} else if (User.getProperty("buy") == 6){
 pack = "С среднего до премиум";
} else if (User.getProperty("buy") == 10){
 pack = "Продление подписки";
} else if (User.getProperty("buy") == 100){
 pack = "Премиум пожизненный";
}

if (!request.photo[0]) {
  Bot.sendMessage("📸 Вы не отправили скриншот 📸");
  Bot.runCommand("✅ Я оплатил4");
} else {
  Api.sendPhoto({
    chat_id: "@fffanomxxxadmin",
    photo: request.photo[0].file_id,
    caption: "Пакет: "+pack +"\nИмя\n" + name + "\nTelegramID:\n"+id
  })
  Bot.runCommand("main_menu");
}

User.setProperty("name", null);
User.setProperty("buy", null);

Bot.sendMessage("✅ Успешно! Ожидайте подтверждения оплаты от модератора");

}
