import { IImageGenerationRequest } from '../../interfaces/image-generation-request.interface';
export interface IFontmakerRequest extends IImageGenerationRequest {
    text: string;
}
