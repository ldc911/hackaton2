import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

const days = [
  { date: "2021-12-27" },
  { date: "2021-12-28" },
  { date: "2021-12-29" },
  { date: "2021-12-30" },
  { date: "2021-12-31" },
  { date: "2022-01-01", isCurrentMonth: true },
  { date: "2022-01-02", isCurrentMonth: true },
  { date: "2022-01-03", isCurrentMonth: true },
  { date: "2022-01-04", isCurrentMonth: true },
  { date: "2022-01-05", isCurrentMonth: true },
  { date: "2022-01-06", isCurrentMonth: true },
  { date: "2022-01-07", isCurrentMonth: true },
  { date: "2022-01-08", isCurrentMonth: true },
  { date: "2022-01-09", isCurrentMonth: true },
  { date: "2022-01-10", isCurrentMonth: true },
  { date: "2022-01-11", isCurrentMonth: true },
  { date: "2022-01-12", isCurrentMonth: true, isToday: true },
  { date: "2022-01-13", isCurrentMonth: true },
  { date: "2022-01-14", isCurrentMonth: true },
  { date: "2022-01-15", isCurrentMonth: true },
  { date: "2022-01-16", isCurrentMonth: true },
  { date: "2022-01-17", isCurrentMonth: true },
  { date: "2022-01-18", isCurrentMonth: true },
  { date: "2022-01-19", isCurrentMonth: true },
  { date: "2022-01-20", isCurrentMonth: true },
  { date: "2022-01-21", isCurrentMonth: true },
  { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
  { date: "2022-01-23", isCurrentMonth: true },
  { date: "2022-01-24", isCurrentMonth: true },
  { date: "2022-01-25", isCurrentMonth: true },
  { date: "2022-01-26", isCurrentMonth: true },
  { date: "2022-01-27", isCurrentMonth: true },
  { date: "2022-01-28", isCurrentMonth: true },
  { date: "2022-01-29", isCurrentMonth: true },
  { date: "2022-01-30", isCurrentMonth: true },
  { date: "2022-01-31", isCurrentMonth: true },
  { date: "2022-02-01" },
  { date: "2022-02-02" },
  { date: "2022-02-03" },
  { date: "2022-02-04" },
  { date: "2022-02-05" },
  { date: "2022-02-06" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
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
              <h2 className="sr-only">Product information</h2>
              <p className="text-xl text-center text-gray-900">Booking</p>

              {/* Calendrier */}
              <div className="mt-6">
                <div>
                  <div className="justify-center">
                    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                      <div className="flex items-center text-gray-900">
                        <button
                          type="button"
                          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Previous month</span>
                          <ChevronLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                        <div className="flex-auto font-semibold">January</div>
                        <button
                          type="button"
                          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Next month</span>
                          <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                        <div>S</div>
                      </div>
                      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                        {days.map((day, dayIdx) => (
                          <button
                            key={day.date}
                            type="button"
                            className={classNames(
                              "py-1.5 hover:bg-gray-100 focus:z-10",
                              day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                              (day.isSelected || day.isToday) &&
                                "font-semibold",
                              day.isSelected && "text-white",
                              !day.isSelected &&
                                day.isCurrentMonth &&
                                !day.isToday &&
                                "text-gray-900",
                              !day.isSelected &&
                                !day.isCurrentMonth &&
                                !day.isToday &&
                                "text-gray-400",
                              day.isToday &&
                                !day.isSelected &&
                                "text-indigo-600",
                              dayIdx === 0 && "rounded-tl-lg",
                              dayIdx === 6 && "rounded-tr-lg",
                              dayIdx === days.length - 7 && "rounded-bl-lg",
                              dayIdx === days.length - 1 && "rounded-br-lg"
                            )}
                          >
                            <time
                              dateTime={day.date}
                              className={classNames(
                                "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                                day.isSelected &&
                                  day.isToday &&
                                  "bg-indigo-600",
                                day.isSelected && !day.isToday && "bg-gray-900"
                              )}
                            >
                              {day.date.split("-").pop().replace(/^0/, "")}
                            </time>
                          </button>
                        ))}
                      </div>

                      <button
                        type="submit"
                        className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Reserver
                      </button>
                    </div>
                  </div>
                </div>
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
