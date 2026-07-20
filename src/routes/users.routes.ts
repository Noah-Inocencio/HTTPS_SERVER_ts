import { Router } from "express";
import { handleNewUser } from "../handlers/users.js";

export const usersRouter = Router();

usersRouter.post("/users", handleNewUser);
