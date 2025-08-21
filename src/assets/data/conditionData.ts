import { ConditionType } from 'types/reduxData'
import { baseSplashScreen } from './splashscreenData'
import {
  baseStoreItems,
  condition_3,
  condition_4,
  condition_5,
  condition_6,
} from './cardItems'
import {
  baseAddonPageOptions,
  baseBasketPageOptions,
  baseStorePageOptions,
} from './pageOptions'
import { baseAddonData, condition_6_addons } from './addons'
import { speedItemsBaseline } from './speedItems'
import { cardAddonLayout } from 'StandardLayouts/AddonLayouts'

export const conditionData: { [key: number]: ConditionType } = {
  1: {
    conditionName: 'Scenario 1 - Baseline',
    storePageOptions: baseStorePageOptions,
    splash: baseSplashScreen,
    storeItems: baseStoreItems,
    speedItems: speedItemsBaseline,
    addonPageOptions: baseAddonPageOptions,
    basketPageOptions: baseBasketPageOptions,
    // storeAddons: baseAddonData,
    addonLayout: cardAddonLayout,
  },
  2: {
    conditionName: 'Scenario 2 - Baseline + Addons',
    storePageOptions: baseStorePageOptions,
    splash: baseSplashScreen,
    storeItems: baseStoreItems,
    speedItems: speedItemsBaseline,
    addonPageOptions: baseAddonPageOptions,
    basketPageOptions: baseBasketPageOptions,
    storeAddons: baseAddonData,
    addonLayout: cardAddonLayout,
  },
  3: {
    conditionName: 'Scenario 3 - Baseline price drop',
    storePageOptions: baseStorePageOptions,
    splash: baseSplashScreen,
    storeItems: condition_3,
    speedItems: speedItemsBaseline,
    addonPageOptions: baseAddonPageOptions,
    basketPageOptions: baseBasketPageOptions,
    storeAddons: baseAddonData,
    addonLayout: cardAddonLayout,
  },
  4: {
    conditionName: 'Scenario 4 - Improved baseline',
    storePageOptions: baseStorePageOptions,
    splash: baseSplashScreen,
    storeItems: condition_4,
    speedItems: speedItemsBaseline,
    addonPageOptions: baseAddonPageOptions,
    basketPageOptions: baseBasketPageOptions,
    storeAddons: baseAddonData,
    addonLayout: cardAddonLayout,
  },
  5: {
    conditionName: 'Scenario 5 - Pay monthly',
    storePageOptions: baseStorePageOptions,
    splash: baseSplashScreen,
    storeItems: condition_5,
    speedItems: speedItemsBaseline,
    addonPageOptions: baseAddonPageOptions,
    basketPageOptions: baseBasketPageOptions,
    storeAddons: baseAddonData,
    addonLayout: cardAddonLayout,
  },
  6: {
    conditionName: 'Scenario 6 - Third Tier Features',
    storePageOptions: baseStorePageOptions,
    splash: baseSplashScreen,
    storeItems: condition_6,
    speedItems: speedItemsBaseline,
    addonPageOptions: baseAddonPageOptions,
    basketPageOptions: baseBasketPageOptions,
    storeAddons: condition_6_addons,
    addonLayout: cardAddonLayout,
  },
}
