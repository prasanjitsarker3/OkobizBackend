import express from "express";
import { cardController } from "./cardController";

const router = express.Router();
router.post("/create", cardController.createCard);

export const cardRoutes = router;
