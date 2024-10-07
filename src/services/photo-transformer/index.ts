import { AxiosInstance } from 'axios'
import { StorageService } from '../storage'
import { IImageUrlToImageRequest } from './image-url-to-image-request.interface'
import { IImageFileToImageRequest } from './image-file-to-image-request.interface'
import { IImageGenerationResponse } from '../image-maker/text-to-image-response.interface'

export class PhotoTransformerService {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly storageService: StorageService
  ) {}

  photoTransformerFile = async (
    params: IImageFileToImageRequest,
    contentType: string,
    referenceImageContentType?: string
  ): Promise<IImageGenerationResponse> => {
    // First get signed upload url
    const {
      data: { url: uploadUrl },
    } = await this.axios.post('/storage/upload', { contentType })

    // Upload image to signed url
    await this.axios.put(uploadUrl, params.imageFile, {
      headers: { 'Content-Type': contentType },
    })

    delete params.imageFile

    // Handle reference image
    let referenceImageUrl
    if (params.referenceImageFile) {
      if (!referenceImageContentType) {
        throw new Error('Reference image content type is required')
      }

      referenceImageUrl = await this.storageService.uploadBlobToStorage(
        params.referenceImageFile,
        referenceImageContentType
      )
      delete params.referenceImageFile
    }

    // Run photo transformer
    const response = await this.photoTransformerUrl({
      ...params,
      imageUrl: uploadUrl.split('?')[0],
      referenceImageUrl,
    })

    return response
  }

  photoTransformerUrl = async (
    params: IImageUrlToImageRequest
  ): Promise<IImageGenerationResponse> => {
    const { data } = await this.axios.post('/photo-transformer', params)

    return data
  }
}
