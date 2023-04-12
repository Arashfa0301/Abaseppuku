import Assassination from "../models/assassination";
import { RequestHandler } from "express";

const getAssassination: RequestHandler = async (req, res) => {
  return Assassination.find({
    game: req.params.game,
    palyer: req.params.player,
  })
    .then((assa) => (assa ? res.status(200).json(assa) : res.status(404)))
    .catch((e) => res.status(500).json(e));
};

export default { getAssassination };
