/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
return;
}
else {
function hello(message) {
var greetings = "";
}

Bot.sendMessage("*🙋🏻‍♂️Привет, я бот уникального сообщества  XXX PHANTOM.\n\n⚙️С помощью бота  ты  узнаешь  подробнее о самом сообществе, об обучающей программе и тд.\nПоймёшь как тебе начать зарабатывать,  используя бота и криптовалюты.\n\n⚠️В боте есть максимально  щедрая и продуманная система рекомендаций в 5 уровней с выплатой в сеть 90%💰\n\nВывод на карту или ваш крипто кошелёк💵\n\nТаких выплат нету даже у топовых  сетевых компаний.\n\nС помощью неё в первый месяц новички могут зарабатывать от 500-3000$ только за активную работу без инвестиций.\n\n\nА если пользоваться инструментами и сигналами самого сообщества\n«XXX PHANTOM»\nдоход может быть вовсе не ограничен…\n\n\n+ использовать более 6 инструментов активного и пассивного дохода на криптовалюте👨🏻‍💻\n\nNFT\nСигналы фьючерсы\nДоступы на ранней стадии в проекты.\nПрисейлы и тд.\n\n\n👇ЖМИ  УЗНАТЬ ПОДРОБНЕЕ👇*")

var video2 = Bot.getProperty("video3");

Api.sendVideo({
  video: video2,
  caption: "Смотри это видео, чтобы понять как тут можно заработать и почему тебе это надо."
});

function doTouchOwnLink() {
Bot.sendMessage("*Вы не можете пригласить самого себя ❌*");
}

function doAttracted(channel) {
hello("Referal: " + channel);
}

function doAtractedByUser(refUser) {
hello("");
refUser = Libs.ReferralLib.getAttractedBy().telegramid;
Bot.setProperty("referral:"+user.telegramid,refUser,"string");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
}

Libs.ReferralLib.currentUser.track(trackOptions);
Bot.runCommand("check");
}
