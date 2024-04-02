var express = require('express');
var router = express.Router();

const options = {month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date().toLocaleString([], options)
    },
    {
      text: "Hey, whats up!",
      user: "Charles",
      added: new Date().toLocaleString([], options)
    }
 ];
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chatroom', messages: messages });
});

router.get('/new', function(req, res, next) {
    res.render('form')
});

router.post('/new', function(req, res, next) {
    messages.push({text: req.body.message, user: req.body.author, added: new Date().toLocaleString([], options)})
    res.redirect('/') 
});

module.exports = router;
