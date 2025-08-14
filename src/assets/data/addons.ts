import { AddonData } from 'types'

export const baseAddonData: AddonData[] = [
  // group 3
  {
    id: 'Addon1',
    title: 'International 300',
    group: 3,
    subtitle: '300 min a month to numbers in selected countries',
    features: [],
    price: 7,
    pricePeriod: 'month',
  },
  {
    id: 'Addon2',
    title: 'Evening & Weekend',
    subtitle: 'Evening and weekend calls to standard UK landlines',
    group: 3,
    features: [],
    price: 6,
    pricePeriod: 'month',
  },
  {
    id: 'Addon3',
    title: 'Anytime Landline & Mobile',
    subtitle: 'To standard UK landlines and mobiles from your home phone',
    group: 3,
    features: [],
    price: 10,
    pricePeriod: 'month',
  },
]

export const scenario2_addons: AddonData[] = [
  // group 3
  {
    id: 'Addon1',
    title: 'Talk International',
    group: 3,
    subtitle:
      'Unlimited inclusive calls to UK mobiles and landlines, plus 50 worldwide destinations.',
    features: [],
    price: 18,
    pricePeriod: 'month',
  },
  {
    id: 'Addon2',
    title: 'Talk Evenings & Weekends',
    subtitle:
      'Unlimited evening and weekend calls to UK mobiles and landlines.',
    group: 3,
    features: [],
    price: 8,
    pricePeriod: 'month',
  },
  {
    id: 'Addon3',
    title: 'Talk Anytime',
    subtitle:
      'Chat anytime day or night with unlimited inclusive calls to UK mobiles and landlines.',
    group: 3,
    features: [],
    price: 17,
    pricePeriod: 'month',
  },
  {
    id: 'Addon4',
    title: 'WIFI Max',
    subtitle:
      "<ul style='margin: 0; padding-left: 16px; text-align: left;'><li style='margin: 2px 0; padding: 0;'>Our fastest WiFi Guarantee</li><li style='margin: 2px 0; padding: 0;'>Advanced Security for safer browsing</li><li style='margin: 2px 0; padding: 0;'>Set limits on kids' internet time</li><li style='margin: 2px 0; padding: 0;'>Prioritise a device on your WiFi</li></ul>",
    group: 4,
    features: [],
    price: 4,
    excludedProductIDs: ['ITEM_1_1600', 'ITEM_1_2500', 'ITEM_1_5000'],
    pricePeriod: 'month',
  },
  {
    id: 'Addon5',
    title: 'WIFI Max',
    subtitle:
      "<ul style='margin: 0; padding-left: 16px; text-align: left;'><li style='margin: 2px 0; padding: 0;'>Our fastest WiFi Guarantee</li><li style='margin: 2px 0; padding: 0;'>Advanced Security for safer browsing</li><li style='margin: 2px 0; padding: 0;'>Set limits on kids' internet time</li><li style='margin: 2px 0; padding: 0;'>Prioritise a device on your WiFi</li></ul>",
    group: 4,
    features: [],
    price: 0,
    excludedProductIDs: ['ITEM_1_73', 'ITEM_1_150', 'ITEM_1_500', 'ITEM_1_900'],
    pricePeriod: 'month',
  },
]
