import { StyleType } from './style.type'

export interface IStyle {
  description?: string
  id: string
  imageUrl: string
  name: string
  previewImageUrl: string
  type?: StyleType
  trainingStatus?: string
}
