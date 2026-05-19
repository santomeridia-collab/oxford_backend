// src/modules/contact/contact.routes.ts

import { Router } from "express";

import * as contactController from "./contact.controller";

const router = Router();

router.post(
  "/submit",
  contactController.createContact
);

router.get(
  "/",
  contactController.getContacts
);

router.get(
  "/reviews-summary",
  contactController.getReviewSummary
);

export default router;