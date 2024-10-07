import { AxiosInstance } from 'axios'
import { ISingleImageGenerationResponse } from '../../interfaces/single-image-generation-response.interface'

export class BackgroundRemoverService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Removes the background from an image by URL.
   * @param imageUrl - The URL of the image to remove the background from.
   * @returns
   */
  byUrl = async (imageUrl: string): Promise<ISingleImageGenerationResponse> => {
    const { data } = await this.axios.post('/background-removal/remove-background-by-url', {
      imageUrl,
    })

    return data
  }

  /**
   * Removes the background from an image file.
   * @param imageFile - The image file to remove the background from.
   * @returns
   */
  byFile = async (imageFile: string): Promise<ISingleImageGenerationResponse> => {
    const { data } = await this.axios.post(
      '/background-removal/remove-background-by-image',
      {
        imageFile,
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
