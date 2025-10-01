import { AxiosHeaders, AxiosInstance } from "axios";

export class StorageService {
  private static readonly CDN_MAP: Record<string, string> = {
    "ablo-images-staging": "https://ablo-staging.b-cdn.net",
    "ablo-images-production": "https://ablo-production.b-cdn.net",
  };

  constructor(private readonly axios: AxiosInstance) { }

  /**
   * Uploads an image from a base64 string to the storage service.
   * @param image - The base64 encoded image.
   * @param contentType - The content type of the image.
   * @param options - Optional parameters for the upload, such as cache control.
   * @returns A Promise that resolves to the URL of the uploaded image.
   */
  uploadBase64 = async (image: string, contentType: string, options?: { cacheControl?: string }): Promise<string> => {
    const url = await this.getSignedUrl(contentType);
    const blob = await fetch(image).then((res) => res.blob());
    return this.upload(url, blob as unknown as string, contentType, options);
  };

  /**
   * Uploads an image to the storage service.
   * @param image - The image to be uploaded.
   * @param contentType - The content type of the image.
   * @param options - Optional parameters for the upload, such as cache control.
   * @returns A Promise that resolves to the URL of the uploaded image.
   */
  uploadBlob = async (image: File | ArrayBuffer | string, contentType: string, options?: { cacheControl?: string }): Promise<string> => {
    const url = await this.getSignedUrl(contentType);

    return this.upload(url, image, contentType, options);
  };

  /**
   * Retrieves a signed URL for uploading an image to the storage service.
   * @param contentType - The content type of the image.
   * @returns A Promise that resolves to the signed URL.
   */
  getSignedUrl = async (contentType: string): Promise<string> => {
    const { data } = await this.axios.post("/storage/upload", { contentType });
    return data.url;
  };

  /**
   * Uploads an image to the storage service.
   * @param url - The URL to upload the image to.
   * @param image - The image to be uploaded.
   * @param contentType - The content type of the image.
   * @param options - Optional parameters for the upload, such as cache control.
   * @returns A Promise that resolves to the URL of the uploaded image.
   */
  upload = async (url: string, image: File | ArrayBuffer | string, contentType: string, options?: { cacheControl?: string }): Promise<string> => {
    const headers = new AxiosHeaders();
    headers.append("Content-Type", contentType);
    if (options?.cacheControl) {
      headers.append("Cache-Control", options.cacheControl);
    }

    await this.axios.put(url, image, { headers: headers });

    
    const imageUrl = url.split("?")[0];

    const parsedUrl = new URL(imageUrl);
    const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
    const bucketName = pathSegments[0];

    const cdnBaseUrl = StorageService.CDN_MAP[bucketName];
    if (!cdnBaseUrl) {
      return imageUrl;
    }
    const cdnUrl = imageUrl.replace("https://storage.googleapis.com/" + bucketName, cdnBaseUrl);
    return cdnUrl;
  };
}
