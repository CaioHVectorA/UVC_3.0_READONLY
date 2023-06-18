import Series from "../Data/Series";
import DataSolos from "../Data/Solo";
import { Router } from "express";
import shuffle from "../../utilities/shuffleArray";

export const FullRoute = Router();

FullRoute.get("/", (req, res) => {
  res.json(shuffle([...DataSolos, ...Series]));
});
