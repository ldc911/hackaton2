/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-lone-blocks */
import { useState, useEffect } from "react";
import axios from "axios";
import CarList from "../CarList/CarList";

const { VITE_BACKEND_URL } = import.meta.env;

export default function SearchBar() {
  const [dataCar, setDataCar] = useState([]);
  const [modelFilter, setModelFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const fetchMovies = () => {
    axios
      .get(`${VITE_BACKEND_URL}/private/vehicles`)
      .then((res) => {
        setDataCar(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Filter the cars data based on the selected options
  {
    dataCar.filter(
      (car) =>
        (modelFilter === "" || car.model === modelFilter) &&
        (colorFilter === "" || car.color === colorFilter) &&
        (yearFilter === "" || car.year === yearFilter) &&
        (typeFilter === "" || car.type === typeFilter) &&
        (cityFilter === "" || car.city === cityFilter) &&
        (manufacturerFilter === "" || car.manufacturer === manufacturerFilter)
    );
  }

  return (
    <div>
      <div>
        <label>Manufacturer:</label>
        <select onChange={(event) => setManufacturerFilter(event.target.value)}>
          <option value="">All</option>
          {dataCar.map((car) => (
            <option value={car.manufacturer}>{car.manufacturer}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Model:</label>
        <select onChange={(event) => setModelFilter(event.target.value)}>
          <option value="">All</option>
          {dataCar.map((car) => (
            <option value={car.model}>{car.model}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Type:</label>
        <select onChange={(event) => setTypeFilter(event.target.value)}>
          <option value="">All</option>
          {dataCar.map((car) => (
            <option value={car.type}>{car.type}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Year:</label>
        <select onChange={(event) => setYearFilter(event.target.value)}>
          <option value="">All</option>
          {dataCar.map((car) => (
            <option value={car.year}>{car.year}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select onChange={(event) => setColorFilter(event.target.value)}>
          <option value="">All</option>
          {dataCar.map((car) => (
            <option value={car.color}>{car.color}</option>
          ))}
        </select>
      </div>

      <div>
        <label>City:</label>
        <select onChange={(event) => setCityFilter(event.target.value)}>
          <option value="">All</option>
          {dataCar.map((car) => (
            <option value={car.city}>{car.city}</option>
          ))}
        </select>
      </div>
      <CarList
        dataCar={dataCar}
        modelFilter={modelFilter}
        colorFilter={colorFilter}
        yearFilter={yearFilter}
        typeFilter={typeFilter}
        cityFilter={cityFilter}
        manufacturerFilter={manufacturerFilter}
      />
    </div>
  );
}
