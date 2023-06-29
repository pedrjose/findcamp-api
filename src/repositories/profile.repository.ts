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

export const findProfileToLikeByIdRepository = (accountId: String) =>
  Profile.findOne({ userId: accountId });

export const likeProfileRepository = (profileId: String, likes: Number) =>
  Profile.findOneAndUpdate({ userId: profileId }, { likes: likes });

export const registerNotificationRepository = (
  profileId: String,
  notificationMessage: String
) =>
  Profile.findOneAndUpdate(
    { userId: profileId },
    { $push: { notifications: { notificationMessage } } }
  );

export const registerHistoricRepository = (
  profileId: Object,
  viewedId: Object
) =>
  Profile.findOneAndUpdate(
    { userId: profileId },
    { $push: { historic: { viewedId } } }
  );
