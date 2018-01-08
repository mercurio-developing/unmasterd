// server.js

// modules =================================================
var express = require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var forceSsl = require('force-ssl-heroku');
var cors = require('cors');
var fs = require('fs');

var app = express();

app.use(forceSsl);
app.use(cors())


// configuration ===========================================
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "smtpunmasterd@gmail.com",
        pass: "unmasterd123"
    },tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});
// config files

// set our port
var port = process.env.PORT || 3000;

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/dist'));
// app.use((req, res) => res.sendfile(__dirname + '/dist/index.html'));

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/

/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
app.get('/downloads', function (req, res) {
    var filePath = "./assets/sample.pdf";

    fs.readFile(__dirname + filePath, function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
});
 

app.post('/sendmail', function (req, res) {
    console.log(req.body)
    
    var mailOptions = {
        from: req.body.email, // sender address
        subject: 'UNMASTERED contact', // Subject line
        html: '<h1>UNMASTERED CONTACT</h1></br><div><p><b>MESSAGE:</br></b>'+req.body.message+' </div><div><br>from: '+req.body.email+'</p></div>', // html body
        to:'mercuriodevelop@gmail.com'
        // to: 'eddienejgonzales@gmail.com'
    }

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            emailMessage = "there was an error :-(, and it was this: " + error.message;
        } else {
            emailMessage = "Message sent: " + info.response;
        }
        return res.json({
            message: "success",
            email: emailMessage
        });
    });
});

/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
    console.log("Express Started on Port 3000");
});


