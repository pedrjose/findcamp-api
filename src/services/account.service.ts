import { createAccountRepository } from "../repositories/account.repository";

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
