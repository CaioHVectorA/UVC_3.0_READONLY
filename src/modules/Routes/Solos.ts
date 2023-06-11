import { Router } from "express";
import DataSolos from "../Data/Solo";

export const SoloRoutes = Router();

SoloRoutes.get("/", (req, res) => {
  res.json(DataSolos);
});

SoloRoutes.get("/:ref", (req, res) => {
  const ref = req.params.ref;
  const found = DataSolos.find((solo) => solo.Ref == ref || solo.Nome == ref);
  if (found) {
    return res.json(found);
  }
  return res.json({ error: "Not Found" });
});
