import express from "express";
import { handlerReadiness } from './api/readiness.js';
import { middlewareErrorHandler, middlewareLogResponses, middlewareMetricsInc } from './api/middleware.js';
import { handlerMetric } from "./api/metrics.js";
import { resetCounter } from "./api/reset.js";
import { validateChirp } from "./api/validate_chirp.js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "./config.js"
import { handleNewUser } from "./api/users/user.js";

const migrationClient = postgres(config.dbURL, { max: 1 });
await migrate(drizzle(migrationClient), config.migrationConfig);

const app = express();
const PORT = 8080;

app.use('/app/' , middlewareMetricsInc);
app.use("/app/", express.static("./src/app"));
app.use(middlewareLogResponses);
app.use(express.json());
app.get("/api/healthz", handlerReadiness);
app.get("/admin/metrics", handlerMetric);
app.post("/admin/reset", resetCounter);
app.post("/api/validate_chirp", validateChirp);
app.post("/api/users/", handleNewUser);
app.use(middlewareErrorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
