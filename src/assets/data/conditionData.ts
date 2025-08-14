import { ConditionType } from 'types/reduxData'
import { baseSplashScreen } from './splashscreenData'
import { baseStoreItems } from './cardItems'
import {
  baseAddonPageOptions,
  baseBasketPageOptions,
  baseStorePageOptions,
} from './pageOptions'
import { baseAddonData } from './addons'
import { speedItemsBaseline } from './speedItems'
import { cardAddonLayout } from 'StandardLayouts/AddonLayouts'

export const conditionData: { [key: number]: ConditionType } = {
  1: {
    conditionName: 'Scenario 1 (Baseline)',
    storePageOptions: baseStorePageOptions,
    splash: baseSplashScreen,
    storeItems: baseStoreItems,
    speedItems: speedItemsBaseline,
    addonPageOptions: baseAddonPageOptions,
    basketPageOptions: baseBasketPageOptions,
    storeAddons: baseAddonData,
    addonLayout: cardAddonLayout,
  },
}
