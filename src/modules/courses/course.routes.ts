// src/modules/course/course.routes.ts

import { Router } from "express";
import * as courseController from "./course.controller";
import { upload } from "../../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  courseController.createCourse
);

router.get(
  "/",
  courseController.getCourses
);

router.get(
  "/categories/all",
  courseController.getCategories
);

router.get(
  "/category/:category",
  courseController.getCoursesByCategory
);

router.get(
  "/:id",
  courseController.getSingleCourse
);

router.put(
  "/:id",
  upload.single("image"),
  courseController.updateCourse
);

router.delete(
  "/:id",
  courseController.deleteCourse
);

export default router;