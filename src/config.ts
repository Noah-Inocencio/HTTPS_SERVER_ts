import type { MigrationConfig } from "drizzle-orm/migrator"

process.loadEnvFile();

export const migrationConfig: MigrationConfig = {
   migrationsFolder: "./src/db/migrations",
};

type APIConfig = {
   fileserverHits: number;
};

type DBConfig = {
   dbURL: string;
   migrationConfig: MigrationConfig;
}

function envOrThrow(key: string): string {
   const value = process.env[key];
   if (!value) {
      throw new Error(`variable does not exist: ${key}`);
   }
   return value;
}

/* API config object that will count server hits */
export const config: APIConfig & DBConfig = {
   fileserverHits: 0,
   dbURL: envOrThrow("DB_URL"),
   migrationConfig: migrationConfig,
};
