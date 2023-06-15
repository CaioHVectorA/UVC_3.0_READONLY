import { Router } from "express";
import { SoloRoutes } from "./Solos";
import { SerieRoute } from "./Series";

export const MainRouter = Router();
MainRouter.use("/Solos", SoloRoutes);
MainRouter.use("/Series", SerieRoute);
