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

INSERT INTO
    owner (
        entreprise,
        email,
        ville,
        estValide,
        hashedPassword
    )
VALUES (
        "Chatanet",
        "chatanet-toulouse@chatanet.com",
        "Toulouse",
        1,
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "Cianni Automobiles",
        "cianni-toulouse@cianni.net",
        "Toulouse",
        1,
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "Garage Lebreton",
        "concessionLebreton@lebreton.fr",
        "Clermont-Ferrand",
        1,
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "JME Auto",
        "jmeparis@jme.net",
        "Paris",
        1,
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
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

INSERT INTO
    reservation (
        id_vehicule,
        id_utlisateur,
        locationDebut,
        locationFin
    )
VALUES (
        1,
        8,
        "2023-01-25",
        "2023-01-25"
    ), (
        2,
        3,
        "2023-02-01",
        "2023-02-04"
    ), (
        2,
        4,
        "2023-02-09",
        "2023-02-10"
    ), (
        4,
        3,
        "2023-02-09",
        "2023-02-10"
    ), (
        1,
        2,
        "2023-01-30",
        "2023-02-03"
    ), (
        7,
        2,
        "2023-02-09",
        "2023-02-10"
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

INSERT INTO
    user (
        NumeroPermis,
        nom,
        prenom,
        dateNaissance,
        ville,
        email,
        estAdmin,
        avatar,
        hashedPassword
    )
VALUES (
        "12564345678",
        "Admin",
        "Admin",
        "2000-01-01",
        "Toulouse",
        "root@root.com",
        1,
        "https://lh3.google.com/u/0/d/1mRV7A_O5DJa35t3HjdLwi3kZNu9M0G7R=w1920-h997-iv1",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "12345678",
        "Bonno",
        "Ben",
        "2009-11-12",
        "Toulouse",
        "ben@mail.com",
        0,
        "	https://storage.googleapis.com/quest_editor_uploads/1jg9aSLS1kWbidkYjb46E0qFI1MjyooE.png",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "123456348",
        "IlEstLeon",
        "Leon",
        "2006-12-12",
        "Clermont-Ferrand",
        "leonidas@wcs.com",
        0,
        "https://storage.googleapis.com/quest_editor_uploads/WNxhr6uqNnvtAOqJXRPLaQQnGagkJA7y.jpeg",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "1234098098",
        "Cha",
        "Charline",
        "2009-12-12",
        "Paris",
        "chathechat@wcs.com",
        0,
        "https://storage.googleapis.com/quest_editor_uploads/ENtTM2KEj7bxKH6qvWCqSOSqL2ENJsPg.jpeg",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "128907678",
        "Faz",
        "Lukas",
        "2008-12-12",
        "Paris",
        "thefaz@wcs.com",
        0,
        "https://storage.googleapis.com/quest_editor_uploads/gOPHvMtJE6oqJWROOlEWGDUOylLEayPt.png",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "127635678",
        "Dclos",
        "Laurent",
        "2000-12-12",
        "Toulouse",
        "ldc@wcs.com",
        0,
        "	https://storage.googleapis.com/quest_editor_uploads/wDfIgA0PUKfjarbNKPCGJoy8zxflOz9v.jpg",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "1238098678",
        "Gigi",
        "Ghislain",
        "2007-09-12",
        "Clermont-Ferrand",
        "gigi@wcs.com",
        0,
        "https://storage.googleapis.com/quest_editor_uploads/tsbPqJCPtAYDqnB1sedOyv5hpAxmTHgT.jpg",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "12309878",
        "Grillrs",
        "Jo",
        "2007-12-23",
        "Paris",
        "jogrls@wcs.com",
        0,
        "https://www.gravatar.com/avatar/53134?d=monsterid&s=300",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "198745678",
        "Malig brds",
        "Anaïs",
        "2009-09-12",
        "Toulouse",
        "ben@wcs.com",
        0,
        "https://www.gravatar.com/avatar/56329?d=identicon&s=300",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "12367878",
        "Bidn",
        "Joe",
        "2004-07-12",
        "Paris",
        "potus@wcs.com",
        0,
        "https://i1.wp.com/dedipic.com/wp-content/uploads/2019/11/avatar_JoeBiden.png?resize=720%2C720&ssl=1",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "98345678",
        "Mcron",
        "Manu",
        "2001-06-12",
        "Clermont-Ferrand",
        "themanu@wcs.com",
        0,
        "https://assets-decodeurs.lemonde.fr/assets-legacy/pol/avantlevote/macron.png",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
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

INSERT INTO
    vehicule (
        marque,
        modele,
        type,
        annee,
        couleur,
        places,
        kilometrage,
        ville,
        prix,
        id_loueur,
        estDisponible,
        estValide,
        compagnieAssurance,
        numeroAssurance,
        image
    )
VALUES (
        "Aixam",
        "Coupé GTI",
        "Thermique",
        "2020",
        "jaune",
        2,
        16294,
        "Clermont-Ferrand",
        24,
        2,
        1,
        1,
        "DASFKE32",
        "B3337T3",
        '{"id1": "https://media.lesechos.com/api/v1/images/view/5c336b6c8fe56f1f3c6d2135/1280x720/0202699408901-web.jpg"}'
    ), (
        "Chatenet",
        "CH40",
        "Thermique",
        "2020",
        "gris",
        2,
        16294,
        "Clermont-Ferrand",
        12,
        2,
        1,
        1,
        "DASFKE32",
        "B3337T3",
        '{"id1": "https://www.gsanspermis.com/wp-content/uploads/2020/01/CHATENET-CH40.jpg"}
'
    ), (
        "Ligier",
        "Microcar M.CROSS",
        "Thermique",
        "2019",
        "bleu",
        2,
        22223,
        "Toulouse",
        5,
        2,
        1,
        1,
        "DASFKE32",
        "B3337T3",
        '{"id1": "https://www.bscar-71.fr/app/uploads/M.CROSS_HX_34AV-BA.png"}
'
    ), (
        "Ligier",
        "JS50 Sport",
        "Thermique",
        "2021",
        "gris",
        2,
        10255,
        "Toulouse",
        5,
        2,
        1,
        1,
        "MACSF",
        "B627T3",
        '{"id1": "https://www.ligier.fr/wp-content/uploads/2021/03/Ligier-JS50-SPort-Ultimate-GA-min-566x400.png"}
'
    ), (
        "Ligier",
        "JS50 Sport",
        "Thermique",
        "2021",
        "rouge",
        2,
        1055,
        "Toulouse",
        5,
        2,
        1,
        1,
        "MACSF",
        "B627T3",
        '{"id1": "https://www.ligier.fr/wp-content/uploads/2020/11/Ligier-JS50-Sport-Young-rouge-566x400.png"}
'
    ), (
        "Aixam",
        "Minauto",
        "Thermique",
        "2022",
        "blanc",
        2,
        4568,
        "Paris",
        5,
        4,
        1,
        1,
        "MAIF",
        "B62234T3",
        '{"id1": "https://www.aixam.com/ressources/medias/slide_minauto-access-front-8k.jpg?v2"}
'
    ), (
        "Chatenet",
        "CH46",
        "Thermique",
        "2022",
        "rouge",
        2,
        6874,
        "Toulouse",
        8,
        1,
        1,
        1,
        "Matmut",
        "FKJHR789",
        '{"id1": "https://www.ouestfrance-auto.com/p/annonces/16294189_1_162941895edba5a89af33405275628_w_ouestfranceauto_.jpg"}
'
    ), (
        "Renault",
        "Twizy",
        "Electrique",
        "2022",
        "vert",
        2,
        6854,
        "Paris",
        50,
        4,
        1,
        1,
        "MACSF",
        "B623E227T3",
        '{"id1": "https://cdn.motor1.com/images/mgl/GxO7J/s1/1x1/renault-twizy-by-oakley-design.webp"}
'
    ), (
        "Renault",
        "Twizy",
        "Electrique",
        "2022",
        "noir",
        2,
        685,
        "Paris",
        7,
        4,
        1,
        1,
        "MACSF",
        "B623E227T3",
        '{"id1": "https://images.caradisiac.com/logos-ref/modelee/modelee--renault-twizy-45/S7-modelee--renault-twizy-45.jpg"}
'
    ), (
        "Renault",
        "Twizy",
        "Electrique",
        "2022",
        "bleu",
        2,
        8754,
        "Paris",
        7,
        4,
        1,
        1,
        "MACSF",
        "B623E227T3",
        '{"id1": "https://cdn-s-www.leprogres.fr/images/5FD81F6A-DF4E-4DEB-9B35-CF1EFB08804F/NW_listE/plus-proche-d-un-kart-que-d-une-voiture-la-twizy-est-equipee-de-roues-plus-larges-a-l-arriere-qu-a-l-avant-la-twizy-offre-differentes-couleurs-du-noir-et-du-blanc-et-en-option-les-arches-laterales-peuvent-se-parer-de-bleu-ou-de-rouge-photo-renault-1605113229.jpg"}
'
    ), (
        "Renault",
        "Twizy",
        "Electrique",
        "2022",
        "rouge",
        2,
        8254,
        "Paris",
        7,
        4,
        1,
        1,
        "MACSF",
        "B623E227T3",
        '{"id1": "https://www.cdiscount.com/pdt2/5/9/4/1/700x700/auc0884505480594/rw/voiture-electrique-gz05d-renault-twizy-1-18-sclae.jpg"}
'
    ), (
        "Citroën",
        "AMI",
        "Electrique",
        "2021",
        "gris",
        2,
        564,
        "Clermont-Ferrand",
        4,
        3,
        1,
        1,
        "MAIF",
        "B627T9873",
        '{"id1": "https://static.latribune.fr/full_width/1517716/citroen-ami.jpg"}
'
    ), (
        "Citroën",
        "AMI",
        "Electrique",
        "2021",
        "rouge",
        2,
        5646,
        "Clermont-Ferrand",
        5,
        3,
        1,
        1,
        "MAIF",
        "B627T98ZE73",
        '{"id1": "https://i.servimg.com/u/f86/18/30/80/88/citroe10.png"}
'
    ), (
        "Ligier",
        "MICROCAR",
        "Thermique",
        "2019",
        "bleu",
        2,
        86,
        "Paris",
        4,
        4,
        1,
        1,
        "MACSF",
        "B627TZE3",
        '{"id1": "https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png"}
'
    ), (
        "Jiayuan",
        "ville Fun 45",
        "Electrique",
        "2022",
        "jaune",
        2,
        6874,
        "Toulouse",
        7,
        2,
        1,
        1,
        "Libéa",
        "B6ZR27T3",
        '{"id1": "https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1ville%20jaune%20chateau.jpeg"}
'
    ), (
        "Bellier",
        "B8",
        "Thermique",
        "2021",
        "vert",
        2,
        687,
        "Toulouse",
        15,
        1,
        1,
        1,
        "MACSF",
        "B62E7T3",
        '{"id1": "https://www.gsanspermis.com/wp-content/uploads/2020/01/TABLETTE-GSP40.pdf-Adobe-Acrobat-Pro-1.jpg.webp"}
'
    ), (
        "Casalini",
        "M20 Supperleggera",
        "Thermique",
        "2021",
        "blanc",
        2,
        6857,
        "Toulouse",
        12,
        3,
        1,
        1,
        "MACSF",
        "B62723T3",
        '{"id1": "https://www.my-vsp.fr/wp-content/uploads/2021/09/casalini-1-1200x800.jpg"}
'
    ), (
        "Hummer",
        "Mini HX",
        "Electrique",
        "2022",
        "rouge",
        2,
        687,
        "Paris",
        5,
        4,
        1,
        1,
        "MACSF",
        "B62723T3",
        '{"id1": "http://myelectricvehicle.be/wp-content/gallery/mev-hummer-hx-t/MEV-HUMMER-HX-T-Flat-Red-Canopy-Roof-Side-View.png"}
'
    ), (
        "Estrima",
        "Biro",
        "Electrique",
        "2022",
        "noir",
        2,
        7410,
        "Toulouse",
        5,
        1,
        1,
        1,
        "MAIF",
        "B627T23E3",
        '{"id1": "https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg"}
'
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