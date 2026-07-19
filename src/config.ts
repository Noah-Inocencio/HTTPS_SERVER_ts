process.loadEnvFile();

type APIConfig = {
   fileserverHits: number;
   dbURL: string;
};

function envOrThrow(key: string): string {
   const value = process.env[key];
   if (!value) {
      throw new Error(`variable does not exist: ${key}`);
   }
   return value;
}

/* API config object that will count server hits */
export const config: APIConfig = {
   fileserverHits: 0,
   dbURL: envOrThrow("DB_URL"),
};
