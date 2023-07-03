import { MainRouter } from "./modules/Routes";
import express from "express";
const app = express();

app.use(MainRouter);

app.listen(3009, () => console.log("RUNNING"));