// src/modules/instructor/instructor.routes.ts

import { Router } from "express";

import * as instructorController from "./instructor.controller";

import { upload } from "../../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  upload.single("photo"),
  instructorController.createInstructor
);

router.get(
  "/",
  instructorController.getInstructors
);

router.get(
  "/:id",
  instructorController.getSingleInstructor
);

router.put(
  "/:id",
  upload.single("photo"),
  instructorController.updateInstructor
);

router.delete(
  "/:id",
  instructorController.deleteInstructor
);

export default router;