import { AxiosInstance } from 'axios'
import { ITextToImageRequest } from './text-to-image-request.interface'
import { IImageGenerationResponse } from '../../interfaces/image-generation-response.interface'

export class ImageMakerService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Generates an image based on the provided text.
   * @param params - The parameters for the image generation.
   * @returns A Promise that resolves to the generated image.
   */
  run = async (params: ITextToImageRequest): Promise<IImageGenerationResponse> => {
    const { data } = await this.axios.post('/image-maker', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return data
  }
}
