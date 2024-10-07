import { IAbloOptions } from './interfaces/ablo-options.interface';
import { StorageService } from './services/storage';
import { FontMakerService } from './services/font-maker';
import { ImageMakerService } from './services/image-maker';
import { PhotoTransformerService } from './services/photo-transformer';
import { UpscaleService } from './services/upscale';
import { BackgroundRemoverService } from './services/background-removal';
import { StyleService } from './services/style';
export declare class Ablo {
    private axios;
    readonly storage: StorageService;
    readonly photoTransformer: PhotoTransformerService;
    readonly imageMaker: ImageMakerService;
    readonly fontMaker: FontMakerService;
    readonly upscale: UpscaleService;
    readonly removeBackground: BackgroundRemoverService;
    readonly style: StyleService;
    constructor(apiKey: string, options?: IAbloOptions);
}
