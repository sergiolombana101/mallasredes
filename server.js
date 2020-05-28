const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(__dirname+'/dist'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})
var nodemailer = require('nodemailer');

function sendEmail(values){
    var transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'gbc.shiva.exports@gmail.com',
            pass: 'cheesebagel8'
        }
      });
    url = values["url"];
    var mailOptions = {
        from:"gbc.shiva.exports@gmail.com",
        to: values["email"],
        subject: 'Recover Password',
        text : 'Hi,\nYou have requested a new password. Please click the link below and follow the '+
              'instructions to get a new password.\n'+url+'\n\nThanks,\nGBC Shiva Exports Team.'
  
    }

    //log file logic to be decided for send mail so info isn't saved to console

    transporter.sendMail(mailOptions, (error,info)=>{
        if(error){
            var stream = fs.createWriteStream('../logs/assetlog.txt', {flags: 'a'})
            var date = new Date()();
            stream.write("***\n" + date + ": " + "password reset failed to be sent for email:  " + values["email"] + "\nError log: " +
            error + "\n***\n") 
        }else{
            var stream = fs.createWriteStream('../logs/pwresetlog.txt', {flags: 'a'})
            var date = new Date()();
            stream.write(date + ": password reset mail sent for username: " + values["email"] + "\n")
            res.status(200)
        }
    });
}