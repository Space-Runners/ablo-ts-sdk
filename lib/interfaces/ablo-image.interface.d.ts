import { IFontMakerRequest } from '../services/font-maker/font-maker-request.interface';
import { ITextToImageRequest } from '../services/image-maker/text-to-image-request.interface';
import { IImageFileToImageRequest } from '../services/photo-transformer/image-file-to-image-request.interface';
export interface IAbloImage {
    id: string;
    url: string;
    options?: ITextToImageRequest | IImageFileToImageRequest | IFontMakerRequest;
}
