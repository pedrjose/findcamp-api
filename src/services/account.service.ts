import { createAccountRepository } from "../repositories/account.repository";

export const createAccountService = async (email: string, password: string) => {
  if (!email) throw new Error("You can't register a empty email!");

  if (!password) throw new Error("You can't register a empty password!");

  const registerAccount = await createAccountRepository({ email, password });

  if (!registerAccount) throw new Error("Error creating account. Try again!");

  return { message: "Account created successfully!", email };
};
