import Series from "../Data/Series";
import DataSolos from "../Data/Solo";
import { Router } from "express";
import shuffle from "../../utilities/shuffleArray";

export const FullRoute = Router();

FullRoute.get("/", (req, res) => {
  res.json(shuffle([...DataSolos, ...Series]));
});

FullRoute.get("/:ref", (req, res) => {
  const arr = [...DataSolos, ...Series];
  const found = arr.find((item) => item.Ref === req.params.ref);
  if (!found) return res.status(404);
  return res.json(found);
});
