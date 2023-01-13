const models = require("../models");

const createReservation = (req, res) => {
  const reservation = req.body;
  reservation.id_vehicule = parseInt(req.params.id, 10);
  if (reservation.isOwner === 1) {
    const message =
      "Vous ne pouvez pas réserver de voiture avec un profil de loueur.";
    res.status(401).json(message);
  } else {
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
  }
};

module.exports = {
  createReservation,
};
