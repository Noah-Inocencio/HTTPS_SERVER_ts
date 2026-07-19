import { respondWithJson } from "./.json.js";
import { LengthError } from "./errors.js";
export async function validateChirp(req, res) {
    const words = ["kerfuffle", "sharbert", "fornax"];
    const reqData = req.body;
    if (reqData.body.length > 140) {
        throw new LengthError("Chirp is too long. Max length is 140");
    }
    else {
        const cleanString = {
            cleanedBody: filterWords(reqData.body, words)
        };
        respondWithJson(res, 200, cleanString);
    }
}
function filterWords(str, wordsToFilter) {
    const escaped = wordsToFilter.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
    return str.replace(pattern, '****');
}
