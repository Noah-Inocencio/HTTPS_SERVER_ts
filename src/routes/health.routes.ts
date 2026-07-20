import { Router } from "express";
import { handlerReadiness } from "../handlers/health.js";

export const healthRouter = Router();

healthRouter.get("/healthz", handlerReadiness);
