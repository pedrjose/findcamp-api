import mongoose from "mongoose";
import { Schema } from "mongoose";

interface IProfile {
  name: string;
  bio: string;
  photo: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
}

const ProfileSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  instagram: {
    type: String
  },
  linkedin: {
    type: String
  },
  facebook: {
    type: String
  }
});

const Profile = mongoose.model<IProfile>("model", ProfileSchema);

export default Profile;
