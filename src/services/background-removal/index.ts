import { AxiosInstance } from 'axios'
import { IBackgroundRemovalResponse } from './background-removal-response.interface'

export class BackgroundRemoverService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Removes the background from an image by URL.
   * @param imageUrl - The URL of the image to remove the background from.
   * @returns
   */
  byUrl = async (imageUrl: string): Promise<IBackgroundRemovalResponse> => {
    const { data } = await this.axios.post(
      '/background-removal/remove-background-by-url',
      {
        imageUrl,
      }
    )

    return { imageUrl: data.image, creditsRemaining: data.creditsRemaining }
  }
}
