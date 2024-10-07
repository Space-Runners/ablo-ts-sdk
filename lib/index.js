"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ablo = void 0;
const axios_1 = require("axios");
const storage_1 = require("./services/storage");
const fontmaker_1 = require("./services/fontmaker");
const image_maker_1 = require("./services/image-maker");
const photo_transformer_1 = require("./services/photo-transformer");
const upscale_1 = require("./services/upscale");
const background_removal_1 = require("./services/background-removal");
class Ablo {
    constructor(apiKey, options = {}) {
        this.axios = axios_1.default.create({
            baseURL: options.baseUrl || 'https://api.ablo.com',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
            },
        });
        this.storage = new storage_1.StorageService(this.axios);
        this.photoTransformer = new photo_transformer_1.PhotoTransformerService(this.axios, this.storage);
        this.imageMaker = new image_maker_1.ImageMakerService(this.axios);
        this.fontMaker = new fontmaker_1.FontMakerService(this.axios);
        this.upscale = new upscale_1.UpscaleService(this.axios);
        this.removeBackground = new background_removal_1.BackgroundRemoverService(this.axios);
    }
}
exports.Ablo = Ablo;
