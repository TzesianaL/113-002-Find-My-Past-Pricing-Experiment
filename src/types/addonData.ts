import { Periods } from './periods'

export interface AddonData {
  id: string
  title: string
  subtitle?: string
  features?: string[]
  price?: number
  pricePeriod?: Periods
  includedProductIDs?: string[]
  excludedProductIDs?: string[]
  mutex?: boolean
  group?: number
  mutexGroup4?: boolean
  mutexGroup2?: boolean
}
