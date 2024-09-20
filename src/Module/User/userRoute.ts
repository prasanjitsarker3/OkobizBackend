import express from "express";
import { UserControllers } from "./userController";
import validateRequest from "../../Middlewares.ts/validationRequest";
import { loginValidationSchema, userValidationSchema } from "./userValidation";

const router = express.Router();
router.post(
  "/register",
  validateRequest(userValidationSchema),
  UserControllers.createUserIntoDB
);
router.post(
  "/login",
  validateRequest(loginValidationSchema),
  UserControllers.loginUser
);
router.post("/change-password", UserControllers.changeUserPassword);

export const userRoutes = router;
