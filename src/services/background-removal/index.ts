import axios, { AxiosInstance } from 'axios'

export class BackgroundRemoverService {
  constructor(private readonly axios: AxiosInstance) {}

  byUrl = async (imageUrl: string): Promise<string> => {
    const { data } = await this.axios.post('/background-removal/remove-background-by-url', {
      imageUrl,
    })

    return data.image
  }

  byFile = async (imageFile: string): Promise<string> => {
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

    return data.image
  }
}
