/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

export default function CarDetailsComponent() {
  const [dataCarId, setDataCarId] = useState([]);
  const [selectedCarsId, setSelectedCarsId] = useState();
  const { id } = useParams();

  const fetchCars = () => {
    axios
      .get(`${VITE_BACKEND_URL}/private/cardetails/${id}`)
      .then((res) => {
        setDataCarId(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCars();
  }, [selectedCarsId]);
  return (
    <section>
      <div>
        {dataCarId.map((car) => (
          <>
            <img src={car.picture} alt="" />
            <h2>Manufacturer: {car.manufacturer}</h2>
            <h2>Model : {car.model}</h2>
            <h2>Type: {car.type}</h2>
            <h2>Year: {car.year}</h2>
            <h2>Color: {car.color}</h2>
            <h2>City: {car.city}</h2>
            <h2>Seats: {car.seats}</h2>
            <h2>Mileage: {car.mileage} km</h2>
            <h2>Price: {car.price} € / day</h2>
          </>
        ))}
      </div>
    </section>
  );
}
