import { IAbloOptions } from './interfaces/ablo-options.interface';
import { StorageService } from './services/storage';
import { FontMakerService } from './services/font-maker';
import { ImageMakerService } from './services/image-maker';
import { PhotoTransformerService } from './services/photo-transformer';
import { UpscaleService } from './services/upscale';
import { BackgroundRemoverService } from './services/background-removal';
import { StyleService } from './services/style';
import { LedgerService } from './services/ledger';
export declare class Ablo {
    private axios;
    readonly storage: StorageService;
    readonly photoTransformer: PhotoTransformerService;
    readonly imageMaker: ImageMakerService;
    readonly fontMaker: FontMakerService;
    readonly upscale: UpscaleService;
    readonly removeBackground: BackgroundRemoverService;
    readonly style: StyleService;
    readonly ledger: LedgerService;
    constructor(apiKey: string, options?: IAbloOptions);
}
