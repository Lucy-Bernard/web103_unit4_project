import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";

const EditCar = () => {
  const { itemId } = useParams();
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

  useEffect(() => {
    const fetchCar = async () => {
      const data = await CarsAPI.getCar(itemId);
      setCar(data);
    };
    fetchCar();
  }, [itemId]);

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

    await CarsAPI.updateCar(itemId, { ...car, price: parseInt(car.price) });
    navigate("/custom-items");
  };

  const handleDelete = async () => {
    await CarsAPI.deleteCar(itemId);
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
      <h2>Edit Build</h2>
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
            required
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="is_convertible"
            checked={car.is_convertible || false}
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
            required
          />
        </label>

        <div style={{ display: "flex" }}>
          <input type="submit" value="Save Changes" />
          <button type="button" className="secondary" onClick={handleDelete}>
            Delete Build
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => navigate("/custom-items")}
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditCar;
