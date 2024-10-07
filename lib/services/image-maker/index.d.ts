import { AxiosInstance } from 'axios';
import { ITextToImageRequest } from './text-to-image-request.interface';
import { IImageGenerationResponse } from '../../interfaces/image-generation-response.interface';
export declare class ImageMakerService {
    private readonly axios;
    constructor(axios: AxiosInstance);
    /**
     * Generates an image based on the provided text.
     * @param params - The parameters for the image generation.
     * @returns A Promise that resolves to the generated image.
     */
    run: (params: ITextToImageRequest) => Promise<IImageGenerationResponse>;
}
