import { AxiosInstance } from 'axios'
import { IStyle } from './style.interface'

export class StyleService {
  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Retrieves all styles based on the provided template ID and pinned status.
   * @param templateId - Optional. The ID of the template to filter styles by.
   * @param isPinned - Optional. A boolean indicating if only pinned styles should be retrieved.
   * @returns A Promise that resolves to an array of styles.
   */
  getAll = async (templateId?: string, isPinned?: boolean): Promise<IStyle[]> => {
    const { data } = await this.axios.get<IStyle[]>(
      `/styles${templateId ? `?templateId=${templateId}` : ''}${
        isPinned ? `&isPinned=${isPinned}` : ''
      }`
    )
    return data
  }
}
