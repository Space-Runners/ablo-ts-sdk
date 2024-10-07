import { IAbloOptions } from './ablo-options.interface'
import axios, { AxiosInstance } from 'axios'

export class Ablo {
  private axiosInstance: AxiosInstance

  constructor(apiKey: string, options: IAbloOptions = {}) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl || 'https://api.ablo.com',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    })
  }
}
