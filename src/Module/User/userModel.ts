import { Schema, model } from "mongoose";
import { TUser } from "./userInterface";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<TUser>("User", userSchema);
