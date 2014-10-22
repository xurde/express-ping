var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express-Test' });
});

/* GET pong. */
router.get('/ping', function(req, res) {
  res.set({'Content-Type': 'application/json'});
  res.send({response: "pong" });
});

module.exports = router;
