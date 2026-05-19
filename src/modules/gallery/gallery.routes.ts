// src/modules/gallery/gallery.routes.ts

import { Router } from "express";
import * as galleryController from "./gallery.controller";
import { upload } from "../../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  galleryController.createGallery
);

router.get(
  "/",
  galleryController.getGallery
);

router.get(
  "/:id",
  galleryController.getSingleGallery
);

router.put(
  "/:id",
  upload.single("image"),
  galleryController.updateGallery
);

router.delete(
  "/:id",
  galleryController.deleteGallery
);

export default router;