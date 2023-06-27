import mongoose from "mongoose";
import Account from "../models/Account";
import { IAccount } from "../models/Account";

export const createAccountRepository = (account: IAccount) =>
  Account.create(account);

export const findAccountIdByEmail = (email: string) =>
  Account.findOne({ email: email });

export const findAccountByIdLogin = (email: string) =>
  Account.findOne({ email: email }).select("+password");

export const findAccountById = (userId: Object) =>
  Account.findOne({ _id: userId });
