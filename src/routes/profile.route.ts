import { Router } from "express";
const router = Router();

import {
  createProfileController,
  updateProfileController
} from "../controllers/profile.controller";

router.post("/create-profile", createProfileController);
router.patch("/update-profile", updateProfileController);

export default router;
