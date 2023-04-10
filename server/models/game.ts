import mongoose, { Model, Schema } from "mongoose";
import { Gametype } from "../types";
import user from "./user";

interface GameModel extends Model<any> {
  find: any;
}

const gameSchema = new mongoose.Schema({
  players: [{ type: Schema.Types.ObjectId, ref: "User" }],
  completed: { type: Boolean },
  winner: { type: Schema.Types.ObjectId, ref: "User" },
  mostKills: { type: Schema.Types.ObjectId, ref: "User" },
});

gameSchema.pre("save", async function (next, done) {
  var invalid = false;
  const GameModel = this.constructor as GameModel;

  for (var player of this.players) {
    await GameModel.find({ players: player }).then((game: Gametype[]) => {
      if (game.length !== 0) {
        invalid = true;
      }
    });
  }

  invalid == false
    ? next()
    : next(
        new Error("One or more of player are already active at a other game")
      );
});

gameSchema.statics.validateGame = function () {};

export default mongoose.model<Gametype>("Game", gameSchema);
