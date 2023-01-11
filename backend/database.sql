CREATE TABLE `owner`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `reservation`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_vehicule` int NOT NULL,
  `id_user` int NOT NULL,
  `rentStart` date NOT NULL,
  `rentEnd` date NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `drivingLicenseNumber` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `birthday` date NOT NULL,
  `city` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `vehicule`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturer` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `year` int NOT NULL,
  `color` varchar(45) NOT NULL,
  `seats` int NOT NULL,
  `city` varchar(100) NOT NULL,
  `price` int NOT NULL,
  `id_owner` int NOT NULL,
  `isAvailable` tinyint(1) NOT NULL,
  `isValidate` tinyint(1) NOT NULL,
  `insuranceCompany` varchar(45) NOT NULL,
  `insuranceNumber` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `reservation` ADD CONSTRAINT `idVehicule` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE;
ALTER TABLE `reservation` ADD CONSTRAINT `idUser` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE;
ALTER TABLE `vehicule` ADD CONSTRAINT `idOwnerVehicule` FOREIGN KEY (`id_owner`) REFERENCES `owner` (`id`) ON DELETE CASCADE;

