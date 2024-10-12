var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', function(req, res){
  res.render('index', {title:'로그인', pageName:'users/login.ejs'})
});

router.get('/join', function(req, res){
  res.render('index', {title:'회원가입', pageName:'users/join.ejs'})
});

router.get('/mypage', function(req, res){
  res.render('index', {title:'마이페이지', pageName:'users/mypage.ejs'})
});

router.get('/cart', function(req, res){
  res.render('index', {title:'장바구니', pageName:'users/cart.ejs'});
});

module.exports = router;
