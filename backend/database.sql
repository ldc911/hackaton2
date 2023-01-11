CREATE TABLE
    `owner` (
        `id` int NOT NULL AUTO_INCREMENT,
        `company` varchar(45) NOT NULL,
        `email` varchar(255) NOT NULL,
        `city` varchar(100) NOT NULL,
        `hashedPassword` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)

    );


INSERT INTO
    owner (
        company,
        email,
        city,
        hashedPassword
    )
VALUES (
        "Chatanet",
        "chatanet-toulouse@chatanet.com",
        "Toulouse",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "Cianni Automobiles",
        "cianni-toulouse@cianni.net",
        "Toulouse",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "Garage Lereton",
        "concessionLebreton@lebreton.fr",
        "Clermont-Ferrand",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "JME Auto",
        "jmeparis@jme.net",
        "Paris",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    );

CREATE TABLE
    `reservation` (
        `id` int NOT NULL AUTO_INCREMENT,
        `id_vehicule` int NOT NULL,
        `id_user` int NOT NULL,
        `rentStart` DATE NOT NULL,
        `rentEnd` DATE NOT NULL,
        PRIMARY KEY (`id`)
    );

INSERT INTO
    reservation (
        id_vehicule,
        id_user,
        rentStart,
        rentEnd
    )
VALUES (
        1,
        1,
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
        `drivingLicenseNumber` VARCHAR(45) NOT NULL,
        `lastName` varchar(45) NOT NULL,
        `firstName` varchar(45) NOT NULL,
        `birthday` date NOT NULL,
        `city` varchar(100) NOT NULL,
        `email` varchar(255) NOT NULL,
        `hashedPassword` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)

    );

INSERT INTO
    user (
        drivingLicenseNumber,
        lastName,
        firstName,
        birthday,
        city,
        email,
        hashedPassword
    )
VALUES (
        "12345678",
        "Bonno",
        "Ben",
        "2009-11-12",
        "Toulouse",
        "ben@mail.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "123456348",
        "IlEstLeon",
        "Leon",
        "2006-12-12",
        "Clermont-Ferrand",
        "leonidas@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "1234098098",
        "Cha",
        "Charline",
        "2009-12-12",
        "Paris",
        "chathechat@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "128907678",
        "Faz",
        "Lukas",
        "2008-12-12",
        "Paris",
        "thefaz@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "127635678",
        "Dclos",
        "Laurent",
        "2000-12-12",
        "Toulouse",
        "ldc@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "1238098678",
        "Gigi",
        "Ghislain",
        "2007-09-12",
        "Clermont-Ferrand",
        "gigi@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "12309878",
        "Grillrs",
        "Jo",
        "2007-12-23",
        "Paris",
        "jogrls@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "198745678",
        "Malig brds",
        "Anaïs",
        "2009-09-12",
        "Toulouse",
        "ben@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "12367878",
        "Bidn",
        "Joe",
        "2004-07-12",
        "Paris",
        "potus@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    ), (
        "98345678",
        "Mcron",
        "Manu",
        "2001-06-12",
        "Clermont-Ferrand",
        "themanu@wcs.com",
        "$argon2id$v=19$m=65536,t=5,p=1$WuTKNY/mxe6xbUhTQQFATg$ti0tC7bnOrC54Tg69J+cHOpgYmrfMwq/iTBZJ+4WcDU"
    );

