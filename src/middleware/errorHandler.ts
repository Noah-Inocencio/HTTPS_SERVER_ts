import { NextFunction, Request, Response } from "express";
import { respondWithJson } from "../lib/json.js";
import { HttpError, LengthError } from "../lib/errors.js";

export async function middlewareErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
   console.log(err);
   
   if (err instanceof HttpError) {
      respondWithJson(res, err.statusCode, {error: err.message});
   }
   else {respondWithJson(res, 500, {error: "Something went wrong on our end"});}
}
