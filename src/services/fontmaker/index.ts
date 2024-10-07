import axios, { AxiosInstance } from 'axios'
import { IFontmakerRequest } from './fontmaker-request.interface'
import { IImageGenerationResponse } from '../image-maker/text-to-image-response.interface'

export class FontMakerService {
  constructor(private readonly axios: AxiosInstance) {}

  generateImageFromFont = async (params: IFontmakerRequest): Promise<IImageGenerationResponse> => {
    const { data } = await this.axios.post('/fontmaker', params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return data
  }
}
