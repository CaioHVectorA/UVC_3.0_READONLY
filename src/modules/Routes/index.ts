import { Router } from "express";
import { SoloRoutes } from "./Solos";

export const MainRouter = Router();
MainRouter.use("/Solos", SoloRoutes);
