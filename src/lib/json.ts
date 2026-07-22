import { Response } from "express";

export function respondWithJson(res: Response, statusCode: number, payload: object) {
   res.header("Content-Type", "application/json");
   res.status(statusCode).send(JSON.stringify(payload));
}