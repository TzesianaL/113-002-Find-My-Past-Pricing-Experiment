import {
  SplashItem,
  CardItem,
  AddonData,
  Periods,
  BlockLayout,
  PCWSchema,
  PCWProductData,
  SpeedCardItem,
} from 'types'
import { Theme } from '../styled.d'

export interface StorePageOptions {
  introText?: string
  footerText?: string
  hidePrice?: boolean
  purchaseButtonText?: string
  showCancelButton?: boolean
  cancelButtonText?: string
  useAddOnLayout?: boolean
  showQuestions?: boolean
}

export interface AddonPageOptions {
  introText?: string
  footerText?: string
  addButtonText?: string
  removeButtonText?: string
  mutexBlockedButtonText?: string
}

export interface BasketPageOptions {
  introText?: string
  footerText?: string
  checkOutButtonText?: string
  emptyBasketButtonText?: string
  showCancelButton?: boolean
  cancelButtonText?: string
  pagePricePeriod?: Periods
}

interface ExperimentDataType {
  storeLogoSrc: string
  storeName: string
  splash: {
    title: string
    items: SplashItem[]
  }
  storeItems: CardItem[]
  speedItems: SpeedCardItem[]
  storeAddons: AddonData[]
  addonLayout: BlockLayout
  storePageOptions?: StorePageOptions
  basketPageOptions?: BasketPageOptions
  addonPageOptions?: AddonPageOptions
  pcwData: PCWProductData[]
  pcwSchema: PCWSchema[]
  theme: Theme
}

export type DataFileType = {
  conditions?: { [key: number]: ConditionType }
} & Partial<ExperimentDataType>

export type ConditionType = {
  conditionName: string
} & Partial<ExperimentDataType>

export type DataStateType = {
  dataLoaded: boolean
  condition: number
  conditionsData?: { [key: number]: ConditionType }
} & ExperimentDataType

export interface LogicStateType {
  basket: string[]
  price: number
  monthlyPrice: number
  duration: string
  itemOrder: number[]
  basketAddons: AddonData[]
  basketSpeedCardId: string[]
  sortedByHistory?: string[]
  pcwPickedProduct: string[]
  pcwMoreInfoClicked: { [key: string]: number }
  sortedByKey?: string
}
