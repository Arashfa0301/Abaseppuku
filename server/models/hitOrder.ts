import mongoose, { Schema } from "mongoose";
import { HitOrderType } from "../types";

const hitOrderSchema = new mongoose.Schema({
  game: { type: Schema.Types.ObjectId, ref: "Game" },
  player: { type: Schema.Types.ObjectId, ref: "User" },
  hunting: { type: Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<HitOrderType>("HitOrder", hitOrderSchema);
