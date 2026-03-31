import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      const data = await CarsAPI.getAllCars();
      setCars(data);
      setLoading(false);
    };
    fetchCars();
  }, []);

  const handleDelete = async (itemId) => {
    await CarsAPI.deleteCar(itemId);
    setCars((prev) => prev.filter((car) => car.id !== itemId));
  };

  if (loading)
    return (
      <main>
        <p>Loading...</p>
      </main>
    );

  return (
    <main style={{ flexDirection: "column", padding: "20px" }}>
      <h2>Custom Builds</h2>
      {cars.length === 0 ? (
        <p>
          No builds yet. <a href="/">Create one.</a>
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            width: "100%",
          }}
        >
          {cars.map((car) => (
            <article key={car.id}>
              <header>
                <img
                  src={car.exterior_image}
                  alt={car.exterior}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </header>
              <h3>{car.name}</h3>
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
              <p>
                <strong>Exterior:</strong> {car.exterior}
              </p>
              <p>
                <strong>Roof:</strong> {car.roof}
              </p>
              <p>
                <strong>Wheels:</strong> {car.wheels}
              </p>
              <p>
                <strong>Interior:</strong> {car.interior}
              </p>
              <p
                style={{
                  color: "var(--primary)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                }}
              >
                ${car.price.toLocaleString()}
              </p>
              <footer>
                <button onClick={() => navigate(`/custom-items/${car.id}`)}>
                  View
                </button>
                <button onClick={() => navigate(`/edit/${car.id}`)}>
                  Edit
                </button>
                <button
                  className="secondary"
                  onClick={() => handleDelete(car.id)}
                >
                  Delete
                </button>
              </footer>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default ViewCars;
