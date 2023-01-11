const express = require("express");

const router = express.Router();
const vehicleControllers = require("./controllers/vehicleControllers");
const middlewares = require("./middlewares");

router.get(
  "/vehicles",
  middlewares.getReservations,
  vehicleControllers.getAllVehicles
);
module.exports = router;
