import { Schema, model } from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  image?: string;
  phoneNumber?: number;
  createdAt: Date;
  updatedAt: Date;
  role: [String];
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [4, "Name should be atleast 4 characters long"],
    maxLength: [30, "Name should be less than 30 characters"],
  },
  email: {
    type: String,
    minlength: 14,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email address",
    ],
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "Password is required"],
  },
  image: { type: String },
  phoneNumber: { type: Number },
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() },
  role: { type: [String], required: true, default: ["user"] },
});

const UserModel = model<User>("User", UserSchema);
export default UserModel;
