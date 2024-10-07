import { AxiosInstance } from 'axios'
import { IStyle } from './style.interface'

export class StyleService {
  constructor(private readonly axios: AxiosInstance) {}

  getAll = async (templateId?: string, isPinned?: boolean) => {
    const { data } = await this.axios.get<IStyle[]>(
      `/styles${templateId ? `?templateId=${templateId}` : ''}${
        isPinned ? `&isPinned=${isPinned}` : ''
      }`
    )
    return data
  }
}
