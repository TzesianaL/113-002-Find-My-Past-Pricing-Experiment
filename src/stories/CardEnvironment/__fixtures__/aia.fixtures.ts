import { CardItem } from 'types'
import logo1 from 'images/logos/lifepro-prime1.png'
import logo2 from 'images/logos/accidentpro-prime1.png'
import logo3 from 'images/logos/disability-prime1.png'
import logo4 from 'images/logos/criticalillnesspro-prime1.png'

export const AiaCardItems: CardItem[] = [
  {
    id: 'ITEM_0',
    title: 'Life Cover',
    subtitle:
      'Life insurance cover helps protect your family’s financial future when you no longer can',
    price: 9.99,
    priceString: 'From £1 per month',
    features: [
      'DEATH BENEFIT: Provides a lump sum benefit if you pass away',
      'TERMINAL ILLNESS: Provides a lump sum benefit if you are diagnosed with a terminal illness',
      'FINANCIAL PLANNING REIMBURSEMENT: Covers any financial advice costs up to $3,000 to assist with managing or investing your claim payment for death or terminal illness',
      'PREMIUM FREEZE: Gives you the flexibility to keep your premium the same each year by reducing your sum insured',
    ],
    cardColor: '#F1F6F8',
    headerImage: logo1,
  },
  {
    id: 'ITEM_1',
    title: 'Income Protection',
    subtitle:
      'A monthly income can provide you with the financial security you need to concentrate on recovery after illness or injury',
    price: 9.99,
    priceString: 'From £10 per month',
    features: [
      'TOTAL OR PARTIAL DISABLEMENT: Provides a monthly benefit should you suffer total or partial disablement',
      'TERMINAL ILLNESS BENEFIT: Provides a lump sum payment (six times your insured monthly benefit) if you are diagnosed with a terminal illness',
      'WAIVER OF PREMIUM: Should you become totally or partially disabled and receiving a claim payment, you will not need to pay premiums for the Income Protection benefit',
      'REHABILITATION EXPENSES: Covers the cost (up to a maximum of 12 times your insured monthly benefit) for you to attend a rehabilitation program to get you back to work',
    ],
    headerImage: logo2,
  },
  {
    id: 'ITEM_2',
    title: 'Total & Permanent Disablement',
    subtitle:
      'Cover that can help you receive quality care and support if a serious injury or illness leaves you permanently disabled',
    price: 9.99,
    priceString: 'Only £600/year',
    features: [
      'TPD BENEFIT: Provides you with a lump sum benefit if you become totally and permanently or partially and permanently disabled and are unable to work or are unable to perform domestic duties or suffer total or partial disablement that prevents you from performing a number of every day activities',
      'PARTIAL AND PERMANENT DISABLEMENT: Provides you with a lump sum benefit equal to the lesser of $750,000 or 25% of your sum insured, should you suffer the permanent loss or use of one arm, one leg or sight in one eye',
      'FINANCIAL PLANNING REIMBURSEMENT: Covers any financial advice costs up to $3,000 to assist with managing or investing your claim payment for death or terminal illness',
      'PREMIUM FREEZE: Gives you the flexibility to keep your premium the same each year by reducing your sum insured',
    ],
    headerImage: logo3,
  },
  {
    id: 'ITEM_3',
    title: 'Crisis Recovery',
    subtitle:
      'In the case of a traumatic event or illness, your cover can ease financial stress so you can focus on recovery',
    price: 9.99,
    priceString: '<del>Was £700</del> Now £300',
    features: [
      'CRISIS RECOVERY BENEFIT: Provides a lump sum equal to your sum insured should you experience a health event or are diagnosed with a serious illness',
      'PREMIUM FREEZE: Gives you the flexibility to keep your premium the same each year by reducing your sum insured',
      'FINANCIAL PLANNING REIMBURSEMENT: Covers any financial advice costs up to $3,000 to assist with managing or investing your claim payment for death or terminal illness',
      'COMPLIMENTARY FAMILY PROTECTION: Provides a lump sum benefit of $20,000 should one of your dependant children experience a health event or be diagnosed with a serious illness',
    ],
    headerImage: logo4,
  },
]
