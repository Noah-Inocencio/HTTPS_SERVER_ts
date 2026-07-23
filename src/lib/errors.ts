export class HttpError extends Error {
   statusCode: number;
   constructor(statusCode: number, message: string) {
      super(message);
      this.statusCode = statusCode;
   }
}

export class BadRequestError extends HttpError {        // 400
   constructor(message: string) { super(400, message); }
}
export class AuthError extends HttpError {              // 401
   constructor(message: string) { super(401, message); }
}
export class NoClientAllowedError extends HttpError {   // 403
   constructor(message: string) { super(403, message); }
}
export class NotFoundError extends HttpError {          // 404
   constructor(message: string) { super(404, message); }
}
export class LengthError extends HttpError {            // 400
   constructor(message: string) { super(400, message); }
}
