import { Router } from "express";
import { healthRouter } from "./health.routes.js";
import { adminRouter } from "./admin.routes.js";
import { chirpsRouter } from "./chirps.routes.js";
import { usersRouter } from "./users.routes.js";

/* The whole API surface, in one place. */
export const apiRouter = Router();

apiRouter.use("/api", healthRouter);
apiRouter.use("/api", chirpsRouter);
apiRouter.use("/api/", usersRouter);
apiRouter.use("/admin", adminRouter);
