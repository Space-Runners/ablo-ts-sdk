"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontMakerService = void 0;
class FontMakerService {
    constructor(axios) {
        this.axios = axios;
        /**
         * Generates a FontMaker image based on the provided request.
         * @param params - The parameters for the image generation.
         * @returns A Promise that resolves to the generated Fontmaker image.
         */
        this.run = (params) => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.axios.post('/fontmaker', params, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        });
    }
}
exports.FontMakerService = FontMakerService;