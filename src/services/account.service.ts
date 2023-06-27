import * as bcrypt from "bcrypt";
import {
  createAccountRepository,
  findAccountByIdLogin
} from "../repositories/account.repository";
import { generateToken } from "./auth.service";
import { findProfileByIdRepository } from "../repositories/profile.repository";

export const createAccountService = async (email: string, password: string) => {
  if (!email || !password)
    throw new Error("Submit all fields for registration!");

  const registerAccount = await createAccountRepository({ email, password });

  if (!registerAccount) throw new Error("Error creating account. Try again!");

  return {
    message: `Account created successfully. An ID has been sent to your email. Please check it to proceed!`,
    userEmail: registerAccount.email,
    accountId: registerAccount._id,
    status: true
  };
};

export const loginAccountService = async (email: string, password: string) => {
  const account = await findAccountByIdLogin(email);

  if (!account) throw new Error("Email or password not found!");

  const validPass = await bcrypt.compare(password, account.password);

  if (!validPass) throw new Error("Email or password not found!");

  const token = await generateToken(account._id);
  const accountProfile = await findProfileByIdRepository(account._id);

  return {
    token,
    accountProfile,
    message: "Log in successfully!",
    promise: true
  };
};
