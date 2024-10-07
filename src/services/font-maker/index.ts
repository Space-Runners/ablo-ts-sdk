import { AxiosInstance } from 'axios'
import { IFontMakerRequest } from './font-maker-request.interface'
import { IImageGenerationResponse } from '../../interfaces/image-generation-response.interface'

export class FontMakerService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Generates a FontMaker image based on the provided request.
   * @param params - The parameters for the image generation.
   * @returns A Promise that resolves to the generated Fontmaker image.
   */
  run = async (params: IFontMakerRequest): Promise<IImageGenerationResponse> => {
    const { data } = await this.axios.post('/fontmaker', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return data
  }
}
