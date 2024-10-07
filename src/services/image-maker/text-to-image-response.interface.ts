import { IAbloImage } from '../../interfaces/ablo-image.interface'

export interface IImageGenerationResponse {
  images: IAbloImage[]
  riskScore?: number
}
