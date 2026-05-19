// src/modules/admin/admin.routes.ts

import { Router } from "express";

import * as adminController from "./admin.controller";

const router = Router();

router.post(
  "/register",
  adminController.registerAdmin
);

router.post(
  "/login",
  adminController.loginAdmin
);

export default router;