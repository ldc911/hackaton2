const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (req, res, next) => {
  const { firstName, lastName, email } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });
  const message =
    "Merci pour votre confiance et bienvenue dans la plus grande entreprise de location de véhicules sans permis. Nous sommes ravis de vous conmpter parmi nos utilisateurs et sommes à votre entière disposition. N'hésitez pas à nous contacter si besoin à `eliteFleet@eliteFleet.eliteFleet.fleet`";
  const mailOptions = {
    from: "notification@eliteFleet.com",
    to: email,
    subject: "Bienvenue chez EliteFleet©",
    html: `<p> Cher ${lastName}${firstName}, </p> \n\n<p>${message} </p>`,
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => {
      console.warn();
      next();
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};
module.exports = {
  sendMail,
};
