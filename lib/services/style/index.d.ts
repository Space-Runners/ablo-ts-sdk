import { AxiosInstance } from 'axios';
import { IStyle } from './style.interface';
export declare class StyleService {
    private readonly axios;
    constructor(axios: AxiosInstance);
    /**
     * Retrieves all styles based on the provided template ID and pinned status.
     * @param templateId - Optional. The ID of the template to filter styles by.
     * @param isPinned - Optional. A boolean indicating if only pinned styles should be retrieved.
     * @returns A Promise that resolves to an array of styles.
     */
    getAll: (templateId?: string, isPinned?: boolean) => Promise<IStyle[]>;
}
