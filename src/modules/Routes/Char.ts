import { Router } from "express";
import Chars from "../Data/Char";

export const CharRoutes = Router();

CharRoutes.get("/", (req, res) => {
  res.json(Chars);
});

CharRoutes.get("/:name", (req, res) => {
  const charfound = Chars.find((char) => char.Nome === req.params.name);
  if (!charfound) {
    res.status(404).json({ message: "Personagem não encontrado!" });
  }
  res.json(charfound);
});
