import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  const [rows, fields] = await pool.query(
    "SELECT 1 + 1 as adition, 2*2 as product"
  );
  console.log(rows);
  console.log(fields);
  res.json("ping");
});

export default router;
