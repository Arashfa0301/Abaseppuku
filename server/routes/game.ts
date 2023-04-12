import express from "express";
import controller from "../controllers/game";

const router = express.Router();
const { getGame, initiateGame, assassinate } = controller;

router.post("/create", initiateGame);
router.get("/get/:_id", getGame);
router.post("/assassinate/:_id", assassinate);

export default router;
