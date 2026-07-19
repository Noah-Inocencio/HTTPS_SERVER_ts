export class LengthError extends Error {
   constructor(message: string) {
      super(message);
   }
}

// for 401
export class AuthError extends Error {
   constructor(message: string) {
      super(message);
   }
}

// for 403
export class NoClientAllowedError extends Error {
   constructor(message: string) {
      super(message);
   }
}

// for 404
export class NotFoundError extends Error {
   constructor(message: string) {
      super(message);
   }
}