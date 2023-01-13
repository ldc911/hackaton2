CREATE TABLE
    `owner` (
        `id` int NOT NULL AUTO_INCREMENT,
        `entreprise` varchar(45) NOT NULL,
        `email` varchar(255) NOT NULL,
        `ville` varchar(100) NOT NULL,
        `estValide` TINYINT,
        `hashedPassword` varchar(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `Mail`(`email`)
    );

CREATE TABLE
    `reservation` (
        `id` int NOT NULL AUTO_INCREMENT,
        `id_vehicule` int NOT NULL,
        `id_utlisateur` int NOT NULL,
        `locationDebut` DATE NOT NULL,
        `locationFin` DATE NOT NULL,
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `user` (
        `id` int NOT NULL AUTO_INCREMENT,
        `NumeroPermis` VARCHAR(45) NOT NULL,
        `nom` varchar(45) NOT NULL,
        `prenom` varchar(45) NOT NULL,
        `dateNaissance` date NOT NULL,
        `ville` varchar(100) NOT NULL,
        `email` varchar(255) NOT NULL,
        `estAdmin` TINYINT(1),
        `avatar` text,
        `hashedPassword` varchar(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `Mail`(`email`)
    );

CREATE TABLE
    `vehicule` (
        `id` int NOT NULL AUTO_INCREMENT,
        `marque` varchar(45) NOT NULL,
        `modele` varchar(45) NOT NULL,
        `type` varchar(45) NOT NULL,
        `annee` int NOT NULL,
        `couleur` varchar(45) NOT NULL,
        `places` int NOT NULL,
        `kilometrage` INT NOT NULL,
        `ville` varchar(100) NOT NULL,
        `prix` int NOT NULL,
        `id_loueur` int NOT NULL,
        `estDisponible` TINYINT(1) NOT NULL,
        `entretienDateDebut` DATE,
        `entretienDateFin` DATE,
        `estValide` tinyint(1) NOT NULL,
        `compagnieAssurance` varchar(45) NOT NULL,
        `numeroAssurance` varchar(45) NOT NULL,
        `image` JSON,
        PRIMARY KEY (`id`)
    );

ALTER TABLE `reservation`
ADD
    CONSTRAINT `idVehicule` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE;

ALTER TABLE `reservation`
ADD
    CONSTRAINT `idUser` FOREIGN KEY (`id_utlisateur`) REFERENCES `user` (`id`) ON DELETE CASCADE;

ALTER TABLE `vehicule`
ADD
    CONSTRAINT `idOwnerVehicule` FOREIGN KEY (`id_loueur`) REFERENCES `owner` (`id`) ON DELETE CASCADE;

/* Owner*/

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        1,
        'Chatanet',
        'chatanet-toulouse@chatanet.com',
        'Toulouse',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        2,
        'Cianni Automobiles',
        'cianni-toulouse@cianni.net',
        'Toulouse',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        3,
        'Garage Lebreton',
        'concessionLebreton@lebreton.fr',
        'Clermont-Ferrand',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `owner` (
        `id`,
        `entreprise`,
        `email`,
        `ville`,
        `estValide`,
        `hashedPassword`
    )
VALUES (
        4,
        'JME Auto',
        'jmeparis@jme.net',
        'Paris',
        1,
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

/* User*/

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        1,
        '12564345678',
        'Admin',
        'Admin',
        '2000-01-01',
        'Toulouse',
        'root@root.com',
        1,
        'https://lh3.google.com/u/0/d/1mRV7A_O5DJa35t3HjdLwi3kZNu9M0G7R=w1920-h997-iv1',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        2,
        '12345678',
        'Bonno',
        'Ben',
        '2009-11-12',
        'Toulouse',
        'ben@mail.com',
        0,
        '	https://storage.googleapis.com/quest_editor_uploads/1jg9aSLS1kWbidkYjb46E0qFI1MjyooE.png',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        3,
        '123456348',
        'IlEstLeon',
        'Leon',
        '2006-12-12',
        'Clermont-Ferrand',
        'leonidas@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/WNxhr6uqNnvtAOqJXRPLaQQnGagkJA7y.jpeg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        4,
        '1234098098',
        'Cha',
        'Charline',
        '2009-12-12',
        'Paris',
        'chathechat@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/ENtTM2KEj7bxKH6qvWCqSOSqL2ENJsPg.jpeg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        5,
        '128907678',
        'Faz',
        'Lukas',
        '2008-12-12',
        'Paris',
        'thefaz@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/gOPHvMtJE6oqJWROOlEWGDUOylLEayPt.png',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        6,
        '127635678',
        'Dclos',
        'Laurent',
        '2000-12-12',
        'Toulouse',
        'ldc@wcs.com',
        0,
        '	https://storage.googleapis.com/quest_editor_uploads/wDfIgA0PUKfjarbNKPCGJoy8zxflOz9v.jpg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        7,
        '1238098678',
        'Gigi',
        'Ghislain',
        '2007-09-12',
        'Clermont-Ferrand',
        'gigi@wcs.com',
        0,
        'https://storage.googleapis.com/quest_editor_uploads/tsbPqJCPtAYDqnB1sedOyv5hpAxmTHgT.jpg',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        8,
        '12309878',
        'Grillrs',
        'Jo',
        '2007-12-23',
        'Paris',
        'jogrls@wcs.com',
        0,
        'https://www.gravatar.com/avatar/53134?d=monsterid&s=300',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        9,
        '198745678',
        'Malig brds',
        'Anaïs',
        '2009-09-12',
        'Toulouse',
        'ben@wcs.com',
        0,
        'https://www.gravatar.com/avatar/56329?d=identicon&s=300',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        10,
        '12367878',
        'Bidn',
        'Joe',
        '2004-07-12',
        'Paris',
        'potus@wcs.com',
        0,
        'https://i1.wp.com/dedipic.com/wp-content/uploads/2019/11/avatar_JoeBiden.png?resize=720%2C720&ssl=1',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

INSERT INTO
    `user` (
        `id`,
        `NumeroPermis`,
        `nom`,
        `prenom`,
        `dateNaissance`,
        `ville`,
        `email`,
        `estAdmin`,
        `avatar`,
        `hashedPassword`
    )
VALUES (
        11,
        '98345678',
        'Mcron',
        'Manu',
        '2001-06-12',
        'Clermont-Ferrand',
        'themanu@wcs.com',
        0,
        'https://assets-decodeurs.lemonde.fr/assets-legacy/pol/avantlevote/macron.png',
        '$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU'
    );

/* Vehicule*/

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        1,
        'Aixam',
        'Coupé GTI',
        'Thermique',
        2020,
        'jaune',
        2,
        16294,
        'Clermont-Ferrand',
        24,
        2,
        1,
        NULL,
        NULL,
        1,
        'DASFKE32',
        'B3337T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600035/VoituresEliteFleet/e-aixam-coupe-gti-kl_l7rbaj.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600033/VoituresEliteFleet/slide_multia_detz_inte_gtigtotdbcarbonlook9pouces_4_f00hb4.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600039/VoituresEliteFleet/130995356_o_nyrafs.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        2,
        'Chatenet',
        'CH40',
        'Thermique',
        2020,
        'gris',
        2,
        16294,
        'Clermont-Ferrand',
        12,
        2,
        1,
        NULL,
        NULL,
        1,
        'DASFKE32',
        'B3337T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600094/VoituresEliteFleet/ch46-gamme-site-grise01_vka8cv.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600109/VoituresEliteFleet/neuve-chatenet-ch40-9-1200x600_pmvfqj.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600113/VoituresEliteFleet/COFFRE_s6ixit.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        3,
        'Ligier',
        'Microcar M.CROSS',
        'Thermique',
        2019,
        'bleu',
        2,
        22223,
        'Toulouse',
        5,
        2,
        1,
        NULL,
        NULL,
        1,
        'DASFKE32',
        'B3337T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600173/VoituresEliteFleet/2282_wjfsnv.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600175/VoituresEliteFleet/2281_ejpkip.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600178/VoituresEliteFleet/2280_nrc5b1.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        4,
        'Ligier',
        'JS50 Sport',
        'Thermique',
        2021,
        'gris',
        2,
        10255,
        'Toulouse',
        5,
        2,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B627T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600253/VoituresEliteFleet/30fe93420930d639974601c5ec827fdb090dbc5b_bf2xm1.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600248/VoituresEliteFleet/JS50-Young-Gris-Graphite-1_bgwf2x.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        5,
        'Ligier',
        'JS50 Sport',
        'Thermique',
        2021,
        'rouge',
        2,
        1055,
        'Toulouse',
        5,
        2,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B627T3',
        '{\"image1\": \"https://www.ligier.fr/wp-content/uploads/2020/11/Ligier-JS50-Sport-Young-rouge-566x400.png\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600347/VoituresEliteFleet/JS50_Sport_Young_3-4_AR_wxfnp4.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        6,
        'Aixam',
        'Minauto',
        'Thermique',
        2022,
        'blanc',
        2,
        4568,
        'Paris',
        5,
        4,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B62234T3',
        '{\"image1\": \"https://www.aixam.com/ressources/medias/slide_minauto-access-front-8k.jpg?v2\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600436/VoituresEliteFleet/te%CC%81le%CC%81chargement_dh03dc.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600439/VoituresEliteFleet/te%CC%81le%CC%81chargement_1_u5fw0u.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        7,
        'Chatenet',
        'CH46',
        'Thermique',
        2022,
        'rouge',
        2,
        6874,
        'Toulouse',
        8,
        1,
        1,
        NULL,
        NULL,
        1,
        'Matmut',
        'FKJHR789',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673599942/VoituresEliteFleet/38-5cdaff0a91137_gqitu6.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673599945/VoituresEliteFleet/comment-assurer-une-voiture-sans-permis_cyw9a5.webp\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673599953/VoituresEliteFleet/Mon_projet_cyo1ax.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        8,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'vert',
        2,
        6854,
        'Paris',
        50,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600636/VoituresEliteFleet/un-renault-twizy-vendre_t2nxfa.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600723/VoituresEliteFleet/maxresdefault_2_tedsko.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        11,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'noir',
        2,
        685,
        'Paris',
        7,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{\"image1\": \"https://images.caradisiac.com/logos-ref/modele/modele--renault-twizy-45/S7-modele--renault-twizy-45.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600821/VoituresEliteFleet/m1gy062bcxx6_800_jdkkd4.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600903/VoituresEliteFleet/renault-twizy-21-1617404404_auzfj9.webp\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        12,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'bleu',
        2,
        8754,
        'Paris',
        7,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600977/VoituresEliteFleet/aed36b5f4d_uno6dk.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673600976/VoituresEliteFleet/twizy-bleu-caraibes_zc9zln.webp\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        13,
        'Renault',
        'Twizy',
        'Electrique',
        2022,
        'rouge',
        2,
        8254,
        'Paris',
        7,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B623E227T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601142/VoituresEliteFleet/f11_r81fns.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601108/VoituresEliteFleet/renault-twizy-1137x500-1_faxsuj.jpg\", \"image3\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601082/VoituresEliteFleet/depositphotos_545814914-stock-photo-tula-russia-january-30-2022_okcq6d.webp\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        14,
        'Citroën',
        'AMI',
        'Electrique',
        2021,
        'gris',
        2,
        564,
        'Clermont-Ferrand',
        4,
        3,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B627T9873',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601222/VoituresEliteFleet/citroen-ami-2020_wuw0na.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601251/VoituresEliteFleet/P008_ami_cargo_siwzlc.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        15,
        'Citroën',
        'AMI',
        'Electrique',
        2021,
        'rouge',
        2,
        5646,
        'Clermont-Ferrand',
        5,
        3,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B627T98ZE73',
        '{\"image1\": \"https://i.servimg.com/u/f86/18/30/80/88/citroe10.png\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        16,
        'Ligier',
        'MICROCAR',
        'Thermique',
        2019,
        'bleu',
        2,
        86,
        'Paris',
        4,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B627TZE3',
        '{\"image1\": \"https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        17,
        'Jiayuan',
        'ville Fun 45',
        'Electrique',
        2022,
        'jaune',
        2,
        6874,
        'Toulouse',
        7,
        2,
        1,
        NULL,
        NULL,
        1,
        'Libéa',
        'B6ZR27T3',
        '{\"image1\": \"https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1ville%20jaune%20chateau.jpeg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        18,
        'Bellier',
        'B8',
        'Thermique',
        2021,
        'vert',
        2,
        687,
        'Toulouse',
        15,
        1,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B62E7T3',
        '{\"image1\": \"https://www.gsanspermis.com/wp-content/uploads/2020/01/TABLETTE-GSP40.pdf-Adobe-Acrobat-Pro-1.jpg.webp\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        19,
        'Casalini',
        'M20 Supperleggera',
        'Thermique',
        2021,
        'blanc',
        2,
        6857,
        'Toulouse',
        12,
        3,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B62723T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601852/VoituresEliteFleet/casalini-1-1200x800_bubdcj.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601853/VoituresEliteFleet/casalini-2-600x400_r0i6of.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        20,
        'Hummer',
        'Mini HX',
        'Electrique',
        2022,
        'rouge',
        2,
        687,
        'Paris',
        5,
        4,
        1,
        NULL,
        NULL,
        1,
        'MACSF',
        'B62723T3',
        '{\"image1\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601727/VoituresEliteFleet/2021032818193269509_pj9i5c.jpg\", \"image2\": \"https://res.cloudinary.com/dhudn6li6/image/upload/v1673601712/VoituresEliteFleet/2021032818192851564_otk3wi.jpg\"}'
    );

INSERT INTO
    `vehicule` (
        `id`,
        `marque`,
        `modele`,
        `type`,
        `annee`,
        `couleur`,
        `places`,
        `kilometrage`,
        `ville`,
        `prix`,
        `id_loueur`,
        `estDisponible`,
        `entretienDateDebut`,
        `entretienDateFin`,
        `estValide`,
        `compagnieAssurance`,
        `numeroAssurance`,
        `image`
    )
VALUES (
        21,
        'Estrima',
        'Biro',
        'Electrique',
        2022,
        'noir',
        2,
        7410,
        'Toulouse',
        5,
        1,
        1,
        NULL,
        NULL,
        1,
        'MAIF',
        'B627T23E3',
        '{\"image1\": \"https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg\"}'
    );

/* Reservation*/

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        1,
        1,
        8,
        '2023-01-25',
        '2023-01-25'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        2,
        2,
        3,
        '2023-02-01',
        '2023-02-04'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        3,
        2,
        4,
        '2023-02-09',
        '2023-02-10'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        4,
        4,
        3,
        '2023-02-09',
        '2023-02-10'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        5,
        1,
        2,
        '2023-01-30',
        '2023-02-03'
    );

INSERT INTO
    `reservation` (
        `id`,
        `id_vehicule`,
        `id_utlisateur`,
        `locationDebut`,
        `locationFin`
    )
VALUES (
        6,
        7,
        2,
        '2023-02-09',
        '2023-02-10'
    );