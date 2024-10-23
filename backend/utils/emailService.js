// utils/emailService.js
const nodemailer = require('nodemailer');

const sendAlertEmail = (city, message) => {
  // Configure with your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'purvisolanki20695@acropolis.in',
      pass: 'Purvi@@@180602',
    },
  });

  const mailOptions = {
    from: 'purvisolanki20695@acropolis.in',
    to: 'purvisolanki018@gmail.com',
    subject: `Weather Alert for ${city}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = {
  sendAlertEmail,
};