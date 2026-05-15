import express from "express";
import cors from "cors";
import heroRoutes from "./modules/hero/hero.routes";
import errorMiddleware from "./middleware/error.middleware";

import courseRoutes from "./modules/courses/course.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hero", heroRoutes);
app.use("/api/courses", courseRoutes);

app.use(errorMiddleware);

export default app;
