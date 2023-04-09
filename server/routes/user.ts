import express from "express";
import controller from "../controllers/user";

const router = express.Router();
const { getUser, createUser } = controller;

router.post("/create", createUser);
router.get("/get/:email", getUser);

export default router;
