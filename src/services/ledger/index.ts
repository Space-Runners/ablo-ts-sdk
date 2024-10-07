import { AxiosInstance } from 'axios'
import { ILedgerPeriod } from './ledger-period.interface'

export class LedgerService {
  private static readonly ENTITY = `ledger`
  private static readonly CREDITS_USAGE_THIS_MONTH = 'credits-usage-this-month'
  private static readonly CREDITS_USAGE_BY_MONTH = 'credits-usage-by-month'

  constructor(private readonly axios: AxiosInstance) {}

  async getCreditsUsageByMonth(): Promise<ILedgerPeriod[]> {
    const { data } = await this.axios.get<ILedgerPeriod[]>(
      `/${LedgerService.ENTITY}/${LedgerService.CREDITS_USAGE_BY_MONTH}`
    )
    return data
  }

  async getCreditsUsageThisMonth(): Promise<ILedgerPeriod> {
    const { data } = await this.axios.get<ILedgerPeriod>(
      `/${LedgerService.ENTITY}/${LedgerService.CREDITS_USAGE_THIS_MONTH}`
    )
    return data
  }
}
