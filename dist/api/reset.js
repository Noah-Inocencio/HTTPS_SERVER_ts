import { config } from '../config.js';
export function resetCounter(_, res) {
    config.fileserverHits = 0;
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send("Reset counter");
}
