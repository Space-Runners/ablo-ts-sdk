"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ablo = void 0;
const axios_1 = require("axios");
class Ablo {
    constructor(apiKey, options = {}) {
        this.axiosInstance = axios_1.default.create({
            baseURL: options.baseUrl || 'https://api.ablo.com',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
            },
        });
    }
}
exports.Ablo = Ablo;
