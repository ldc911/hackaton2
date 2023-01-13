const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const vehicleControllers = require("./controllers/vehicleControllers");
const userControllers = require("./controllers/userControllers");
const reservationControllers = require("./controllers/reservationControllers");
const ownerControllers = require("./controllers/ownerControllers");

const middlewares = require("./services/middlewares");
const auth = require("../auth");

const upload = multer({ dest: "uploads/" });

// cars routes
// récupérer toutes les voitures
router.get(
  "/vehicles",
  middlewares.getReservations,
  vehicleControllers.getAllVehicles
);

// récupérer une seule voiture
router.get(
  "/cardetails/:id",
  middlewares.getReservations,
  vehicleControllers.getOneVehicle
);
// users routes
router.get("/users/", userControllers.getAllUsers);
router.put("/user/:id", userControllers.updateUser);
router.delete("/user/:id", userControllers.deleteUser);

// route pour l'upload de l'avatar
router.post("/avatar", upload.single("avatar"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;

  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("ok cool");
    }
  );
});

// owners routes
// récupérer les voitures d'un owner
router.get(
  "/owners/:id/vehicles",
  middlewares.getReservations,
  vehicleControllers.getVehicleByOwnerId
);

// Vérification si le owner qui veut supprimer la voiture possède la voiture
router.delete(
  "/vehicles/:id",
  auth.getloggedInIdFromToken,
  middlewares.getVehicleById,
  vehicleControllers.deleteVehicle
);

// récupérer liste des owners
router.get("/owners", ownerControllers.getOwners);

// ajout d'une voiture
router.post("/owners/:id/vehicles", vehicleControllers.createVehicle);

// reservations routes
router.post(
  "/cardetails/:id/reservations",
  auth.getloggedInIdFromToken,
  reservationControllers.createReservation
);

module.exports = router;
