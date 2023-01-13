/* eslint-disable no-unused-vars */
const md5 = require("md5");

const modeles = require("../models");

const getReservations = (req, res, next) => {
  modeles.reservation
    .findReservation()
    .then(([result]) => {
      req.body.resa = result;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getVehicleById = (req, res, next) => {
  modeles.vehicule
    .findById(req.params.id)
    .then(([result]) => {
      if (
        req.body.id_loggedIn === result.id_loueur ||
        req.body.loggedIn === 1
      ) {
        next();
      } else {
        const message = "Cette voiture ne fait pas partie de votre flotte";
        res.status(401).json(message);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUrlImageByEmail = (req, res, next) => {
  const { email } = req.body;
  const option = [
    "mp", // cartoon-style
    "identicon", // geometric pattern based
    "wavatar", // generated faces
    "monsterid", // generated 'monster'
    "retro", // awesome generated, 8-bit
    "robohash", // a generated robot
  ];

  const size = 200; // Size of images
  const hash = md5(email.trim().toLowerCase());

  req.body.profilePicture = `https://www.gravatar.com/avatar/${hash}?d=${
    option[Math.floor(Math.random() * option.length + 1)]
  }&s=${size}`;
  next();
};

module.exports = { getReservations, getVehicleById, getUrlImageByEmail };
