# Node.js Email Sender using Nodemailer

## Overview
This is a simple Node.js script that utilizes the Nodemailer library to send emails through a Gmail SMTP server. It sends a test email to a specified recipient with a predefined subject and HTML content.

## Prerequisites
- Node.js installed on your machine
- Gmail account credentials (email address and an app password)

## Setup
1. Clone or download this repository to your local machine.
2. Install dependencies by running `npm install nodemailer dotenv`.
3. Create a `.env` file in the project root directory.
4. Inside the `.env` file, provide your Gmail email address and app password in the following format:
   EMAIL_PASS=your_app_password
5. Modify the `main` function in `index.js` to customize the sender, recipient, subject, and email content as per your needs.

## Usage
To run the script, execute `node index.js` in your terminal. This will trigger the `main` function, which sends the email using the configured settings.

## Important Note and My challenges
Make sure to enable "Less secure app access" in your Gmail account settings if you're using a regular Gmail account. Alternatively, you can set up 2-step verification and create an app password specifically for this application.
