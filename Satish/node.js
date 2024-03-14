const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Change the port as needed

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'satishshrestha528@gmail.com', // Your Gmail email address
            pass: 'Satish.956' // Your Gmail password or app-specific password
        }
    });

    // Email message options
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'satishshrestha528@gmail.com',
        subject: 'Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('An error occurred while sending the message.');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
