var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('chatbot activated');
});

module.exports = router;

// get agent function
const { executeQueries } = require('./agent');

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
  var input = msg.text;
  const projectId = 'coffee-shop-qvsk';
  const sessionId = msg.chat.id;
  const query = input;
  const languageCode = 'en';
  
  (async () => {
    try {
      const fulfillmentText = await executeQueries(projectId, sessionId, query, languageCode);
      bot.sendMessage(sessionId, fulfillmentText);
      // Output: Array of fulfillment texts
      // You can further process or use the fulfillment texts as needed
    } catch (error) {
      console.error('An error occurred:', error);
    }
  })();
});