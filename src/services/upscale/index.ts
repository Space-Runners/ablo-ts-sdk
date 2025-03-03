import { AxiosInstance } from 'axios'

export class UpscaleService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Upscales an image from a given URL to a specified scale.
   * @param imageUrl - The URL of the image to be upscaled.
   * @param scale - The scale factor for upscaling the image.
   * @returns
   */
  fromUrl = async (
    imageUrl: string,
    scale: number
  ): Promise<{ imageUrl: string }> => {
    const { data } = await this.axios.post('/upscale', {
      imageUrl,
      scale,
    })
    return { imageUrl: data.image }
  }
}
