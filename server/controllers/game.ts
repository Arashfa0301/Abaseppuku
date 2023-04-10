import Game from "../models/game";
import User from "../models/user";
import Assassination from "../models/assassination";
import { RequestHandler } from "express";
import { generateHitList } from "../algorithms";
import mongoose, { Model, ObjectId } from "mongoose";
import hitOrder from "../models/hitOrder";

const initiateGame: RequestHandler = async (req, res) => {
  const game = new Game({
    players: req.body.players,
    completed: false,
    winner: null,
    mostKills: null,
  });

  return game
    .save()
    .then(async (game) => {
      generateHitList(
        game._id,
        game.players.map((x) => x.toString())
      );
      return game;
    })
    .then((game) => res.status(201).json(game))
    .catch((e: Error) => res.status(400).json(e.message));
};

const assassinate: RequestHandler = async (req, res) => {
  // TODO: game id validation here

  // const game = await Game.findOne({ _id: req.params._id });
  // if(!game){
  //   res.status(400).json("Game doesn")
  // }

  const assassination = new Assassination({
    game: req.params._id,
    player: req.body.player,
    assassinated: req.body.assassinated,
  });

  return assassination
    .save()
    .then(async (object) => {
      const b = await hitOrder.findOne({
        game: req.params._id,
        player: req.body.assassinated,
      });
      const newTarget = b?.hunting;
      await b?.deleteOne();

      await hitOrder.findOneAndUpdate(
        { game: req.params._id, player: req.body.player },
        { hunting: newTarget }
      );

      const hitOrders = await hitOrder.find({ game: req.params._id });

      if (hitOrders.length === 1) {
        await Game.findOneAndUpdate(
          { game: req.params._id },
          {
            completed: true,
            winner: hitOrders.at(0)?.player,
            mostKills: await Assassination.getBestKiller(req.params._id),
          }
        );
      }

      return res.status(201).json(object);
    })

    .catch((e) => res.status(500).json(e));
};

const getGame: RequestHandler = async (req, res) => {
  return Game.findOne({ _id: req.params._id })
    .then((game) => (game ? res.status(200).json(game) : res.status(404)))
    .catch((e) => res.status(500).json(e));
};

export default { initiateGame, getGame, assassinate };
