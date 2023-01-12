/* eslint-disable react/prop-types */
export default function CarList({
  dataCar,
  modelFilter,
  colorFilter,
  yearFilter,
  typeFilter,
  cityFilter,
  manufacturerFilter,
}) {
  return (
    <div>
      {dataCar
        .filter(
          (car) =>
            (modelFilter === "" || car.model === modelFilter) &&
            (colorFilter === "" || car.color === colorFilter) &&
            (yearFilter === "" || car.year === yearFilter) &&
            (typeFilter === "" || car.type === typeFilter) &&
            (cityFilter === "" || car.city === cityFilter) &&
            (manufacturerFilter === "" ||
              car.manufacturer === manufacturerFilter)
        )
        .map((car) => (
          <div key={car.id}>
            <img key={car.id} id={car.id} src={car.picture} alt="" />
            <h2>ManufacturerFilter: {car.manufacturer}</h2>
            <h2>Model : {car.model}</h2>
            <h2>Type: {car.type}</h2>
            <h2>Year: {car.year}</h2>
            <h2>Color: {car.color}</h2>
            <h2>City: {car.city}</h2>
          </div>
        ))}
    </div>
  );
}
