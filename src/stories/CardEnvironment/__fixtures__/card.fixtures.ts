import { CardItem } from 'types'

export const testItems: CardItem[] = [
  {
    id: 'ITEM_0',
    title: 'Basic',
    subtitle: 'For beginners',
    price: 9.99,
    features: ['Feature 1'],
    cardColor: '#c8c2E8',
  },
  {
    id: 'ITEM_1',
    title: 'Better',
    subtitle: 'For intermediates',
    price: 29.99,
    features: ['Feature 1', 'Feature 2'],
    cardColor: '#c2E8c8',
    pricePeriod: 'year',
  },
  {
    id: 'ITEM_2',
    title: 'Premium',
    subtitle: 'For professionals',
    price: 39.99,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    cardColor: '#E8c2c8',
  },
]

export const bennyExampleItems: CardItem[] = [
  {
    id: 'ITEM_0',
    title: 'Vodafone',
    subtitle: '',
    price: 9.99,
    features: ['Minutes: 300', 'Texts: 100', 'Data: 20GB'],
    cardColor: '#e68888',
  },
]
