// import SMTP from 'smtpjs';

// export const sendHubCreationEmail = async (to: string, hubName: string, userName: string) => {
//   try {
//     const smtp = SMTP('your-smtp-server', 'your-email@gmail.com', 'your-email-password');

//     const response = await smtp.send({
//       Host: "smtp.gmail.com",
//       Port: 587,
//       Username: process.env.EMAIL_USER,
//       Password: process.env.EMAIL_PASS,
//       To: to,
//       From: process.env.EMAIL_USER,
//       Subject: "Hub Created Successfully",
//       Body: `Dear ${userName},

// Your hub "${hubName}" has been created successfully.

// Thank you for using our platform!`,
//     });

//     console.log('Email sent successfully:', response);
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Failed to send email');
//   }
// };
