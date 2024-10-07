import { IImageGenerationRequest } from '../../interfaces/image-generation-request.interface';
export interface ITextToImageRequest extends IImageGenerationRequest {
    freeText: string;
}
