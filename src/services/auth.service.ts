import * as jwt from "jsonwebtoken";

export const generateToken = async (id: Object) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
