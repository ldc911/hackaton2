array = [
  {
    0: {
      id_vehicule: 1,
      user_renter: "Jo Grillrs",
      rentStart: "2023-01-24T23:00:00.000Z",
      rentEnd: "2023-01-24T23:00:00.000Z",
    },
    1: {
      id_vehicule: 1,
      user_renter: "Ben Bonno",
      rentStart: "2023-01-29T23:00:00.000Z",
      rentEnd: "2023-02-02T23:00:00.000Z",
    },
    city: "Toulouse",
    color: "gris",
    id: 1,
    id_owner: 2,
    insuranceCompany: "MACSF",
    insuranceNumber: "B627T3",
    isAvailable: 1,
    isValidate: 1,
    maintenanceEndDate: null,
    maintenanceStartDate: null,
    manufacturer: "Ligier",
    mileage: 10255,
    model: "JS50 Sport",
    picture:
      "https://www.ligier.fr/wp-content/uploads/2021/03/Ligier-JS50-SPort-Ultimate-GA-min-566x400.png",
    price: 5,
    seats: 2,
    type: "Thermique",
    year: 2021,
  },
];

let object = Object.keys(array[0]).map((key) =>
  typeof array[0][key] === "object" && array[0][key] !== null
    ? array[0][key]
    : null
);
object = object.filter((item) => item !== null);

rent = object.map((obj) => {
  return { rentStart: obj.rentStart, rentEnd: obj.rentEnd };
});

rent;
rent.map(
  (item) =>
    (item.rentStart = new Date(item.rentStart)) &&
    (item.rentEnd = new Date(item.rentEnd))
);

rent;
