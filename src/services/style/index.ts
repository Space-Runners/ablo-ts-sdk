import { AxiosInstance } from 'axios'
import { IStyle } from './style.interface'
import { ICreateCustomStyleRequest } from './create-custom-style-request.interface'

export class StyleService {
  private static ENTITY = 'styles'
  private static CUSTOM = 'custom'

  constructor(private readonly axios: AxiosInstance) {}

  /**
   * Kicks off the process of creating a custom style.
   * @param params - The parameters for creating a custom style.
   * @returns A Promise that resolves to the created style.
   */
  createCustomStyle = async (params: ICreateCustomStyleRequest) => {
    const { data } = await this.axios.post(`/${StyleService.ENTITY}`, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return data
  }

  /**
   * Retrieves all custom styles.
   * @returns A Promise that resolves to an array of styles.
   */
  getCustomStyles = async () => {
    const { data } = await this.axios.get<IStyle[]>(
      `/${StyleService.ENTITY}/${StyleService.CUSTOM}`
    )
    return data
  }

  /**
   * Retrieves all styles based on the provided template ID and pinned status.
   * @param templateId - Optional. The ID of the template to filter styles by.
   * @param isPinned - Optional. A boolean indicating if only pinned styles should be retrieved.
   * @returns A Promise that resolves to an array of styles.
   */
  getAll = async (templateId?: string, isPinned?: boolean): Promise<IStyle[]> => {
    const { data } = await this.axios.get<IStyle[]>(
      `/${StyleService.ENTITY}${templateId ? `?templateId=${templateId}` : ''}${
        isPinned ? `&isPinned=${isPinned}` : ''
      }`
    )
    return data
  }
}
