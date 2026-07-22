import { Response, Request } from "express";
import { type, Type } from "arktype";
import { respondWithJson } from "../lib/json.js";
import { createUser } from "../db/queries/users.js";

export const CreateUserSchema = type({email: "string.email"});
export type CreateUserRequest = typeof CreateUserSchema.infer;

export async function handleNewUser (req: Request, res: Response) {
   if (!isValidEmailRequest(req)) {
      return(respondWithJson(res, 400, {error: "invalid email"}));
   }
   const newUser = await createUser(req.body);
   if (!newUser) {
      respondWithJson(res, 400, {error: "User Exists"});
   }
   respondWithJson(res, 201, newUser);
}

function isValidEmailRequest(req: Request): boolean {
   const out = CreateUserSchema(req.body);
   if (out instanceof type.errors) {
      return false;
   }
   return true;
}