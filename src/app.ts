import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware";
import heroRoutes from "./modules/hero/hero.routes";
import courseRoutes from "./modules/courses/course.routes";
import galleryRoutes from "./modules/gallery/gallery.routes";
import eventRoutes from "./modules/event/event.routes";
import contactRoutes from "./modules/contact/contact.routes";
import adminRoutes from "./modules/auth/auth.routes";
import newsRoutes from "./modules/news/news.routes";
import demoRoutes from "./modules/demo/demo.routes";
import instructorRoutes from "./modules/instructor/instructor.routes";
import enrollRoutes from "./modules/enroll/enroll.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

app.use("/api/admin", adminRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/contact-management", contactRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/demo", demoRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/enroll", enrollRoutes);
export default app;
