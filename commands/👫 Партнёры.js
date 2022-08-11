/*CMD
  command: 👫 Партнёры
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner1ban" | stat == "partner2ban" | stat == "partner3ban"){
 Bot.runCommand("main_menu");
} else {
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
let res = Libs.ResourcesLib.userRes("referral");
let lib = Libs.ReferralLib;
var refList = Libs.ReferralLib.getRefCount();

if (stat=="ban"){
 Bot.sendMessage("*Вы заблокированы*");
} else if (stat=="partner1") {
Bot.sendMessage("Пакет: *⚔️НАЧИНАЮЩИЙ⚔️* \n👥 Партнеров 1 линии: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+"$ заработано\n\n❌ 2 линия заблокирована\n\n❌ 3 линия заблокирована\n\n❌ 4 линия заблокирована\n\n❌ 5 линия заблокирована");
} else if (stat == "partner2"){
Bot.sendMessage("Пакет: *💰СТАНДАРТНЫЙ💰* \n👥 Партнеров 1 линии: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 2 линии: "+balanceCount2.value().toFixed(0)+" : "+balance2.value().toFixed(2)+"$ заработано\n\n❌ 3 линия заблокирована\n\n❌ 4 линия заблокирована\n\n❌ 5 линия заблокирована");
} else if (stat == "partner3"){
Bot.sendMessage("Пакет: *💎ПРЕМИУМ💎* \n👥 Партнеров 1 линии: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 2 линии: "+balanceCount2.value().toFixed(0)+" : "+balance2.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 3 линии: "+balanceCount3.value().toFixed(0)+" : "+balance3.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 4 линии: "+balanceCount4.value().toFixed(0)+" : "+balance4.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 5 линии: "+balanceCount5.value().toFixed(0)+" : "+balance5.value().toFixed(2)+"$ заработано");
}
}
