import { Response, Request } from "express";
import { type, Type } from "arktype";

const CreateUserSchema = type({
   email: "string.email",
});

export function handleNewUser (req: Request, res: Response) {
   
}

function validateUser (schema: Type) {
   
}