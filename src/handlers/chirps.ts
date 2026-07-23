import { Request, Response } from "express";
import { respondWithJson } from "../lib/json.js";
import { BadRequestError, LengthError } from "../lib/errors.js";
import { NewChirp } from "../db/schema.js";
import { insertChirp } from "../db/queries/chirps.js";
import { string } from "arktype/internal/keywords/string.ts";
import { type, Type } from "arktype";
import { arkPrototypes } from "arktype/internal/keywords/constructors.ts";

export async function chirps(req: Request, res: Response) {

   const words: string[] = ["kerfuffle", "sharbert", "fornax"];
   const reqData = req.body;

   type cleanedResponse = {
      "body": string;
      "userId": string;
   };

   if (reqData.body.length > 140) {
      throw new LengthError("Chirp is too long. Max length is 140");
   }

   if (!isValidChirp) {
      throw new BadRequestError("Invalid request shape.");
   }

   const cleanString: cleanedResponse = {
      "body": filterWords(reqData.body, words),
      "userId": reqData.userId,
   };

   const newChirp: NewChirp = await insertChirp(cleanString);
   
   if(!newChirp) {
      throw new Error("db query error");
   }
   respondWithJson(res, 201, newChirp);

}

function filterWords(str: string, wordsToFilter: string[]): string {
  const escaped = wordsToFilter.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  return str.replace(pattern, '****');
}

function isValidChirp(req: Request) {
   const CreateNewChirpSchema = type({
      body: "1 <= string <= 140", 
      userId: "string.uuid"});
   
   const out = CreateNewChirpSchema(req.body);
   if (out instanceof type.errors) {
      return false;
   }
   return true;
} 