import Profile, { IProfile, IUpdate } from "../models/Profile";

export const createProfileRepository = (profile: IProfile) =>
  Profile.create(profile);

export const updateProfileRepository = (
  profileId: Object,
  { name, bio, photo, college, instagram, linkedin, twitter }: IUpdate
) =>
  Profile.findOneAndUpdate(
    { userId: profileId },
    { name, bio, photo, college, instagram, linkedin, twitter }
  );

export const findProfileByIdRepository = (accountId: Object) =>
  Profile.findOne({ userId: accountId });
