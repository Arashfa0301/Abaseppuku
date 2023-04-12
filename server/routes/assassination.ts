import express from "express";
import controller from "../controllers/assassination";

const router = express.Router();
const { getAssassination } = controller;

router.get("/get", getAssassination);

export default router;
