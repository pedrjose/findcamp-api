import { Router } from "express";
const router = Router();

import {
  createAccountController,
  loginAccountController
} from "../controllers/account.controller";

router.post("/create-account", createAccountController);
router.post("/login-account", loginAccountController);

export default router;
