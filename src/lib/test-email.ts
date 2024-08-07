const nodemailer = require('nodemailer');

// Configure your SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to: 'recipient@example.com', // List of recipients
      subject: 'Test Email', // Subject line
      text: 'This is a test email sent from ts-node!', // Plain text body
      html: '<p>This is a test email sent from <b>ts-node</b>!</p>', // HTML body
    });

    console.log('Email sent successfully:', info);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

sendEmail();
