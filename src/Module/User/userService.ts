import { TChangePassword, TUser } from "./userInterface";
import bcrypt from "bcrypt";
import { User } from "./userModel";
import AppError from "../../Error/AppError";
import { JwtPayload } from "jsonwebtoken";
import { createToken } from "../../UtlitisFunc/createToken";
import config from "../../config";

const registerUserIntoDB = async (payload: TUser) => {
  const hashPassword = await bcrypt.hash(payload.password, 12);

  const registerData = {
    name: payload.name,
    email: payload.email,
    password: hashPassword,
  };

  const result = await User.create(registerData);
  return result;
};

const LoginUserIntoDB = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email }).populate(
    "password"
  );
  if (!user) {
    throw new AppError(404, "User is not found !");
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new AppError(401, "Password does not match!");
  }

  const jwtPayload: JwtPayload = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  const token = createToken(
    jwtPayload,
    config.accessToken as string,
    config.accessTokenExpaierDate as string
  );
  return {
    accessToken: token,
  };
};

const changePassword = async (payload: TChangePassword) => {
  const userData = await User.findOne({ email: payload?.email }).populate(
    "password"
  );
  if (!userData) {
    throw new AppError(404, "User Not Found!");
  }
  console.log(userData);
  const isPasswordMatched = await bcrypt.compare(
    payload.oldPassword,
    userData.password
  );
  if (!isPasswordMatched) {
    throw new AppError(401, "Old password does not match!");
  }
  const hashedNewPassword = await bcrypt.hash(payload.newPassword, 12);
  const result = await User.updateOne(
    { email: payload.email },
    { password: hashedNewPassword }
  );
  console.log(result);
  return result;
};

export const UserServices = {
  registerUserIntoDB,
  LoginUserIntoDB,
  changePassword,
};
