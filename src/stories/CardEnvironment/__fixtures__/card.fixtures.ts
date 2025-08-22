import { CardItem } from 'types'

export const testItems: CardItem[] = [
  {
    id: 'ITEM_0',
    title: 'Basic',
    subtitle: 'For beginners',
    price: {
      monthly: 9.99,
      quarterly: 29.99,
      quarterlyMonthly: 24.99,
      annualy: 99.99,
      annualMonthly: 89.99,
    },
    features: 'Feature 1',
    cardColor: '#c8c2E8',
  },
]

export const bennyExampleItems: CardItem[] = [
  {
    id: 'ITEM_0',
    title: 'Vodafone',
    subtitle: '',
    price: {
      monthly: 9.99,
      quarterly: 29.99,
      quarterlyMonthly: 24.99,
      annualy: 99.99,
      annualMonthly: 89.99,
    },
    features: 'Minutes: 300',
    cardColor: '#e68888',
  },
]
