import { PCWSchema, PCWProductData, TagType, CellDataType } from 'types'
import testLogo from 'images/logos/lifepro-prime1.png'
import { CSSProperties } from 'styled-components'

export const testStyle: CSSProperties = {
  background: '#9EE094',
  color: '#377460',
  fontSize: '1em',
}

export const testFooter =
  "<div><p>We aim to take the strain out of broadband comparison. Good broadband deals aren't just about the price, it's also about what's included in the product, the speeds offered and any extra incentives providers are offering. To balance all of these, we have developed a ranking formula that takes into account deals that are proving to be popular with our customers, that are competitive in the market and have a smooth buying process.</p><p>If you prefer, you can sort deals by monthly cost, speed or contract length. You can also choose to show costs as monthly or full contract, which lets you see the total spend over the contract period, including any setup costs.</p><p>Uswitch services are provided at no cost to you, but we may receive a commission from the companies we refer you to.</p></div>"

export const testBasketPageFooter =
  '<div><p>Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, YT will move you to a different tariff.</p></div>'

export const testSchema: PCWSchema[] = [
  {
    type: 'image',
    shaded: false,
    excludedFromPlanInfo: true,
    excludedFromBasket: true,
    dataSource: 'productLogo',
    name: 'Product Logo',
    isPrice: true,
  },
  {
    type: 'subtext',
    excludedFromBasket: true,
    excludedFromPlanInfo: true,
    dataSource: 'tariffType',
    name: 'Tariff Type',
    isPrice: true,
  },
  {
    type: 'subtext',
    shaded: false,
    excludedFromPlanInfo: false,
    sortable: true,
    excludedFromBasket: true,
    dataSource: 'exitFee',
    name: 'Exit Fee',
    isPrice: true,
  },
  {
    type: 'subtext',
    shaded: false,
    excludedFromPlanInfo: false,
    sortable: true,
    excludedFromBasket: true,
    dataSource: 'contractLength',
    name: 'Contract Length',
    isPrice: true,
  },
  {
    type: 'list',
    excludedFromBasket: true,
    excludedFromPlanInfo: true,
    dataSource: 'features',
    name: 'Features',
    isPrice: true,
  },
  {
    type: 'icontext',
    excludedFromBasket: true,
    excludedFromPlanInfo: true,
    dataSource: 'icontext',
    name: 'Icontext',
    isPrice: true,
  },
  {
    type: 'subtext',
    shaded: true,
    excludedFromPlanInfo: false,
    sortable: true,
    excludedFromBasket: true,
    dataSource: 'cost',
    name: 'Cost',
    isPrice: true,
  },
  {
    type: 'button',
    excludedFromBasket: true,
    excludedFromPlanInfo: true,
    dataSource: 'button',
    name: 'Button',
    isPrice: true,
  },
]

export const testDataRow: CellDataType[] = [
  {
    id: 'productLogo',
    text: 'Brighter Future 2021',
    imagePath: testLogo,
  },
  {
    id: 'tariffType',
    text: 'Fixed',
    subtext: 'Tariff Type',
  },
  {
    id: 'exitFee',
    text: '£35.00',
    value: 35,
    subtext: 'early exit fee',
  },
  {
    id: 'contractLength',
    value: 25,
    text: '25 months',
    subtext: 'contract',
  },
  {
    id: 'features',
    list: ['£75 Amazon Voucher', 'Ucompare Exclusive'],
  },
  {
    id: 'cost',
    value: 20.39,
    text: '+ £20.39',
    subtext: '(£50.38 pm)',
  },
  {
    id: 'button',
  },
]

