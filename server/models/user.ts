import mongoose from "mongoose";
import { UserType } from "../types";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String },
});

export default mongoose.model<UserType & mongoose.Document>("User", userSchema);
