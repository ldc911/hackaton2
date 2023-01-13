import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// eslint-disable-next-line import/no-unresolved
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data2 = {
  labels: ["Voiture en maintenance", "Voiture à louer", "Voiture réserver"],
  datasets: [
    {
      label: "nombre de voiture",
      data: [1, 4, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const people = [
  {
    id: 0,
    name: "Hummer Mini HX",
    title: "rouge 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "",
    imageUrl:
      "http://myelectricvehicle.be/wp-content/gallery/mev-hummer-hx-t/MEV-HUMMER-HX-T-Flat-Red-Canopy-Roof-Side-View.png",
  },
  {
    name: "Renault Twizy",
    title: "vert 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "",
    imageUrl:
      "https://cdn.motor1.com/images/mgl/GxO7J/s1/1x1/renault-twizy-by-oakley-design.webp",
  },
  {
    name: "Jiayuan ville Fun 45",
    title: "jaune 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "",
    imageUrl:
      "https://media.gqmagazine.fr/photos/5fa94b2fa6095c6ef665d607/master/w_1600,c_limit/1ville%20jaune%20chateau.jpeg",
  },
  {
    name: "Citroën AMI",
    title: "rouge 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "",
    imageUrl: "https://i.servimg.com/u/f86/18/30/80/88/citroe10.png",
  },
  {
    name: "Ligier MICROCAR",
    title: "Bleu 2020",
    role: "Thermique",
    email: "janecooper@example.com",
    telephone: "",
    imageUrl:
      "https://www.ligier.fr/wp-content/uploads/2022/11/M.GO-Must-min.png",
  },
  {
    name: "Casalini M20 Supperleggera",
    title: "Blanc 2021",
    role: "Thermique",
    email: "janecooper@example.com",
    telephone: "",
    imageUrl:
      "https://www.my-vsp.fr/wp-content/uploads/2021/09/casalini-1-1200x800.jpg",
  },
  {
    name: "Estrima Biro",
    title: "noir 2020",
    role: "Thermique",
    email: "janecooper@example.com",
    telephone: "",
    imageUrl:
      "https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg",
  },

  // More people...
];

export default function OwnerCar() {
  const initialCars = JSON.parse(localStorage.getItem("deletedCars")) || people;
  const [cars, setCars] = useState(initialCars);

  const handleDelete = (index) => {
    const newCars = [...cars];
    newCars.splice(index, 1);
    setCars(newCars);
    localStorage.setItem("deletedCars", JSON.stringify(newCars));
  };

  return (
    <div>
      <h2 className="text-3xl mb-4 font-extrabold text-dark tracking-tight sm:text-4xl">
        Mes voitures
      </h2>
      <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-3">
        {cars.map((person, index) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 flex-shrink-0 mx-auto rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {person.name}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="-ml-px w-0 flex-1 flex">
                  <button
                    type="button"
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    onClick={() => handleDelete(index)}
                  >
                    <span className="ml-3">Supprimer</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-3xl mt-10 mb-10 font-extrabold text-dark tracking-tight sm:text-4xl">
        Mes statistiques
      </h2>

      <Pie data={data2} />
    </div>
  );
}
