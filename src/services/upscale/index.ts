import { AxiosInstance } from 'axios'
import { ISingleImageGenerationResponse } from '../../interfaces/single-image-generation-response.interface'

export class UpscaleService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Upscales an image from a given URL to a specified scale.
   * @param imageUrl - The URL of the image to be upscaled.
   * @param scale - The scale factor for upscaling the image.
   * @returns
   */
  fromUrl = async (imageUrl: string, scale: number): Promise<ISingleImageGenerationResponse> => {
    const { data } = await this.axios.post('/upscale', {
      imageUrl,
      scale,
    })
    return data
  }

  /**
   * Upscales an image file to a specified scale.
   * @param imageFile - The image file to be upscaled.
   * @param scale - The scale factor for upscaling the image.
   * @returns
   */
  fromFile = async (imageFile: File, scale: number): Promise<ISingleImageGenerationResponse> => {
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
    return data
  }
}
