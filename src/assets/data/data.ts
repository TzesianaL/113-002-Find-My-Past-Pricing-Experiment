import logo from 'images/logos/FMP_logo.png'
import { DataFileType } from 'types'
import { cardAddonLayout } from 'StandardLayouts/AddonLayouts'
import { baseSplashScreen } from './splashscreenData'
import { baseStoreItems } from './cardItems'
import { conditionData } from './conditionData'
import { baseAddonData } from './addons'
import {
  baseBasketPageOptions,
  baseAddonPageOptions,
  baseStorePageOptions,
} from './pageOptions'
import { speedItemsBaseline } from './speedItems'

// any object or arrays which are in the baseline, define them here
// as then we can more easily reuse them on the different conditions

const data: DataFileType = {
  conditions: conditionData,

  // All the keys here are for the baseline and will be used if they aren't defined in the condition
  storeLogoSrc: logo,
  storeName: ``,
  splash: baseSplashScreen,
  storeItems: baseStoreItems,
  speedItems: speedItemsBaseline,
  storePageOptions: baseStorePageOptions,
  addonPageOptions: baseAddonPageOptions,
  basketPageOptions: baseBasketPageOptions,
  storeAddons: baseAddonData,
  addonLayout: cardAddonLayout,

  // This is the theming -- this can be changed per condition as well, though we usually won't need to
  theme: {
    banner: {
      color: '#f2f2f2',
      backgroundColor: 'white', // 45
      fontSize: 1.5,
    },
    planInfo: {
      backgroundColor: '#f2f2f2',
      color: 'black',
    },
    colors: {
      primary: '',
      secondary: '',
      background: '',
      pcwTags: {
        primary: '',
        secondary: 'yellow',
        tertiary: 'orange',
      },
    },
    button: {
      color: '#242048',
      backgroundColor: 'white',
      activeBackgroundColor: 'gray',
      width: '200px',
      borderRadius: '10px',
    },

    fontSize: 1,
    titleFontSize: 1.2,
    subtitleFontSize: 1,
    priceFontSize: 1.2,

    backgroundColor: '#E5E5E5',
    color: 'black',
    titleColor: 'black',
    subtitleColor: 'black',
    fontFamily: 'Arial, Helvetica, sans-serif',
    featureBullet: '⦾', // \u2022',
  },
}

export default data
