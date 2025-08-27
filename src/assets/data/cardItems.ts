import { CardItem } from 'types'

export const baseStoreItems: CardItem[] = [
  {
    id: 'ITEM_1',
    title: 'Family Tree Essential',
    subtitle: `All you need to grow your family tree and understand your ancestors’ lives.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Unlock all your hints</p>
      <div>Grow your tree with more detailed records</div>
      <p style="font-weight: bold;">Discover more sources</p>
      <div>We’ll look for your relatives in newspaper notices and all our family trees</div>
      <p style="font-weight: bold;">Reveal your relatives</p>
      <div>Curate and share their stories in timelines, maps and collections</div>
    </div>`,
    price: {
      monthly: 9.99,
      // quarterly: 35.99,
      // quarterlyMonthly: 12.0,
      // annualy: 99.99,
      // annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_2',
    title: 'Ultimate',
    subtitle: `Everything on Findmypast - delve even deeper, follow every thread.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">All records</p>
      <div>Search for specifics in our billions of British, Irish and worldwide genealogy records</div>
      <p style="font-weight: bold;">All newspapers</p>
      <div>Discover more details in over 2,000 titles, dating back to the 1700s</div>
      <p style="font-weight: bold;">All family trees</p>
      <div>Access everything you need to build your tree, and search over 5 million members’ trees</div>
       <p style="font-weight: bold;">All tools and features</p>
      <div>From our best-in-class search and collections of newspaper clippings to GEDCOM imports</div>
    </div>`,
    price: {
      monthly: 24.99,
      quarterly: 59.99,
      quarterlyMonthly: 19.99,
      annualy: 199.99,
      annualMonthly: 16.67,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
]

export const condition_3: CardItem[] = [
  {
    id: 'ITEM_1',
    title: 'Family Tree Essential',
    subtitle: `All you need to grow your family tree and understand your ancestors’ lives.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Unlock all your hints</p>
      <div>Grow your tree with more detailed records</div>
      <p style="font-weight: bold;">Discover more sources</p>
      <div>We’ll look for your relatives in newspaper notices and all our family trees</div>
      <p style="font-weight: bold;">Reveal your relatives</p>
      <div>Curate and share their stories in timelines, maps and collections</div>
    </div>`,
    price: {
      monthly: 9.99,
      // quarterly: 35.99,
      // quarterlyMonthly: 12.0,
      // annualy: 99.99,
      // annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_2',
    title: 'Ultimate',
    subtitle: `Everything on Findmypast - delve even deeper, follow every thread.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">All records</p>
      <div>Search for specifics in our billions of British, Irish and worldwide genealogy records</div>
      <p style="font-weight: bold;">All newspapers</p>
      <div>Discover more details in over 2,000 titles, dating back to the 1700s</div>
      <p style="font-weight: bold;">All family trees</p>
      <div>Access everything you need to build your tree, and search over 5 million members’ trees</div>
       <p style="font-weight: bold;">All tools and features</p>
      <div>From our best-in-class search and collections of newspaper clippings to GEDCOM imports</div>
    </div>`,
    price: {
      monthly: 19.99,
      quarterly: 49.99,
      quarterlyMonthly: 16.99,
      annualy: 167.88,
      annualMonthly: 13.99,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
]

export const condition_4: CardItem[] = [
  {
    id: 'ITEM_1',
    title: 'Family Tree Essential',
    subtitle: `All you need to grow your family tree and understand your ancestors’ lives.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Unlock all your hints</p>
      <div>Grow your tree with more detailed records</div>
      <p style="font-weight: bold;">Discover more sources</p>
      <div>We’ll look for your relatives in newspaper notices and all our family trees</div>
      <p style="font-weight: bold;">Reveal your relatives</p>
      <div>Curate and share their stories in timelines, maps and collections</div>
    </div>`,
    price: {
      monthly: 13.99,
      // quarterly: 35.99,
      // quarterlyMonthly: 12.0,
      // annualy: 99.99,
      // annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_2',
    title: 'Ultimate',
    subtitle: `Everything on Findmypast - delve even deeper, follow every thread.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">All records</p>
      <div>Search for specifics in our billions of British, Irish and worldwide genealogy records</div>
      <p style="font-weight: bold;">All newspapers</p>
      <div>Discover more details in over 2,000 titles, dating back to the 1700s</div>
      <p style="font-weight: bold;">All family trees</p>
      <div>Access everything you need to build your tree, and search over 5 million members’ trees</div>
       <p style="font-weight: bold;">All tools and features</p>
      <div>From our best-in-class search and collections of newspaper clippings to GEDCOM imports</div>
    </div>`,
    price: {
      monthly: 24.99,
      quarterly: 59.99,
      quarterlyMonthly: 19.99,
      annualy: 199.99,
      annualMonthly: 16.67,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
]

export const condition_5: CardItem[] = [
  {
    id: 'ITEM_1',
    title: 'Family Tree Essential',
    subtitle: `All you need to grow your family tree and understand your ancestors’ lives.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Unlock all your hints</p>
      <div>Grow your tree with more detailed records</div>
      <p style="font-weight: bold;">Discover more sources</p>
      <div>We’ll look for your relatives in newspaper notices and all our family trees</div>
      <p style="font-weight: bold;">Reveal your relatives</p>
      <div>Curate and share their stories in timelines, maps and collections</div>
    </div>`,
    price: {
      monthly: 9.99,
      // quarterly: 35.99,
      // quarterlyMonthly: 12.0,
      // annualy: 99.99,
      // annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_2',
    title: 'Ultimate - Pay Up Front',
    subtitle: `Everything on Findmypast - delve even deeper, follow every thread. Pay for your year in advance and save. `,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">All records</p>
      <div>Search for specifics in our billions of British, Irish and worldwide genealogy records</div>
      <p style="font-weight: bold;">All newspapers</p>
      <div>Discover more details in over 2,000 titles, dating back to the 1700s</div>
      <p style="font-weight: bold;">All family trees</p>
      <div>Access everything you need to build your tree, and search over 5 million members’ trees</div>
       <p style="font-weight: bold;">All tools and features</p>
      <div>From our best-in-class search and collections of newspaper clippings to GEDCOM imports</div>
    </div>`,
    price: {
      // monthly: 24.99,
      // quarterly: 59.99,
      // quarterlyMonthly: 19.99,
      annualy: 169.99,
      annualMonthly: 14.17,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_3',
    title: 'Ultimate - Pay Monthly',
    subtitle: `Everything on Findmypast - delve even deeper, follow every thread. Pay in monthly instalments but save money the longer you commit.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">All records</p>
      <div>Search for specifics in our billions of British, Irish and worldwide genealogy records</div>
      <p style="font-weight: bold;">All newspapers</p>
      <div>Discover more details in over 2,000 titles, dating back to the 1700s</div>
      <p style="font-weight: bold;">All family trees</p>
      <div>Access everything you need to build your tree, and search over 5 million members’ trees</div>
       <p style="font-weight: bold;">All tools and features</p>
      <div>From our best-in-class search and collections of newspaper clippings to GEDCOM imports</div>
    </div>`,
    price: {
      monthly: 24.99,
      quarterly: 20,
      quarterlyMonthly: 20,
      annualy: 16.99,
      annualMonthly: 16.99,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
]

export const condition_6: CardItem[] = [
  {
    id: 'ITEM_1',
    title: 'Family Tree Essential',
    subtitle: `Everything you need to kickstart your family history journey. Trace your relatives  with our smart Tree Builder and vital birth, marriage, death and census records.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Start your family tree quickly and easily.</p>
      <div>Get growing in minutes with our online family tree builder. Smart hints reveal clues to your past as your tree grows - you'll discover amazing stories in no time.</div>
      <p style="font-weight: bold;">The records and sources you need to get started.</p>
      <div>Must-see family history documents, including censuses and church registers, uncover your ancestors' lives, lifestyles and livelihoods.</div>
    </div>`,
    price: {
      monthly: 9.99,
      // quarterly: 35.99,
      // quarterlyMonthly: 12.0,
      // annualy: 99.99,
      // annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_2',
    title: 'Premium',
    subtitle: `Everything in Essential subscription plus amazing unique record sets and features to help you reveal richer family stories.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Detail-rich records you won't find elsewhere.</p>
      <div>Flesh out your family tree with stories from our exclusive military, migration and church record collections. Discover amazing detail with the 1939 register and millions of extra records.</div>

     <p style="font-weight: bold;">Exclusive product features.</p>
      <div>View your tree like never before with our amazing Maps product, tracing your family not just over time but space too.</div>
      
      <p style="font-weight: bold;">Searching made easy.</p>
      <div>Our unique Advanced Search tools help you find relevant records instantly. While Tree Search harnesses the power of the Findmypast community to unlock new connections.</div>
    </div>`,
    price: {
      monthly: 13.99,
      quarterly: 35.99,
      quarterlyMonthly: 11.99,
      annualy: 99.99,
      annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_3',
    title: 'Ultimate',
    subtitle: `Unlock everything that Findmypast has to offer. An ever-growing newspaper archive. Research-refining features. Records spanning the globe.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Complete British and Irish record access.</p>
      <div>From key national collections to millions of local and regional resources, access everything you need to trace British Isles heritage.</div>
      <p style="font-weight: bold;">British Newspaper Archive.</p>
      <div>From salacious scandal to local legend, newspapers reveal the family stories you won't find anywhere else. Enjoy unlimited access to the largest collection of historical British and Irish newspapers online. </div>
      <p style="font-weight: bold;">Research your way with Workspaces.</p>
      <div>Store, sort and summarise your family discoveries so you never miss a thread and can pick up right where you left off.</div>
       <p style="font-weight: bold;">Worldwide records.</p>
      <div>With access to our complete global and Commonwealth collections, track your ancestors' origins, new beginnings and final journeys.</div>
    </div>`,
    price: {
      monthly: 24.99,
      quarterly: 59.99,
      quarterlyMonthly: 19.99,
      annualy: 199.99,
      annualMonthly: 16.67,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
]

export const condition_7: CardItem[] = [
  {
    id: 'ITEM_1',
    title: 'Family Tree Essential',
    subtitle: `Access all our tools and features up to <span style="color: red; font-weight: bold; text-decoration: underline">10 views</span> per month from our archive of billions of British, Irish and Worldwide genealogy records and Newspapers.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Complete British and Irish record access.</p>
      <div>From key national collections to millions of local and regional resources, access everything you need to trace British Isles heritage.</div>
      <p style="font-weight: bold;">British Newspaper Archive.</p>
      <div>From salacious scandal to local legend, newspapers reveal the family stories you won't find anywhere else. Enjoy unlimited access to the largest collection of historical British and Irish newspapers online. </div>
       <p style="font-weight: bold;">Research your way with Workspaces.</p>
      <div>Store, sort and summarise your family discoveries so you never miss a thread and can pick up right where you left off.</div>
      <p style="font-weight: bold;">Worldwide records.</p>
      <div>With access to our complete global and Commonwealth collections, track your ancestors' origins, new beginnings and final journeys.</div>
      </div>`,
    price: {
      monthly: 9.99,
      // quarterly: 35.99,
      // quarterlyMonthly: 12.0,
      // annualy: 99.99,
      // annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_2',
    title: 'Premium',
    subtitle: `Access all our tools and features plus up to <span style="color: red; font-weight: bold; text-decoration: underline">30 views</span> per month from our archive of billions of British, Irish and Worldwide genealogy records and Newspapers.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Complete British and Irish record access.</p>
      <div>From key national collections to millions of local and regional resources, access everything you need to trace British Isles heritage.</div>
      <p style="font-weight: bold;">British Newspaper Archive.</p>
      <div>From salacious scandal to local legend, newspapers reveal the family stories you won't find anywhere else. Enjoy unlimited access to the largest collection of historical British and Irish newspapers online. </div>
       <p style="font-weight: bold;">Research your way with Workspaces.</p>
      <div>Store, sort and summarise your family discoveries so you never miss a thread and can pick up right where you left off.</div>
      <p style="font-weight: bold;">Worldwide records.</p>
      <div>With access to our complete global and Commonwealth collections, track your ancestors' origins, new beginnings and final journeys.</div>
      </div>`,
    price: {
      monthly: 13.99,
      quarterly: 35.99,
      quarterlyMonthly: 11.99,
      annualy: 99.99,
      annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_3',
    title: 'Ultimate',
    subtitle: `Access all our tools and features plus <span style="color: red; font-weight: bold; text-decoration: underline">Unlimited</span> views from our archive of billions of British, Irish and Worldwide genealogy records and Newspapers.</span>`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Complete British and Irish record access.</p>
      <div>From key national collections to millions of local and regional resources, access everything you need to trace British Isles heritage.</div>
      <p style="font-weight: bold;">British Newspaper Archive.</p>
      <div>From salacious scandal to local legend, newspapers reveal the family stories you won't find anywhere else. Enjoy unlimited access to the largest collection of historical British and Irish newspapers online. </div>
       <p style="font-weight: bold;">Research your way with Workspaces.</p>
      <div>Store, sort and summarise your family discoveries so you never miss a thread and can pick up right where you left off.</div>
      <p style="font-weight: bold;">Worldwide records.</p>
      <div>With access to our complete global and Commonwealth collections, track your ancestors' origins, new beginnings and final journeys.</div>
      </div>`,
    price: {
      monthly: 24.99,
      quarterly: 59.99,
      quarterlyMonthly: 19.99,
      annualy: 199.99,
      annualMonthly: 16.67,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
]

export const condition_8: CardItem[] = [
  {
    id: 'ITEM_1',
    title: 'Family Tree Essential',
    subtitle: `Everything you need to kickstart your family history journey in minutes, just start with your name.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Start your family tree quickly and easily.</p>
      <div>Get growing in minutes with our online family tree builder. Smart hints reveal clues to your past as your tree grows - you'll discover amazing stories in no time.</div>
      <p style="font-weight: bold;">The records and sources you need to get started.</p>
      <div>Must-see family history documents, including censuses and church registers, uncover your ancestors' lives, lifestyles and livelihoods.</div>

    </div>`,
    price: {
      monthly: 9.99,
      // quarterly: 35.99,
      // quarterlyMonthly: 12.0,
      // annualy: 99.99,
      // annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_2',
    title: 'Premium',
    subtitle: `Everything in Essential subscription plus amazing unique record sets and features to help you reveal richer family stories.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Detail-rich records you won't find elsewhere</p>
      <div> Flesh out your family tree with stories from our exclusive military, migration and church record collections. Discover amazing detail with the 1939 register and millions of extra records.</div>
      
      <p style="font-weight: bold;">Exclusive product features.</p>
      <div>View your tree like never before with our amazing Maps product, tracing your family not just over time but space too.</div>
      
      <p style="font-weight: bold;">Searching made easy.</p>
      <div>Our unique Advanced Search tools help you find relevant records instantly. While Tree Search harnesses the power of the Findmypast community to unlock new connections. </div>
    
    </div>`,
    price: {
      monthly: 13.99,
      quarterly: 35.99,
      quarterlyMonthly: 11.99,
      annualy: 99.99,
      annualMonthly: 8.33,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: red; font-weight: bold; margin-bottom: 4px;">✗ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
  {
    id: 'ITEM_3',
    title: 'Ultimate',
    subtitle: `Unlock everything that Findmypast has to offer. An ever-growing newspaper archive. Research-refining features. Records spanning the globe.`,
    subtitle2: `
    <div style="text-align:left; padding:1em">
      <p style="font-weight: bold;">Complete British and Irish record access.</p>
      <div>From key national collections to millions of local and regional resources, access everything you need to trace British Isles heritage.</div>
      
      <p style="font-weight: bold;">British Newspaper Archive.</p>
      <div>From salacious scandal to local legend, newspapers reveal the family stories you won't find anywhere else. Enjoy unlimited access to the largest collection of historical British and Irish newspapers online. </div>
      
      <p style="font-weight: bold;">Research your way with Workspaces.</p>
      <div>Store, sort and summarise your family discoveries so you never miss a thread and can pick up right where you left off.</div>
    
      <p style="font-weight: bold;">Worldwide records.</p>
      <div>With access to our complete global and Commonwealth collections, track your ancestors' origins, new beginnings and final journeys.</div>
    </div>`,
    price: {
      monthly: 24.99,
      quarterly: 49.99,
      quarterlyMonthly: 16.67,
      annualy: 149.99,
      annualMonthly: 12.49,
    },
    upfrontPrice: 0,
    priceString: '',
    pricePeriod: 'month',
    currency: 'GBP',
    features: `
<div style="text-align: left;">
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core Records</div>
    <ul>
      <li>Births, Death and Marriages</li>
      <li>Census 1841 to 1921</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Core product Features</div>
    <ul>
      <li>Family Tree builder</li>
      <li>SmartHints</li>
      <li>Record Search</li>
    </ul>
  </div>

  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Unique and extended record sets</div>
    <ul>
      <li>Extensive Military Archive</li>
      <li>1939 Civilian Register – the definitive record of life on the eve of war</li>
      <li>Roman Catholic Parish Records</li>
      <li>Migration Records - the largest online collection of British and Irish</li>
      <li>Wills and Probate records</li>
      <li>Regional Parish Records</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Advanced Features</div>
    <ul>
      <li>Search other trees</li>
      <li>Maps</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Exclusive and Premium Records</div>
    <ul>
      <li>Naval records - from Trafalgar to the Second World War</li>
      <li>British Newspaper Archive – the largest online collection of British Newspapers</li>
      <li>Commonwealth Records</li>
      <li>Worldwide Records: inc exclusive USA Roman Catholic Parish Records</li>
      <li>Exclusive Workhouse and Hospitals</li>
      <li>Exclusive Regimental Records</li>
      <li>Irish Quaker Records</li>
      <li>Guernsey records inc Occupation, Parish Registers, workhouse, schools and prisons</li>
      <li>Exclusive Parish Records</li>
    </ul>
  </div>

   <div style="margin-bottom: 5px;">
    <div style="color: green; font-weight: bold; margin-bottom: 4px;">✓ Premium Features</div>
    <ul>
      <li>Workspaces Research tool</li>
    </ul>
  </div>

</div>
    `,
    basketOptions: {},
  },
]
