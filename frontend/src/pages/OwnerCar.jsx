import React from "react";

const people = [
  {
    id: 0,
    name: "Hummer Mini HX",
    title: "rouge 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "http://myelectricvehicle.be/wp-content/gallery/mev-hummer-hx-t/MEV-HUMMER-HX-T-Flat-Red-Canopy-Roof-Side-View.png",
  },
  {
    id: 1,
    name: "Hummer Mini HX",
    title: "rouge 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://laboutiquegreenlines.com/wp-content/uploads/2021/11/1-1.jpg",
  },
  {
    id: 2,
    name: "Hummer Mini HX",
    title: "noir 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "http://myelectricvehicle.be/wp-content/gallery/mev-hummer-hx-t/MEV-HUMMER-HX-T-Flat-Red-Canopy-Roof-Side-View.png",
  },
  {
    id: 3,
    name: "Hummer Mini HX",
    title: "rouge 2022",
    role: "Electrique",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "http://myelectricvehicle.be/wp-content/gallery/mev-hummer-hx-t/MEV-HUMMER-HX-T-Flat-Red-Canopy-Roof-Side-View.png",
  },

  // More people...
];

export default function Example() {
  return (
    <div>
      <h2 className="text-3xl mb-4 font-extrabold text-dark tracking-tight sm:text-4xl">
        Mes voitures :
      </h2>
      <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-3">
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
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
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <span className="ml-3">E-mail</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <span className="ml-3">Supprimer</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
