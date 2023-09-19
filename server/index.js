import { PORT } from "./config.js";
import express from "express";

import indexRoutes from "./routes/index.routes.js";
import criminalsRoutes from "./routes/criminals.routes.js";
const app = express();

app.use(indexRoutes);
app.use(criminalsRoutes);
app.listen(PORT);
console.log(`server ejecutandose en puerto ${PORT}`);
