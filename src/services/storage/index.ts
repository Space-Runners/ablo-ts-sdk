import { AxiosInstance } from 'axios'

export class StorageService {
  constructor(private readonly axios: AxiosInstance) {}

  uploadBase64 = async (image: string, contentType: string): Promise<string> => {
    const url = await this.getSignedUrl(contentType)
    const blob = await fetch(image).then((res) => res.blob())
    return this.upload(url, blob as unknown as string, contentType)
  }

  uploadBlob = async (image: File | ArrayBuffer | string, contentType: string): Promise<string> => {
    const url = await this.getSignedUrl(contentType)

    return this.upload(url, image, contentType)
  }

  getSignedUrl = async (contentType: string): Promise<string> => {
    const { data } = await this.axios.post('/storage/upload', { contentType })
    return data.url
  }

  upload = async (
    url: string,
    image: File | ArrayBuffer | string,
    contentType: string
  ): Promise<string> => {
    await this.axios.put(url, image, {
      headers: { 'Content-Type': contentType },
    })
    return url.split('?')[0]
  }
}
