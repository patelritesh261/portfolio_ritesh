var express = require('express');
var nodemailer = require("nodemailer");
var router = express.Router();

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "gmail",
    auth: {
        user: "patelritesh261@gmail.com",
        pass: "9558346094"
    }
});

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

/* send e-mail*/
router.get('/send',function(req,res){
    var mailOptions={
   to : req.query.to,
   subject :req.query.subject,
   text : req.query.text
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});
});
module.exports = router;
