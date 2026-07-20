import { Request, Response } from "express";
import { respondWithJson } from "./.json.js";
import { LengthError } from "./errors.js";

export async function validateChirp(req: Request, res: Response) {
   type responseData = {
      body: string;
   };

   type cleanedResponse = {
      cleanedBody: string;
   };

   const words: string[] = ["kerfuffle", "sharbert", "fornax"];
   const reqData: responseData = req.body;

   if (reqData.body.length > 140) {
      throw new LengthError("Chirp is too long. Max length is 140");
   }
   else {
      const cleanString: cleanedResponse = {
         cleanedBody: filterWords(reqData.body, words)
      };
      respondWithJson(res, 200, cleanString);
   }
}

function filterWords(str: string, wordsToFilter: string[]): string {
  const escaped = wordsToFilter.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  return str.replace(pattern, '****');
}