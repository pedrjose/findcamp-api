import { Router } from "express";
const router = Router();

import { createAccountController } from "../controllers/account.controller";

router.post("/create-account", createAccountController);

export default router;
