import { AxiosInstance } from 'axios'
import { IImageGenerationResponse } from '../../interfaces/image-generation-response.interface'
import { IInpaintingRequest } from './inpainting-request.interface'

export class InpaintingService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Edits/inpaints the image based on the mask and provided prompt.
   * @param params - The parameters for the image generation.
   * @returns A Promise that resolves to the generated images.
   */
  run = async (
    params: IInpaintingRequest
  ): Promise<IImageGenerationResponse> => {
    const { data } = await this.axios.post('/inpaint', params)
    return data
  }
}
