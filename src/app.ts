import express from "express";
import { apiRouter } from "./routes/index.js";
import { middlewareLogResponses } from "./middleware/logResponses.js";
import { middlewareMetricsInc } from "./middleware/metrics.js";
import { middlewareErrorHandler } from "./middleware/errorHandler.js";

/* Builds the Express app without starting it, so tests can import it directly. */
export function createApp() {
  const app = express();

  app.use("/app/", middlewareMetricsInc);
  app.use("/app/", express.static("public"));
  app.use(middlewareLogResponses);
  app.use(express.json());

  app.use(apiRouter);

  app.use(middlewareErrorHandler);
  return app;
}
