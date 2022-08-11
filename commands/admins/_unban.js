/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.setProperty("" + id + "", "user");
Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "📍 Вы были разбанены!")
Api.unbanChatMember({
    chat_id: "-1001651285486",
    user_id: id
 });
Api.unbanChatMember({
    chat_id: "-1001323656474",
    user_id: id
 });
Api.unbanChatMember({
    chat_id: "-1001632745210",
    user_id: id
 });
