// src/modules/news/news.routes.ts

import { Router } from "express";

import * as newsController from "./news.controller";

import { upload } from "../../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  newsController.createNews
);

router.get(
  "/",
  newsController.getNews
);

router.get(
  "/category/:category",
  newsController.getNewsByCategory
);

router.get(
  "/:id",
  newsController.getSingleNews
);

router.put(
  "/:id",
  upload.single("image"),
  newsController.updateNews
);

router.delete(
  "/:id",
  newsController.deleteNews
);

export default router;