import axios, { AxiosInstance } from 'axios'
import { ITextToImageRequest } from './text-to-image-request.interface'
import { IImageGenerationResponse } from './text-to-image-response.interface'

export class ImageMakerService {
  constructor(private readonly axios: AxiosInstance) {}

  run = async (params: ITextToImageRequest): Promise<IImageGenerationResponse> => {
    const { data } = await this.axios.post('/image-maker', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return data
  }
}
