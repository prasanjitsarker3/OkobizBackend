import { Schema, model } from "mongoose";
import { TCard } from "./cardInterface";

const cardSchema = new Schema<TCard>(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    fatherName: {
      type: String,
      required: [true, "Father's Name is required!"],
    },
    motherName: {
      type: String,
      required: [true, "Mother's Name is required!"],
    },
    birthDate: {
      type: String,
      required: [true, "Birthdate is required!"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood group is required!"],
    },
    address: {
      type: String,
      required: [true, "Address is required!"],
    },
    profileImage: {
      type: String,
      required: [true, "Profile image is required!"],
    },
    signatureImage: {
      type: String,
      required: [true, "Signature image is required!"],
    },
  },
  {
    timestamps: true,
  }
);

export const Card = model<TCard>("Card", cardSchema);
