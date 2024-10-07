import { AxiosInstance } from 'axios';
import { StorageService } from '../storage';
import { IImageUrlToImageRequest } from './image-url-to-image-request.interface';
import { IImageFileToImageRequest } from './image-file-to-image-request.interface';
import { IImageGenerationResponse } from '../../interfaces/image-generation-response.interface';
export declare class PhotoTransformerService {
    private readonly axios;
    private readonly storageService;
    constructor(axios: AxiosInstance, storageService: StorageService);
    /**
     * Transforms an image file to an image.
     * @param params - The parameters for the image transformation.
     * @param contentType - The content type of the image.
     * @param referenceImageContentType - The content type of the reference image.
     * @returns A Promise that resolves to the transformed image.
     */
    fromFile: (params: IImageFileToImageRequest, contentType: string, referenceImageContentType?: string) => Promise<IImageGenerationResponse>;
    /**
     * Transforms an image from a URL to an image.
     * @param params - The parameters for the image transformation.
     * @returns A Promise that resolves to the transformed image.
     */
    fromUrl: (params: IImageUrlToImageRequest) => Promise<IImageGenerationResponse>;
}
