export type TUser = {
  name: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
};

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
  email: string;
};
