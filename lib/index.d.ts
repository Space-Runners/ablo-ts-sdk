import { IAbloOptions } from './interfaces/ablo-options.interface';
import { StorageService } from './services/storage';
import { FontMakerService } from './services/fontmaker';
import { ImageMakerService } from './services/image-maker';
import { PhotoTransformerService } from './services/photo-transformer';
import { UpscaleService } from './services/upscale';
import { BackgroundRemoverService } from './services/background-removal';
export declare class Ablo {
    private axios;
    readonly storage: StorageService;
    readonly photoTransformer: PhotoTransformerService;
    readonly imageMaker: ImageMakerService;
    readonly fontMaker: FontMakerService;
    readonly upscale: UpscaleService;
    readonly removeBackground: BackgroundRemoverService;
    constructor(apiKey: string, options?: IAbloOptions);
}
