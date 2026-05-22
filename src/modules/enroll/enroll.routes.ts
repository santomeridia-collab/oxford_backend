// src/modules/enroll/enroll.routes.ts

import { Router } from "express";

import * as enrollController from "./enroll.controller";

const router = Router();

router.post(
  "/",
  enrollController.createEnroll
);

router.get(
  "/",
  enrollController.getEnrolls
);

export default router;