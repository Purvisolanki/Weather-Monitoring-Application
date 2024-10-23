// utils/emailService.js
const nodemailer = require('nodemailer');

const sendAlertEmail = (city, message) => {
  // Configure with your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'password',
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'receiver_email@gmail.com',
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
