import { AxiosInstance } from 'axios'

export class UpscaleService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Upscales an image from a given URL to a specified scale.
   * @param imageUrl - The URL of the image to be upscaled.
   * @param scale - The scale factor for upscaling the image.
   * @returns A Promise that resolves to the URL of the upscaled image.
   */
  fromUrl = async (imageUrl: string, scale: number): Promise<string> => {
    const { data } = await this.axios.post('/upscale', {
      imageUrl,
      scale,
    })
    return data.image
  }

  /**
   * Upscales an image file to a specified scale.
   * @param imageFile - The image file to be upscaled.
   * @param scale - The scale factor for upscaling the image.
   * @returns A Promise that resolves to the URL of the upscaled image.
   */
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
