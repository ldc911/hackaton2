const models = require("../models");

const createReservation = (req, res) => {
  const reservation = req.body;
  reservation.id_vehicule = parseInt(req.params.id, 10);
  models.reservation
    .addReservation(reservation)
    .then(([result]) => {
      const message = "Réservation effectuée avec succès.";
      res.location(`/reservations/${result.insertId}`).json(message);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  createReservation,
};
