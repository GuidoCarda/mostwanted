import { PORT } from "./config.js";
import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import criminalsRoutes from "./routes/criminals.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(indexRoutes);
app.use("/v1", criminalsRoutes);

app.listen(PORT);
