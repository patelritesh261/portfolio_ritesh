var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

/* GET services page. */
router.get('/services', function(req, res) {
  res.render('service', { title: 'Services' });
});

/* GET services page. */
router.get('/profilepage', function(req, res) {
  res.render('profilepage', { title: 'Profile Page' });
});

/* GET services page. */
router.get('/contactus', function(req, res) {
  res.render('contactus', { title: 'Contact US' });
});

module.exports = router;
