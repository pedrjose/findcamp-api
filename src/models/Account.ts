import mongoose from "mongoose";
import { Schema } from "mongoose";
import * as bcrypt from "bcrypt";

export interface IAccount {
  email: string;
  password: string;
}

const AccountSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
});

AccountSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const Account = mongoose.model<IAccount>("Account", AccountSchema);

export default Account;
