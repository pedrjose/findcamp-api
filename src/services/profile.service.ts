import { IProfile, IUpdate } from "../models/Profile";

import {
  findAccountById,
  findAccountIdByEmail
} from "../repositories/account.repository";

import {
  createProfileRepository,
  updateProfileRepository,
  likeProfileRepository,
  registerNotificationRepository,
  findProfileByIdRepository
} from "../repositories/profile.repository";

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

  const verifyId = await findAccountById(userId);

  if (!verifyId) throw new Error("Incorrect account ID!");

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

export const updateProfileService = async (newProfile: IUpdate) => {
  const { email, name, bio, photo, college, instagram, linkedin, twitter } =
    newProfile;

  const findAccount = await findAccountIdByEmail(email);

  if (!findAccount) throw new Error("Email verify failed. Try again!");

  if (
    !name &&
    !bio &&
    !photo &&
    !college &&
    !instagram &&
    !linkedin &&
    !twitter
  )
    throw new Error("Submit at least one field to updating!");

  const profileId = findAccount._id;

  const updateProfile = await updateProfileRepository(profileId, newProfile);

  if (!updateProfile) new Error("Update profile error. Try again!");

  return { message: "Profile updated successfully", status: true };
};

export const likeProfileService = async (id: String) => {
  const profile = await findProfileByIdRepository(id);

  if (!profile) throw new Error("Cannot like this profile!");

  const profileLikes = profile.likes + 1;

  await likeProfileRepository(id, profileLikes);

  const notification = `Your profile was liked at ${new Date()}`;

  await registerNotificationRepository(id, notification);
};
