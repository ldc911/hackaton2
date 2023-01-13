array = [
  {
    0: {
      id_vehicule: 1,
      user_renter: "Jo Grillrs",
      locationDebut: "2023-01-24T23:00:00.000Z",
      locationFin: "2023-01-24T23:00:00.000Z",
    },
    1: {
      id_vehicule: 1,
      user_renter: "Ben Bonno",
      locationDebut: "2023-01-29T23:00:00.000Z",
      locationFin: "2023-02-02T23:00:00.000Z",
    },
    ville: "Toulouse",
    couleur: "gris",
    id: 1,
    id_loueur: 2,
    compagnieAssurance: "MACSF",
    numeroAssurance: "B627T3",
    estDisponible: 1,
    estValide: 1,
    entretienDateFin: null,
    entretienDateDebut: null,
    marque: "Ligier",
    kilometrage: 10255,
    modele: "JS50 Sport",
    image:
      "https://www.ligier.fr/wp-content/uploads/2021/03/Ligier-JS50-SPort-Ultimate-GA-min-566x400.png",
    prix: 5,
    places: 2,
    type: "Thermique",
    annee: 2021,
  },
];

let object = Object.keys(array[0]).map((key) =>
  typeof array[0][key] === "object" && array[0][key] !== null
    ? array[0][key]
    : null
);
object = object.filter((item) => item !== null);

rent = object.map((obj) => {
  return { locationDebut: obj.locationDebut, locationFin: obj.locationFin };
});

rent.map(
  (item) =>
    (item.locationDebut = new Date(item.locationDebut)) &&
    (item.locationFin = new Date(item.locationFin))
);
