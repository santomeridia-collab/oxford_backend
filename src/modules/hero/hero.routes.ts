import { Router } from "express";
import * as heroController from "./hero.controller";
import { upload } from "../../middleware/upload.middleware";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  heroController.createHero
);

router.get("/", heroController.getHero);

router.put(
  "/:id",
  upload.single("image"),
  heroController.updateHero
);

router.delete("/:id", heroController.deleteHero);

export default router;