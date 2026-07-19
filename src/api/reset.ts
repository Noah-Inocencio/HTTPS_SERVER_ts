import { config } from '../config.js'
import { Request, Response } from "express"

export function resetCounter(_: Request, res: Response) {
   config.fileserverHits = 0;
   res.set("Content-Type", "text/plain; charset=utf-8");
   res.send("Reset counter");
}