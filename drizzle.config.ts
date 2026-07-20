import { defineConfig } from "drizzle-kit";
import { MigrationConfig } from "drizzle-orm/migrator"

export default defineConfig({
  schema: "src/db/schema.ts",
  out: "src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "psql://ninocencio:@localhost:5432/chirpy?sslmode=disable",
  },
});

export const migrationConfig: MigrationConfig = {
   migrationsFolder: "./src/db/migrations",
};