import express from "express";
import userRoutes from "./user";
import gameRoutes from "./game";
import assassinationRoutes from "./assassination";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/game", gameRoutes);
router.use("/assassination", assassinationRoutes);

export default router;
