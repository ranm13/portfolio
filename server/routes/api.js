const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  });
  
router.post('/sendMail', (req, res) => {
    console.log(process.env.GMAIL_USER)
    const mailOptions = {
        from: req.body.name,
        to: process.env.GMAIL_USER,
        subject: req.body.subject,
        text: `Mail: ${req.body.email} \n\r ${req.body.message}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(400).json(error);
        } else {
         res.status(200).send('Email sent: ' + info.response);
        }
      });
})

module.exports = router;