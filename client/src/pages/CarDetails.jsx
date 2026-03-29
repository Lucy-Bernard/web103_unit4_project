import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";

const CarDetails = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      const data = await CarsAPI.getCar(itemId);
      setCar(data);
      setLoading(false);
    };
    fetchCar();
  }, [itemId]);

  const handleDelete = async () => {
    await CarsAPI.deleteCar(itemId);
    navigate("/custom-items");
  };

  if (loading)
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  if (!car)
    return (
      <main>
        <p>Car not found.</p>
      </main>
    );

  return (
    <main
      style={{
        flexDirection: "column",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>{car.name}</h2>
      {car.is_convertible && (
        <small
          style={{
            color: "var(--primary)",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Convertible
        </small>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "24px",
        }}
      >
        <div>
          <p
            style={{
              color: "gray",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            Exterior
          </p>
          <img
            src={car.exterior_image}
            alt={car.exterior}
            style={{ width: "100%", borderRadius: "4px", marginBottom: "8px" }}
          />
          <p>{car.exterior}</p>
        </div>
        <div>
          <p
            style={{
              color: "gray",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            Roof
          </p>
          <img
            src={car.roof_image}
            alt={car.roof}
            style={{ width: "100%", borderRadius: "4px", marginBottom: "8px" }}
          />
          <p>{car.roof}</p>
        </div>
        <div>
          <p
            style={{
              color: "gray",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            Wheels
          </p>
          <img
            src={car.wheels_image}
            alt={car.wheels}
            style={{ width: "100%", borderRadius: "4px", marginBottom: "8px" }}
          />
          <p>{car.wheels}</p>
        </div>
        <div>
          <p
            style={{
              color: "gray",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 700,
            }}
          >
            Interior
          </p>
          <img
            src={car.interior_image}
            alt={car.interior}
            style={{ width: "100%", borderRadius: "4px", marginBottom: "8px" }}
          />
          <p>{car.interior}</p>
        </div>
      </div>

      <p
        style={{
          color: "var(--primary)",
          fontSize: "2rem",
          fontWeight: 700,
          marginTop: "24px",
        }}
      >
        ${car.price.toLocaleString()}
      </p>

      <div style={{ display: "flex" }}>
        <button onClick={() => navigate(`/edit/${car.id}`)}>Edit</button>
        <button className="secondary" onClick={handleDelete}>
          Delete
        </button>
        <button className="secondary" onClick={() => navigate("/custom-items")}>
          Back
        </button>
      </div>
    </main>
  );
};

export default CarDetails;
