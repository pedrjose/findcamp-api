import { Request, Response } from "express";
import { createAccountService } from "../services/account.service";
import { IAccount } from "../models/Account";

export const createAccountController = async (req: Request, res: Response) => {
  const { email, password }: IAccount = req.body;
  try {
    const createAccount = await createAccountService(email, password);

    res.send(createAccount);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
