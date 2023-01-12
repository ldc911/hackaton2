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
      {data.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
        </div>
      )}
      {data.length !== 0 && (
        <div className="pt-6">
          {/* Image gallery */}
          <div className="full-screen">
            <div>
              <div className="aspect-w-3 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={data[0].picture}
                  alt={data[0].picture}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-6 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-10 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl text-center font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {data[0].manufacturer}
              </h1>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-bold text-gray-900 mb-2 lg:mb-4">
                Details
              </h3>
              <ul className="pl-4 list-disc text-sm font-light space-y-2 dec">
                <li className="text-gray-600">{data[0].model}</li>
                <li className="text-gray-600">{data[0].type}</li>
                <li className="text-gray-600">{data[0].year}</li>
                <li className="text-gray-600">{data[0].color}</li>
              </ul>
            </div>

            {/* Calendrier */}
            <div className="mt-4 lg:mt-0 lg:row-span-2">
              <p className="text-xl text-center text-gray-900 flex flex-col items-center">
                Booking
              </p>
              <div className="flex flex-col justify-center items-center mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
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
