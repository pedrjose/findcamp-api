import { Request, Response } from "express";
import { IProfile, IUpdate } from "../models/Profile";

import {
  createProfileService,
  updateProfileService,
  likeProfileService
} from "../services/profile.service";

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

export const updateProfileController = async (req: Request, res: Response) => {
  const {
    name,
    bio,
    photo,
    college,
    instagram,
    linkedin,
    twitter,
    email
  }: IUpdate = req.body;

  try {
    const newProfile: IUpdate = {
      name,
      bio,
      photo,
      college,
      instagram,
      linkedin,
      twitter,
      email
    };

    const updating = await updateProfileService(newProfile);

    res.send(updating);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const likeProfileController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const like = await likeProfileService(id);

    res.send(like);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
