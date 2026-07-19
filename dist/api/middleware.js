import { config } from '../config.js';
import { respondWithJson } from "./.json.js";
import { LengthError } from "./errors.js";
export function middlewareLogResponses(req, res, next) {
    res.on("finish", () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
            console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }
    });
    next();
}
export function middlewareMetricsInc(req, res, next) {
    config.fileserverHits++;
    next();
}
export async function middlewareErrorHandler(err, req, res, next) {
    console.log(err);
    if (err instanceof LengthError) {
        respondWithJson(res, 400, { error: err.message });
    }
    else {
        respondWithJson(res, 500, { error: "Something went wrong on our end" });
    }
}