CREATE TABLE
    `vehicule` (
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
        `picture` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`)
    );

INSERT INTO
    vehicule (
        manufacturer,
        model,
        type,
        year,
        color,
        seats,
        city,
        price,
        id_owner,
        isAvailable,
        isValidate,
        insuranceCompany,
        insuranceNumber,
        picture
    )
VALUES (
        "Ligier",
        "JS50 Sport",
        "Thermique",
        "2021",
        "gris",
        2,
        "Toulouse",
        5,
        2,
        1,
        1,
        "MACSF",
        "B627T3",
        "https://www.ligier.fr/wp-content/uploads/2021/03/Ligier-JS50-SPort-Ultimate-GA-min-566x400.png"
    ), (
        "Aixam",
        "Minauto",
        "Thermique",
        "2022",
        "blanc",
        2,
        "Paris",
        5,
        4,
        1,
        1,
        "MAIF",
        "B62234T3",
        "https://www.aixam.com/ressources/medias/slide_minauto-access-front-8k.jpg?v2"
    ), (
        "Chatenet",
        "CH46",
        "Thermique",
        "2022",
        "rouge",
        2,
        "Toulouse",
        8,
        1,
        1,
        1,
        "Matmut",
        "FKJHR789",
        "https://www.ouestfrance-auto.com/p/annonces/16294189_1_162941895edba5a89af33405275628_w_ouestfranceauto_.jpg"
    ), (
        "Renault",
        "Twizy",
        "Electrique",
        "2022",
        "vert",
        1,
        "Paris",
        50,
        4,
        1,
        1,
        "MACSF",
        "B623E227T3",
        "https://cdn.motor1.com/images/mgl/GxO7J/s1/1x1/renault-twizy-by-oakley-design.webp"
    ), (
        "Citroën",
        "AMI",
        "Electrique",
        "2021",
        "gris",
        2,
        "Clermont-Ferrand",
        4,
        3,
        1,
        1,
        "MAIF",
        "B627T9873",
        "https://static.latribune.fr/full_width/1517716/citroen-ami.jpg"
    ), (
        "Ligier",
        "MICROCAR",
        "Thermique",
        "2019",
        "bleu",
        2,
        "Paris",
        4,
        4,
        1,
        1,
        "MACSF",
        "B627TZE3",
        "https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png"
    ), (
        "Jiayuan",
        "City Fun 45",
        "Electrique",
        "2022",
        "jaune",
        2,
        "Toulouse",
        7,
        2,
        1,
        1,
        "Libéa",
        "B6ZR27T3",
        "https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1city%20jaune%20chateau.jpeg"
    ), (
        "Bellier",
        "B8",
        "Thermique",
        "2021",
        "vert",
        2,
        "Toulouse",
        15,
        1,
        1,
        1,
        "MACSF",
        "B62E7T3",
        "https://www.gsanspermis.com/wp-content/uploads/2020/01/TABLETTE-GSP40.pdf-Adobe-Acrobat-Pro-1.jpg.webp"
    ), (
        "Casalini",
        "M20 Supperleggera",
        "Thermique",
        "2021",
        "blanc",
        2,
        "Toulouse",
        12,
        3,
        1,
        1,
        "MACSF",
        "B62723T3",
        "https://www.my-vsp.fr/wp-content/uploads/2021/09/casalini-1-1200x800.jpg"
    ), (
        "Hummer",
        "Mini HX",
        "Electrique",
        "2022",
        "rouge",
        2,
        "Paris",
        5,
        4,
        1,
        1,
        "MACSF",
        "B62723T3",
        "http://myelectricvehicle.be/wp-content/gallery/mev-hummer-hx-t/MEV-HUMMER-HX-T-Flat-Red-Canopy-Roof-Side-View.png"
    ), (
        "Estrima",
        "Biro",
        "Electrique",
        "2022",
        "noir",
        2,
        "Toulouse",
        5,
        1,
        1,
        1,
        "MAIF",
        "B627T23E3",
        "https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg"
    );

ALTER TABLE `reservation`
ADD
    CONSTRAINT `idVehicule` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE;

ALTER TABLE `reservation`
ADD
    CONSTRAINT `idUser` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE;

ALTER TABLE `vehicule`
ADD
    CONSTRAINT `idOwnerVehicule` FOREIGN KEY (`id_owner`) REFERENCES `owner` (`id`) ON DELETE CASCADE;