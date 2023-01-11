const models = require("../models");

const getAllVehicles = (req, res) => {
  models.vehicule
    .findVehicle()
    .then(([result]) => {
      const reservation = req.body.resa;
      const vehicles = result.map((element) => {
        const element2 = reservation.find((i) => i.id_vehicule === element.id);
        return { ...element, ...element2 };
      });
      res.status(200).json(vehicles);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllVehicles,
};
