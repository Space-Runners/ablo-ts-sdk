import { AxiosInstance } from 'axios'

export class UpscaleService {
  constructor(private readonly axios: AxiosInstance) {}

  fromUrl = async (imageUrl: string, scale: number): Promise<string> => {
    const { data } = await this.axios.post('/upscale', {
      imageUrl,
      scale,
    })
    return data.image
  }

  fromFile = async (imageFile: File, scale: number): Promise<string> => {
    const { data } = await this.axios.post(
      '/upscale/file',
      {
        image: imageFile,
        scale,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return data.image
  }
}
