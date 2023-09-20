import { pool } from "../db.js";

export const getCriminals = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM criminals ORDER BY created_at DESC`
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCriminal = async (req, res) => {
  const { id } = req.params;

  try {
    const [results] = await pool.query("SELECT * FROM criminals WHERE id = ?", [
      id,
    ]);

    if (results.length === 0) {
      return res.status(400).json({ message: "Criminal not found" });
    }

    return res.json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCriminal = async (req, res) => {
  const { name, nickname } = req.body;

  try {
    const [results] = await pool.query(
      `INSERT INTO criminals (name, nickname) VALUES (?,?)`,
      [name, nickname]
    );

    return res.json({
      id: results.insertId,
      name,
      nickname,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCriminal = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await pool.query("UPDATE criminals SET ? WHERE id = ?", [
      req.body,
      id,
    ]);

    if (results.affectedRows === 0) {
      return res.status(404).json("Criminal not found");
    }

    res.json({ id, ...req.body });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCriminal = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await pool.query("DELETE FROM criminals WHERE id = ?", [
      id,
    ]);

    if (results.affectedRows === 0) {
      return res.status(404).json("Criminal not found");
    }

    res.status(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
