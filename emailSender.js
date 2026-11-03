require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail() {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "test@example.com",
    subject: "Node.js Checkpoint",
    text: "Hello! This email was sent using Node.js and Nodemailer with Ethereal Email.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
}

sendEmail();
