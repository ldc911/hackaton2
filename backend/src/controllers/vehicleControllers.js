const models = require("../models");

const addVehicle = (req, res) => {
  const user = req.body;
  models.user
    .addUser(user)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllVehicles = (req, res) => {
  models.vehicule
    .findVehicle()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  addVehicle,
  getAllVehicles,
};
