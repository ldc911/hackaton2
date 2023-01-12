import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CardDetail() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchCars = () => {
    axios
      .get(`${VITE_BACKEND_URL}/private/cardetails/${id}`)
      .then((res) => {
        const newCars = res.data.map((key) => {
          return {
            id: key.id,
            manufacturer: key.manufacturer,
            model: key.model,
            type: key.type,
            year: key.year,
            color: key.color,
            city: key.city,
            picture: key.picture,
            price: key.price,
          };
        });
        setData(newCars);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="width">
      <nav aria-label="Breadcrumb">
        <button type="button" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
      </nav>

      {data.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
        </div>
      )}
      {data.length !== 0 && (
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={data[0].picture}
                alt={data[0].model}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={data[0].picture}
                  alt={data[0].model}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={data[0].picture}
                  alt={data[0].model}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={data[0].picture}
                alt={data[0].model}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-6 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-10 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl text-center font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {data[0].manufacturer}
                <p className="text-lg font-normal">{data[0].model}</p>
              </h1>
            </div>
            <div className="mt-10">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    Déplacez-vous autrement ! Twizy E-Tech 100% électrique est
                    le véhicule idéal pour tous vos trajets urbains à 2. Twizy
                    E-Tech 100% electric peut se conduire avec et sans permis.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>

                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">{data[0].type}</span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">{data[0].year}</span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">{data[0].color}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Calendrier */}
            <div className="mt-4 lg:mt-0 lg:row-span-2">
              <div className="flex flex-col justify-center items-center mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {data[0].price}€{" "}
                </p>
                <p className="text-sm text-gray-500">/day</p>
                <p className="text-xl text-center text-gray-900 flex flex-col items-center">
                  Booking
                </p>
                <DateRange
                  onChange={(item) => setRange([item.selection])}
                  editableDateInputs
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={1}
                  direction="horizontal"
                  showDateDisplay={false}
                  showMonthAndYearPickers={false}
                  showSelectionPreview
                  minDate={new Date()}
                  rangeColors={["rgb(79 70 229)"]}
                />
                <button
                  type="submit"
                  className="mt-10 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reserver
                </button>
              </div>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
