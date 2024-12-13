import { AxiosInstance } from 'axios'
import { IImageMakerRequest } from './image-maker-request.interface'
import { IImageGenerationResponse } from '../../interfaces/image-generation-response.interface'
import { StorageService } from '../storage'

export class ImageMakerService {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly storageService: StorageService
  ) {}

  /**
   * Generates an image based on the provided text.
   * @param params - The parameters for the image generation.
   * @returns A Promise that resolves to the generated image.
   */
  run = async (
    params: IImageMakerRequest,
    referenceImageContentType?: string
  ): Promise<IImageGenerationResponse> => {
    // Handle reference image
    if (params.referenceImageFile) {
      if (!referenceImageContentType) {
        throw new Error('Reference image content type is required')
      }
      params.referenceImageUrl = await this.storageService.uploadBlob(
        params.referenceImageFile,
        referenceImageContentType
      )
      delete params.referenceImageFile
    }
    const { data } = await this.axios.post('/image-maker', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return data
  }
}
