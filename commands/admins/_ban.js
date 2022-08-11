/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.setProperty("" + id + "", "ban");
Bot.sendMessageToChatWithId(id, "🚫 Вы были забанены!");
Api.banChatMember({
    chat_id: "-1001651285486",
    user_id: id
 });
Api.banChatMember({
    chat_id: "-1001323656474",
    user_id: id
 });
Api.banChatMember({
    chat_id: "-1001632745210",
    user_id: id
 });
