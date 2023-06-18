import { Router } from "express";
import { SoloRoutes } from "./Solos";
import { SerieRoute } from "./Series";
import { FullRoute } from "./Full";

export const MainRouter = Router();
MainRouter.use("/Solos", SoloRoutes);
MainRouter.use("/Series", SerieRoute);
MainRouter.use("/", FullRoute);
