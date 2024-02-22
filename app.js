const nodemailer = require("nodemailer");
require('dotenv').config();
// Importing NodeMailer and env package

async function main() {
// Async function enables allows handling of promises with await

    // Defining send settings by creating a transporter:
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "erzhanulyazamat18@gmail.com", // Gmail address
            pass: process.env.EMAIL_PASS // App Password
        },
    });

    // Defining and sending message inside transporter.sendEmail() and await info about send from promise:
    let info = await transporter.sendMail({
        from: '"You" <testwebjs8@gmail.com>',
        to: "alisher.amir.1997@gmail.com",
        subject: "Test Email Check",
        html: `
    <h1>Hello there</h1>
    <p>This is my message!</p>
    `,
    });

    console.log("Message sent");
}

main()
    .catch(err => console.log(err));