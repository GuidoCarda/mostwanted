import { Router } from "express";
import {
  getCriminals,
  getCriminal,
  createCriminal,
  updateCriminal,
  deleteCriminal,
} from "../controllers/criminals.controllers.js";

const router = Router();

router.get("/criminals", getCriminals);

router.get("/criminals/:id", getCriminal);

router.post("/criminals", createCriminal);

router.put("/criminals/:id", updateCriminal);

router.delete("/criminals/:id", deleteCriminal);

export default router;
