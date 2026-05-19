// src/modules/event/event.routes.ts

import { Router } from "express";
import * as eventController from "./event.controller";
import { upload } from "../../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  eventController.createEvent
);

router.get(
  "/",
  eventController.getEvents
);

router.get(
  "/:id",
  eventController.getSingleEvent
);

router.put(
  "/:id",
  upload.single("image"),
  eventController.updateEvent
);

router.delete(
  "/:id",
  eventController.deleteEvent
);

export default router;