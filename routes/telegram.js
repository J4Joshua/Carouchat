var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('chatbot activated');
});

module.exports = router;



const TelegramBot = require('node-telegram-bot-api');
const token = '6193639537:AAG7_wGoWj8Q8lXA98l6qoucYw7wKbpA_uo';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var input = msg.text;
  if (msg.text=='George') bot.sendMessage(chatId, 'Boi gay af frfr');
  if (msg.text=='Yi Liang') bot.sendMessage(chatId, 'NO SEX NO SEX');
  if (msg.text=='Samuel') bot.sendMessage(chatId, 'WENDeeznuts on ur face');
  if (msg.text=='Jeremiah') bot.sendMessage(chatId, 'whine more please');
  if (msg.text=='Joshua') bot.sendMessage(chatId, 'lil bro i didnt say type my name');

});