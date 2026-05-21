// src/modules/demo/demo.routes.ts

import { Router } from "express";

import * as demoController from "./demo.controller";

const router = Router();

router.post(
  "/",
  demoController.createDemo
);

router.get(
  "/",
  demoController.getDemos
);

export default router;