import { Router } from "express";
import { userRoutes } from "../Module/User/userRoute";
import { cardRoutes } from "../Module/NationCard/card.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/card",
    route: cardRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
