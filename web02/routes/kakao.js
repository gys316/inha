var express = require('express');
var router = express.Router();

router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});


module.exports = router;