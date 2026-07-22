import { Router } from "express";
import { handlerMetric, resetCounter, resetUserTable } from "../handlers/admin.js";

export const adminRouter = Router();

adminRouter.get("/metrics", handlerMetric);
adminRouter.post("/reset", resetCounter, resetUserTable);
