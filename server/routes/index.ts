import express from "express";
import userRoutes from "./user";
import gameRoutes from "./game";

const router = express.Router();
router.use("/user", userRoutes);
router.use("/game", gameRoutes);

export default router;
