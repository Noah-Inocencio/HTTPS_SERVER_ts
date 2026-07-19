export function respondWithJson(res, statusCode, payload) {
    res.header("Content-Type", "application/json");
    res.status(statusCode).send(JSON.stringify(payload));
}
