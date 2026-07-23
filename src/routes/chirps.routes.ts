import { Router } from "express";
import { chirps } from "../handlers/chirps.js";

export const chirpsRouter = Router();

chirpsRouter.post("/chirps", chirps);
