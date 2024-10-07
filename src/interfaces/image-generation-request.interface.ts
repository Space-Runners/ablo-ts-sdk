export interface IImageGenerationRequest {
  style?: string;
  styleId: string;
  referenceImageFile?: File | string | ArrayBuffer;
  referenceImageUrl?: string;
  ipAdapterScale?: number;
  samples?: number;
  shouldBypassCache?: boolean;
}
