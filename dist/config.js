process.loadEnvFile();
export const migrationConfig = {
    migrationsFolder: "./src/db/migrations",
};
function envOrThrow(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`variable does not exist: ${key}`);
    }
    return value;
}
/* API config object that will count server hits */
export const config = {
    fileserverHits: 0,
    dbURL: envOrThrow("DB_URL"),
    migrationConfig: migrationConfig,
};
