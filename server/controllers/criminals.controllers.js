import { pool } from "../db.js";

export const getCriminals = async (req, res) => {
  const [rows] = await pool.query(
    `SELECT * FROM criminals ORDER BY created_at DESC`
  );
  console.log(rows);
  res.json(rows);
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
    console.log(results);
    return res.json(results);
  } catch (e) {
    console.log(e);
  }

  res.json("getting a criminal");
};

export const createCriminal = async (req, res) => {
  const { name, nickname } = req.body;
  console.log(name, nickname);
  try {
    const [results] = await pool.query(
      `INSERT INTO criminals (name, nickname) VALUES (?,?)`,
      [name, nickname]
    );

    res.json({
      id: results.insertId,
      name,
      nickname,
    });
  } catch (e) {
    console.error(e);
  }
  res.send("creating a criminal");
};

export const updateCriminal = (req, res) => {
  res.send("updating a criminal");
};

export const deleteCriminal = async (req, res) => {
  const { id } = req.params;

  const [results] = await pool.query("DELETE FROM criminals WHERE id = ?", [
    id,
  ]);

  if (results.affectedRows === 0) {
    return res.status(404).json("Criminal not found");
  }

  res.status(204);
};
