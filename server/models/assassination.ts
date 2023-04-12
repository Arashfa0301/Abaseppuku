import mongoose, { Schema } from "mongoose";
import { assassinationType, assassinationModel } from "../types";
import Game from "./game";

const assassinationSchema = new Schema<assassinationType, assassinationModel>({
  game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
  player: { type: Schema.Types.ObjectId, ref: "User", required: true },
  assassinated: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

assassinationSchema.statics.getBestKiller = async function (gameId: string) {
  const game = await Game.findOne({ _id: gameId });
  if (!game) {
    throw new Error("The game doesn't exists");
  }

  const dict: { [player: string]: number } = {};
  const players = game?.players;

  for (var player of players) {
    dict[player.toString()] = (await this.find({ player: player })).length;
  }

  return Object.keys(dict).reduce((a, b) => (dict[a] > dict[b] ? a : b));
};

export default mongoose.model<assassinationType, assassinationModel>(
  "Assassination",
  assassinationSchema
);
