import { Router } from "express";
import { SoloRoutes } from "./Solos";
import { SerieRoute } from "./Series";
import { FullRoute } from "./Full";
import { CharRoutes } from "./Char";

export const MainRouter = Router();
MainRouter.use("/Solos", SoloRoutes);
MainRouter.use("/Series", SerieRoute);
MainRouter.use("/Char", CharRoutes);
MainRouter.use("/", FullRoute);
