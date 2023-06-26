import { IProfile } from "../models/Profile";

import { createProfileRepository } from "../repositories/profile.repository";

export const createProfileService = async ({
  userId,
  name,
  bio,
  photo,
  college,
  instagram,
  linkedin,
  twitter
}: IProfile) => {
  if (!userId || !name || !bio || !photo || !college)
    throw new Error("Submit all required fields!");

  const likes = 0;
  const connections = 0;

  !instagram ? (instagram = "No inputted!") : null;
  !linkedin ? (linkedin = "No inputted!") : null;
  !twitter ? (twitter = "No inputted!") : null;

  const registerProfile = await createProfileRepository({
    userId,
    name,
    bio,
    photo,
    college,
    likes,
    connections,
    instagram,
    linkedin,
    twitter
  });

  if (!registerProfile) throw new Error("Register profile failed. Try again!");

  return { message: "Profile created successfully!" };
};
