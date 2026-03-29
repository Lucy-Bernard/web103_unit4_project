import { pool } from "../config/database.js";

const getCustomItems = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM custom_items ORDER BY id ASC",
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getCustomItemById = async (req, res) => {
  try {
    const { itemId } = req.params;
    const results = await pool.query(
      "SELECT * FROM custom_items WHERE id = $1",
      [itemId],
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const createCustomItem = async (req, res) => {
  try {
    const {
      name,
      is_convertible,
      exterior,
      exterior_image,
      roof,
      roof_image,
      wheels,
      wheels_image,
      interior,
      interior_image,
      price,
    } = req.body;
    const insertQuery = `
      INSERT INTO custom_items 
        (name, is_convertible, exterior, exterior_image, roof, roof_image, wheels, wheels_image, interior, interior_image, price)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `;
    const values = [
      name,
      is_convertible,
      exterior,
      exterior_image,
      roof,
      roof_image,
      wheels,
      wheels_image,
      interior,
      interior_image,
      price,
    ];
    const results = await pool.query(insertQuery, values);
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateCustomItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const {
      name,
      is_convertible,
      exterior,
      exterior_image,
      roof,
      roof_image,
      wheels,
      wheels_image,
      interior,
      interior_image,
      price,
    } = req.body;
    const updateQuery = `
      UPDATE custom_items
      SET name = $1, is_convertible = $2, exterior = $3, exterior_image = $4, roof = $5, roof_image = $6,
          wheels = $7, wheels_image = $8, interior = $9, interior_image = $10, price = $11
      WHERE id = $12
      RETURNING *
    `;
    const values = [
      name,
      is_convertible,
      exterior,
      exterior_image,
      roof,
      roof_image,
      wheels,
      wheels_image,
      interior,
      interior_image,
      price,
      itemId,
    ];
    const results = await pool.query(updateQuery, values);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteCustomItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const results = await pool.query("DELETE FROM custom_items WHERE id = $1", [
      itemId,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export {
  getCustomItems,
  getCustomItemById,
  createCustomItem,
  updateCustomItem,
  deleteCustomItem,
};
