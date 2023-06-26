import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IProfile {
  userId: mongoose.Schema.Types.ObjectId;
  name: string;
  bio: string;
  photo: string;
  college: string;
  likes?: number;
  connections?: number;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

const ProfileSchema: Schema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
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
  college: {
    type: String,
    required: true
  },
  likes: {
    type: Number
  },
  connections: {
    type: Number
  },
  instagram: {
    type: String
  },
  linkedin: {
    type: String
  },
  twitter: {
    type: String
  }
});

const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);

export default Profile;
