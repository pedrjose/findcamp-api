import { Router } from "express";
const router = Router();

import { createProfileController } from "../controllers/profile.controller";

router.post("/create-profile", createProfileController);

export default router;
