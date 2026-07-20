import { Router } from "express";
import { validateChirp } from "../handlers/chirps.js";

export const chirpsRouter = Router();

chirpsRouter.post("/validate_chirp", validateChirp);
