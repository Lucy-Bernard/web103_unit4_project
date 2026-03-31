import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarsAPI from "../services/CarsAPI";
import {
  EXTERIOR_OPTIONS,
  ROOF_OPTIONS,
  WHEELS_OPTIONS,
  INTERIOR_OPTIONS,
  BASE_PRICE,
} from "../data/options";

const OptionPicker = ({ title, options, selected, onSelect }) => (
  <div style={{ marginBottom: "28px" }}>
    <h3
      style={{
        marginBottom: "12px",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      {title}
    </h3>
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {options.map((opt) => (
        <div
          key={opt.label}
          onClick={() => onSelect(opt)}
          style={{
            cursor: "pointer",
            border:
              selected?.label === opt.label
                ? "3px solid var(--primary)"
                : "3px solid transparent",
            borderRadius: "6px",
            overflow: "hidden",
            width: "120px",
            background: "rgba(0,0,0,0.6)",
            transition: "border-color 0.15s",
          }}
        >
          <img
            src={opt.image}
            alt={opt.label}
            style={{
              width: "100%",
              height: "80px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div style={{ padding: "6px 8px" }}>
            <p style={{ margin: 0, fontSize: "11px", fontWeight: 600 }}>
              {opt.label}
            </p>
            <p style={{ margin: 0, fontSize: "11px", color: "var(--primary)" }}>
              +${opt.price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CreateCar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [isConvertible, setIsConvertible] = useState(false);
  const [exterior, setExterior] = useState(null);
  const [roof, setRoof] = useState(null);
  const [wheels, setWheels] = useState(null);
  const [interior, setInterior] = useState(null);

  const totalPrice =
    BASE_PRICE +
    (exterior?.price || 0) +
    (roof?.price || 0) +
    (wheels?.price || 0) +
    (interior?.price || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!exterior || !roof || !wheels || !interior) {
      setError("Please select an option for every feature before submitting.");
      return;
    }

    if (
      isConvertible &&
      (roof.label === "Glass Panoramic" || roof.label === "Carbon Fiber")
    ) {
      setError(
        "A convertible cannot have a fixed roof (Glass Panoramic or Carbon Fiber).",
      );
      return;
    }

    await CarsAPI.createCar({
      name,
      is_convertible: isConvertible,
      exterior: exterior.label,
      exterior_image: exterior.image,
      roof: roof.label,
      roof_image: roof.image,
      wheels: wheels.label,
      wheels_image: wheels.image,
      interior: interior.label,
      interior_image: interior.image,
      price: totalPrice,
    });

    navigate("/custom-items");
  };

  return (
    <main
      style={{
        flexDirection: "column",
        padding: "40px",
        maxWidth: "900px",
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

      {exterior && (
        <div
          style={{
            marginBottom: "24px",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid #333",
          }}
        >
          <img
            src={exterior.image}
            alt={exterior.label}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      )}

      <p
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "var(--primary)",
          marginBottom: "32px",
        }}
      >
        ${totalPrice.toLocaleString()}
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Car Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Phantom GT"
            required
          />
        </label>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "24px",
          }}
        >
          <input
            type="checkbox"
            checked={isConvertible}
            onChange={(e) => setIsConvertible(e.target.checked)}
          />
          Convertible
        </label>

        <OptionPicker
          title="Exterior"
          options={EXTERIOR_OPTIONS}
          selected={exterior}
          onSelect={setExterior}
        />
        <OptionPicker
          title="Roof"
          options={ROOF_OPTIONS}
          selected={roof}
          onSelect={setRoof}
        />
        <OptionPicker
          title="Wheels"
          options={WHEELS_OPTIONS}
          selected={wheels}
          onSelect={setWheels}
        />
        <OptionPicker
          title="Interior"
          options={INTERIOR_OPTIONS}
          selected={interior}
          onSelect={setInterior}
        />

        <input type="submit" value="Save Build" />
      </form>
    </main>
  );
};

export default CreateCar;
