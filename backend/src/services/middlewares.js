const models = require("../models");

const getReservations = (req, res, next) => {
  models.reservation
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
  models.vehicule
    .findById(req.params.id)
    .then(([result]) => {
      if (req.body.id_owner === result.id_owner || req.body.id_owner === 1) {
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

module.exports = { getReservations, getVehicleById };
