import { CardItem } from 'types'

export const baseStoreItems: CardItem[] = [
  // Full Fibre 73
  {
    id: 'ITEM_1_73',
    title: 'Family Tree Essential',
    subtitle: `Our Essential subscription gives you everything you need to kickstart your family history journey. Start building your family tree with the help of smart hints. Trace your relatives' stories through time with access to vital birth, marriage, death and census records.`,
    subtitle2: `<div style="text-align:left; padding:1em"><p style="font-weight: bold;">Start your family tree quickly and easily</p><div>Get growing in minutes with our online family tree builder. Smart hints reveal clues to your past as your tree grows - you'll discover amazing stories in no time.</div><p style="font-weight: bold;">The records and sources you need to get started</p><div>Must-see family history documents, including censuses and church registers, uncover your ancestors' lives, lifestyles and livelihoods.</div></div>`,
    price: {
      monthly: 9.99,
      quarterly: 24.99,
      annualy: 99.99,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    contractDuration: '24 months',
    parentSpeedId: 'SPEED_ITEM_1',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Everything in Plus plan</div>
    <ul>
      <li>Premium historical newspapers</li>
      <li>Advanced search filters</li>
      <li>Expanded UK record collections</li>
      <li>Enhanced mobile app features</li>
      <li>Priority email support</li>
      <li>Power Hub router included</li>
      <li>Super WiFi Booster coverage</li>
      <li>Broadband Xpert help support</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ International record collections</div>
    <ul>
      <li>Access to global historical records</li>
      <li>Immigration and emigration records</li>
      <li>International census data</li>
      <li>Military records worldwide</li>
      <li>Ship passenger lists</li>
      <li>International vital records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ DNA matching and analysis tools</div>
    <ul>
      <li>Advanced DNA relative matching</li>
      <li>Ethnicity estimates and breakdowns</li>
      <li>DNA health insights</li>
      <li>Chromosome browser tools</li>
      <li>Family tree DNA integration</li>
      <li>ThruLines™ technology</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Historical maps and yearbooks</div>
    <ul>
      <li>Interactive historical maps</li>
      <li>School and university yearbooks</li>
      <li>City directories and phone books</li>
      <li>Historical atlases and surveys</li>
      <li>Land records and property maps</li>
      <li>Vintage photograph collections</li>
    </ul>
  </div>
</div>
    `,
    basketOptions: {},
  },
]
