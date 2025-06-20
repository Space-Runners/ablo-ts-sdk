import { AxiosInstance } from 'axios'

export class StorageService {
  constructor(private readonly axios: AxiosInstance) { }

  /**
   * Uploads an image from a base64 string to the storage service.
   * @param image - The base64 encoded image.
   * @param contentType - The content type of the image.
   * @param options - Optional parameters for the upload, such as cache control.
   * @returns A Promise that resolves to the URL of the uploaded image.
   */
  uploadBase64 = async (image: string, contentType: string, options?: { cacheControl?: string }): Promise<string> => {
    const url = await this.getSignedUrl(contentType)
    const blob = await fetch(image).then((res) => res.blob())
    return this.upload(url, blob as unknown as string, contentType, options)
  }

  /**
   * Uploads an image to the storage service.
   * @param image - The image to be uploaded.
   * @param contentType - The content type of the image.
   * @param options - Optional parameters for the upload, such as cache control.
   * @returns A Promise that resolves to the URL of the uploaded image.
   */
  uploadBlob = async (image: File | ArrayBuffer | string, contentType: string, options?: { cacheControl?: string }): Promise<string> => {
    const url = await this.getSignedUrl(contentType)

    return this.upload(url, image, contentType, options)
  }

  /**
   * Retrieves a signed URL for uploading an image to the storage service.
   * @param contentType - The content type of the image.
   * @returns A Promise that resolves to the signed URL.
   */
  getSignedUrl = async (contentType: string): Promise<string> => {
    const { data } = await this.axios.post('/storage/upload', { contentType })
    return data.url
  }

  /**
   * Uploads an image to the storage service.
   * @param url - The URL to upload the image to.
   * @param image - The image to be uploaded.
   * @param contentType - The content type of the image.
   * @param options - Optional parameters for the upload, such as cache control.
   * @returns A Promise that resolves to the URL of the uploaded image.
   */
  upload = async (
    url: string,
    image: File | ArrayBuffer | string,
    contentType: string,
    options?: { cacheControl?: string }
  ): Promise<string> => {
    const headers: Record<string, string> = {}
    headers['Content-Type'] = contentType
    if (options?.cacheControl) {
      headers['Cache-Control'] = options.cacheControl
    }

    await this.axios.put(url, image, { headers: headers })
    return url.split('?')[0]
  }
}
