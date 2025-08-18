import { Periods } from './periods'

interface BasketCardOptions {
  prePriceText?: string
  postPriceText?: string
}

export type ContractDuration = '24 months' | '30 days'

// Type guard function for runtime validation of ContractDuration
export const isContractDuration = (
  value: string
): value is ContractDuration => {
  return value === '24 months' || value === '30 days'
}

export interface CardItem {
  id: string
  title: string
  subtitle: string
  subtitle2?: string
  price: number
  currency?: string
  priceString?: string
  features: string[]
  cardColor?: string
  highlightedText?: string
  headerImage?: string
  upfrontPrice?: number
  basketOptions?: BasketCardOptions
  pricePeriod?: Periods
  contractDuration?: ContractDuration
  parentSpeedId?: string
}

export interface SpeedCardItem {
  title: string
  subtitle: string
  price: number
  currency?: string
  highlightedText?: string
  id: string
  pricePeriod?: Periods
  purchaseButtonText?: string
  mainSpeed: string
  downloadSpeed: string
  downloadExample: string
  downloadTime: string
  uploadSpeed: string
  uploadExample: string
  uploadTime: string
  speed?: number
}
