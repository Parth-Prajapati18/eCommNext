const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'parthprajapati1862@gmail.com',
        pass: 'wthcgaucmbemswsp',
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from: 'parthprajapati1862@gmail.com',
            to,
            subject,
            text,
        });
        console.log('Email sent:', info.response);
    } catch (error) {;
        console.error('Error sending email:', error);
    }
};

export default async function sendUserEmail(req, res) {
    const { email, subject, message } = req.body;
  
    try {
      await sendEmail(email, subject, message);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  }

