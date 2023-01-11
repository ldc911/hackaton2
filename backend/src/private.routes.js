const express = require("express");

const router = express.Router();
const vehicleControllers = require("./controllers/vehicleControllers");

router.get("/vehicles", vehicleControllers.getAllVehicles);
module.exports = router;
