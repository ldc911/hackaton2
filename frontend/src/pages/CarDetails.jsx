/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import CarDetailsComponent from "@components/RentalCar/CarDetails/CarDetailsComponent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;
export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  const fetchCar = () => {
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

        setCar(newCars);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <section>
      <div>
        <h1>Car Details</h1>
        <p>Car ID: {car.id}</p>
        <CarDetailsComponent />
      </div>
    </section>
  );
}