export const testDataTable: PCWProductData[] = [
  // row 1
  {
    id: 'row_1',
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    cells: [
      {
        id: 'productLogo',
        text: 'Brighter Future 2021',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: 'Fixed',
        subtext: 'Tariff Type',
      },
      {
        id: 'exitFee',
        value: 35,
        text: '£35.00',
        subtext: 'early exit fee',
      },
      {
        id: 'contractLength',
        value: 25,
        text: '25 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'Ucompare Exclusive'],
      },
      {
        id: 'cost',
        value: 20.39,
        text: '+ £20.39',
        subtext: '(£50.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: '5G',
        tagColorType: 'tertiary',
      },
      {
        text: 'Free minutes',
        color: '#778899',
      },
    ],
  },
  // row 2
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_2',
    cells: [
      {
        id: 'productLogo',
        text: 'Brighter Future 2021 v2',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: 'Variable',
        subtext: 'Tariff Type',
      },
      {
        id: 'exitFee',
        value: 55,
        text: '£55.00',
        subtext: 'early exit fee',
      },
      {
        id: 'contractLength',
        value: 48,
        text: '48 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'Ucompare Exclusive', 'EU Roaming'],
      },
      {
        id: 'cost',
        value: 15.39,
        text: '+ £15.39',
        subtext: '(£53.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: '5G',
        tagColorType: 'tertiary',
      },
      {
        text: 'Free minutes',
        color: '#778899',
      },
      {
        text: '100GB Free',
        color: 'pink',
      },
    ],
  },
  // row 3
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_3',
    cells: [
      {
        id: 'productLogo',
        text: 'YT ULtraFast 500',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: '500Mbps',
        subtext: 'Average Download Speed',
      },
      {
        id: 'exitFee',
        value: Number.MAX_SAFE_INTEGER,
        text: 'Unlimited',
        subtext: 'downloaded',
      },
      {
        id: 'contractLength',
        value: 24,
        text: '24 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['Ucompare Exclusive'],
      },
      {
        id: 'cost',
        value: 30.39,
        text: '+ £30.39',
        subtext: '(£20.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
  },
  // row 4
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_4',
    cells: [
      {
        id: 'productLogo',
        text: 'YT UltraFast 500',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: 'Unlimited',
        subtext: 'download',
      },
      {
        id: 'exitFee',
        value: 35,
        text: '£35.00',
        subtext: 'early exit fee',
      },
      {
        id: 'contractLength',
        value: 24,
        text: '24 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'No Credit Check', '5G'],
      },
      {
        id: 'cost',
        value: 90.39,
        text: '+ £90.39',
        subtext: '(no setup fee)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: 'Free minutes',
        color: '#778899',
      },
    ],
  },
  // row 5
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_5',
    cells: [
      {
        id: 'productLogo',
        text: 'YT GigaFast 10,000',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: '100 Gbps',
        subtext: 'Average Download Speed',
      },
      {
        id: 'exitFee',
        value: Number.MAX_SAFE_INTEGER,
        text: 'Unlimited',
        subtext: 'download',
      },
      {
        id: 'contractLength',
        value: 10,
        text: '10 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'Ucompare Exclusive'],
      },
      {
        id: 'cost',
        value: 100.39,
        text: '+ £100.39',
        subtext: '(£90.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: 'Provider of the year',
        tagColorType: 'primary',
      },
      {
        text: ' £50 Amazon Voucher',
        tagColorType: 'secondary',
      },
    ],
  },
  // row 6
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_6',
    cells: [
      {
        id: 'productLogo',
        text: 'YT Basics',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: '10 GB',
        subtext: 'Data',
      },
      {
        id: 'exitFee',
        value: Number.MAX_SAFE_INTEGER,
        text: 'Unlimited',
        subtext: 'Minutes & Text',
      },
      {
        id: 'contractLength',
        value: 12,
        text: '12 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['EU roaminf', '5G'],
      },
      {
        id: 'cost',
        value: 8.39,
        text: '+ £8.39',
        subtext: '(£10.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: ' £50 Amazon Voucher',
        tagColorType: 'secondary',
      },
    ],
  },
  // row 7
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_7',
    cells: [
      {
        id: 'productLogo',
        text: 'YT Ukktimate 5G SIM',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: 'Unlimited',
        subtext: 'Minutes & Text',
      },
      {
        id: 'exitFee',
        value: 15,
        text: '£15.00',
        subtext: 'early exit fee',
      },
      {
        id: 'contractLength',
        value: 10,
        text: '10 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'Ucompare Exclusive'],
      },
      {
        id: 'cost',
        value: 10,
        text: '+ £10.00',
        subtext: '(£5.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: 'Provider of the year',
        tagColorType: 'primary',
      },
      {
        text: ' £50 Amazon Voucher',
        tagColorType: 'secondary',
      },
    ],
  },
  // row 8
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_8',
    cells: [
      {
        id: 'productLogo',
        text: 'Brighter Future 2021',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: 'YT Advanced',
        subtext: 'Tariff Type',
      },
      {
        id: 'exitFee',
        value: 35,
        text: '£35.00',
        subtext: 'early exit fee',
      },
      {
        id: 'contractLength',
        value: 30,
        text: '30 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'Ucompare Exclusive'],
      },
      {
        id: 'cost',
        value: 80.39,
        text: '+ £80.39',
        subtext: '(£20.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: 'Provider of the year',
        tagColorType: 'primary',
      },
    ],
  },
  // row 9
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_9',
    cells: [
      {
        id: 'productLogo',
        text: 'YT ',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: '300GB',
        subtext: 'Tariff Type',
      },
      {
        id: 'exitFee',
        value: 35,
        text: '£35.00',
        subtext: 'early exit fee',
      },
      {
        id: 'contractLength',
        value: 25,
        text: '25 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'Ucompare Exclusive'],
      },
      {
        id: 'cost',
        value: 20.39,
        text: '+ £20.39',
        subtext: '(£50.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: 'Provider of the year',
        tagColorType: 'primary',
      },
      {
        text: ' £50 Amazon Voucher',
        tagColorType: 'secondary',
      },
    ],
  },
  {
    planInfo: {
      type: 'text',
      text: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
      introText:
        'YT Energy is one of the big six energy suppliers in the UK. It is the UK’s largest producer of low-carbon electricity and the biggest supplier of electricity by volume in Great Britain. It owns and operates eight nuclear power stations and 35 wind farms that generate that low-carbon electricity.',
      footerText:
        'Signing up to this tariff means you agree to have a Smart meter installed if you do not already have one. If you do not agree, EDF will move you to a different tariff.',
    },
    id: 'row_10',
    cells: [
      {
        id: 'productLogo',
        text: 'Brighter Future 2021',
        imagePath: testLogo,
      },
      {
        id: 'tariffType',
        text: 'Fixed',
        subtext: 'Tariff Type',
      },
      {
        id: 'exitFee',
        value: 35,
        text: '£35.00',
        subtext: 'early exit fee',
      },
      {
        id: 'contractLength',
        value: 25,
        text: '25 months',
        subtext: 'contract',
      },
      {
        id: 'features',
        list: ['£75 Amazon Voucher', 'Ucompare Exclusive'],
      },
      {
        id: 'cost',
        value: 20.39,
        text: '+ £20.39',
        subtext: '(£50.38 pm)',
      },
      {
        id: 'icontext',
        text: 'early exit fee',
        imagePath: testLogo,
      },
      {
        id: 'button',
      },
    ],
    tags: [
      {
        text: 'Provider of the year',
        tagColorType: 'primary',
      },
      {
        text: ' £50 Amazon Voucher',
        tagColorType: 'secondary',
      },
    ],
  },
]

export const testTags: TagType[] = [
  {
    text: '5G',
    tagColorType: 'tertiary',
  },
  {
    text: 'EU roaming ',
    tagColorType: 'secondary',
  },
]
