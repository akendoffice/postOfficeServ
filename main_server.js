var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "enter your email",
pass: "enter your passowrd"
}
});


app.get('/',function(req,res){
    res.send('Hey! What's up?');
});

app.get('/send',function(req,res){

	var mailOptions={
		//from : "customer_data@abc.com",
		to : req.query.to,
		subject : req.query.sub,
		text : req.query.txt
	}

console.log(mailOptions);

smtpTransport.sendMail(mailOptions, function(error, response){
	if(error){
		console.log(error);
		res.end("error");
	} else{
		console.log("Message sent: " + response.message);
		res.end("sent");
	}
});
});

app.listen(3000,function(){
console.log("Express Started on Port 3000");
});
