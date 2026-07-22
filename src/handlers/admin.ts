import { NextFunction, Request, Response } from "express";
import { config } from "../config.js";
import { deleteAllUsers } from "../db/queries/users.js";

export function handlerMetric(_: Request, res: Response) {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send(`<html>
    <body>
      <h1>Welcome, Chirpy Admin</h1>
      <p>Chirpy has been visited ${config.fileserverHits} times!</p>
    </body>
  </html>`);
}

export function resetCounter(_: Request, res: Response, next: NextFunction) {
  config.fileserverHits = 0;
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.send("Reset counter");
  next();
}

export async function resetUserTable(_: Request, res: Response, next: NextFunction) {
  if (config.platform != "dev" ) { return; }
  await deleteAllUsers();
  next();
}