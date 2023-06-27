import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import * as donetv from "dotenv";

donetv.config();

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      throw new Error("Invalid session. Please log in to access FindCamp!");

    const tokenDivider = authorization.split(" ");

    if (tokenDivider.length !== 2) throw new Error("Authentication failed!");

    const [schema, token] = tokenDivider;

    if (schema !== "Bearer") throw new Error("Authentication failed!");

    jwt.verify(token, process.env.SECRET_JWT, (error) => {
      if (error) throw new Error("Invalid session. Please log in again!");
    });

    return next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
