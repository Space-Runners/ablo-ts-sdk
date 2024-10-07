import { AxiosInstance } from 'axios';
import { IFontmakerRequest } from './fontmaker-request.interface';
import { IImageGenerationResponse } from '../../interfaces/image-generation-response.interface';
export declare class FontMakerService {
    private readonly axios;
    constructor(axios: AxiosInstance);
    /**
     * Generates a FontMaker image based on the provided request.
     * @param params - The parameters for the image generation.
     * @returns A Promise that resolves to the generated Fontmaker image.
     */
    run: (params: IFontmakerRequest) => Promise<IImageGenerationResponse>;
}
