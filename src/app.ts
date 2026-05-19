import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware";
import heroRoutes from "./modules/hero/hero.routes";
import courseRoutes from "./modules/courses/course.routes";
import galleryRoutes from "./modules/gallery/gallery.routes";
import eventRoutes from "./modules/event/event.routes";
import contactRoutes from "./modules/contact/contact.routes";
import adminRoutes from "./modules/admin/admin.routes";


const app = express();

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

app.use(
  "/api/admin",
  adminRoutes
);
app.use("/api/hero", heroRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/events", eventRoutes);
app.use(
  "/api/contact-management",
  contactRoutes
);

export default app;
