import { Router } from "express";
import Series from "../Data/Series";

export const SerieRoute = Router();

SerieRoute.get("/", (req, res) => {
  res.json(Series);
});

SerieRoute.get("/:ref", (req, res) => {
  const ref = req.params.ref;
  const found = Series.find((serie) => serie.Ref === ref || serie.Nome === ref);
  if (found) return res.json(found);
  return res.json({ error: "Not Found" });
});
