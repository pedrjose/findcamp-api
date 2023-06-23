import Account from "../models/Account";
import { IAccount } from "../models/Account";

export const createAccountRepository = (account: IAccount) =>
  Account.create(account);

export const findAccountIdByEmail = (email: string) =>
  Account.findOne({ email: email });
