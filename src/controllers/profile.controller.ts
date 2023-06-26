import { Request, Response } from "express";
import { IProfile } from "../models/Profile";

import { createProfileService } from "../services/profile.service";

export const createProfileController = async (req: Request, res: Response) => {
  const {
    userId,
    name,
    bio,
    photo,
    college,
    instagram,
    linkedin,
    twitter
  }: IProfile = req.body;

  try {
    const createProfile = await createProfileService({
      userId,
      name,
      bio,
      photo,
      college,
      instagram,
      linkedin,
      twitter
    });

    res.send(createProfile);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
