import Profile, { IProfile } from "../models/Profile";

export const createProfileRepository = (profile: IProfile) =>
  Profile.create(profile);
