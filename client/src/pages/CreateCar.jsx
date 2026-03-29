import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";

const CreateCar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [car, setCar] = useState({
    name: "",
    is_convertible: false,
    exterior: "",
    exterior_image: "",
    roof: "",
    roof_image: "",
    wheels: "",
    wheels_image: "",
    interior: "",
    interior_image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Impossible combo validation: convertible cannot have panoramic or carbon fiber roof
    if (
      car.is_convertible &&
      (car.roof === "Glass Panoramic" || car.roof === "Carbon Fiber")
    ) {
      setError(
        "A convertible cannot have a fixed roof option (Glass Panoramic or Carbon Fiber).",
      );
      return;
    }

    await CarsAPI.createCar({ ...car, price: parseInt(car.price) });
    navigate("/custom-items");
  };

  return (
    <main
      style={{
        flexDirection: "column",
        padding: "40px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2>Customize Your Build</h2>
      {error && (
        <p
          style={{
            color: "var(--primary)",
            border: "1px solid var(--primary)",
            padding: "12px",
            borderRadius: "4px",
          }}
        >
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Car Name
          <input
            type="text"
            name="name"
            value={car.name}
            onChange={handleChange}
            placeholder="e.g. Phantom GT"
            required
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="is_convertible"
            checked={car.is_convertible}
            onChange={handleChange}
          />{" "}
          Convertible
        </label>

        <label>
          Exterior Color
          <input
            type="text"
            name="exterior"
            value={car.exterior}
            onChange={handleChange}
            placeholder="e.g. Midnight Black"
            required
          />
        </label>

        <label>
          Exterior Image URL
          <input
            type="text"
            name="exterior_image"
            value={car.exterior_image}
            onChange={handleChange}
            placeholder="https://..."
            required
          />
        </label>

        <label>
          Roof
          <input
            type="text"
            name="roof"
            value={car.roof}
            onChange={handleChange}
            placeholder="e.g. Carbon Fiber"
            required
          />
        </label>

        <label>
          Roof Image URL
          <input
            type="text"
            name="roof_image"
            value={car.roof_image}
            onChange={handleChange}
            placeholder="https://..."
            required
          />
        </label>

        <label>
          Wheels
          <input
            type="text"
            name="wheels"
            value={car.wheels}
            onChange={handleChange}
            placeholder='e.g. Sport 20"'
            required
          />
        </label>

        <label>
          Wheels Image URL
          <input
            type="text"
            name="wheels_image"
            value={car.wheels_image}
            onChange={handleChange}
            placeholder="https://..."
            required
          />
        </label>

        <label>
          Interior
          <input
            type="text"
            name="interior"
            value={car.interior}
            onChange={handleChange}
            placeholder="e.g. Red Leather"
            required
          />
        </label>

        <label>
          Interior Image URL
          <input
            type="text"
            name="interior_image"
            value={car.interior_image}
            onChange={handleChange}
            placeholder="https://..."
            required
          />
        </label>

        <label>
          Price
          <input
            type="number"
            name="price"
            value={car.price}
            onChange={handleChange}
            placeholder="e.g. 65000"
            required
          />
        </label>

        <input type="submit" value="Create Build" />
      </form>
    </main>
  );
};

export default CreateCar;
