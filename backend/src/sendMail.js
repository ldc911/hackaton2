const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (req, res) => {
  const { userName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

  const mailOptions = {
    from: "notification@cellsforce.net",
    to: email,
    subject: "Welcome to this new project",
    text: `Dear: ${userName} \n\n ${message} `,
    html: `<p> Dear: ${userName} \n\n ${message} </p> <p>${message} </p>`,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message sent");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};
module.exports = {
  sendMail,
};
