import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import { createApp } from "./app.js";
import { config } from "./config.js";

const migrationClient = postgres(config.dbURL, { max: 1 });
await migrate(drizzle(migrationClient), config.migrationConfig);
await migrationClient.end();

const PORT = 8080;

createApp().listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
