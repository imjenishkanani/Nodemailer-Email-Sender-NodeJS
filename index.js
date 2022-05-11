var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jenishkanani00@gmail.com',
        pass: 'your password'
    }
});

var mailOptions = {
    from: 'jenishkanani00@gmail.com',
    to: 'jenishkanani73@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
