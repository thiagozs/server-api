var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:provider/callback', function(req, res, next) {
  res.json({ message: 'OK' });
});

module.exports = router;
