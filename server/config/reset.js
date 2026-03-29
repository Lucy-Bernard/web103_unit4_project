import { pool } from "./database.js";
import "dotenv/config";
import carData from "../data/cars.js";

// create custom_items table in database
const createCustomItemsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS custom_items;

    CREATE TABLE IF NOT EXISTS custom_items (
      id             SERIAL PRIMARY KEY,
      name           VARCHAR(100) NOT NULL,
      is_convertible BOOLEAN      NOT NULL DEFAULT false,
      exterior       VARCHAR(100) NOT NULL,
      exterior_image TEXT         NOT NULL,
      roof           VARCHAR(100) NOT NULL,
      roof_image     TEXT         NOT NULL,
      wheels         VARCHAR(100) NOT NULL,
      wheels_image   TEXT         NOT NULL,
      interior       VARCHAR(100) NOT NULL,
      interior_image TEXT         NOT NULL,
      price          INTEGER      NOT NULL DEFAULT 0,
      created_at     TIMESTAMP    NOT NULL DEFAULT NOW()
    )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 custom_items table created successfully");
  } catch (err) {
    console.error("⚠️ error creating custom_items table", err);
  }
};

// load data into custom_items table
const seedCustomItemsTable = async () => {
  await createCustomItemsTable();

  carData.forEach((car) => {
    const insertQuery = {
      text: "INSERT INTO custom_items (name, is_convertible, exterior, exterior_image, roof, roof_image, wheels, wheels_image, interior, interior_image, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    };
    const values = [
      car.name,
      car.is_convertible,
      car.exterior,
      car.exterior_image,
      car.roof,
      car.roof_image,
      car.wheels,
      car.wheels_image,
      car.interior,
      car.interior_image,
      car.price,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting car", err);
        return;
      }

      console.log(`✅ ${car.name} added successfully`);
    });
  });
};

seedCustomItemsTable();

export default createCustomItemsTable;
