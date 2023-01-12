/* eslint-disable react/prop-types */
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
      {car.length === 0 && <h1>Loading...</h1>}
      {car.length > 0 && (
        <div>
          <img src={car.picture} alt={car.picture} />
          <h2>Manufacturer: {car.manufacturer}</h2>
          <h2>Model : {car.model}</h2>
          <h2>Type: {car.type}</h2>
          <h2>Year: {car.year}</h2>
          <h2>Color: {car.color}</h2>
        </div>
      )}
    </section>
  );
}
