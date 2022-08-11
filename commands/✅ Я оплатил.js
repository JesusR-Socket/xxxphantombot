/*CMD
  command: ✅ Я оплатил
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("❌ Изменить способ оплаты", "📌 Пожалуйста, напишите свое имя и фамилию:");
Bot.runCommand("✅ Я оплатил2");
