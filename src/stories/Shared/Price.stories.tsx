import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Price, { PriceProps } from 'Components/Shared/Price/Price'

export default {
  title: 'Shared/Price',
  component: Price,
  argTypes: {
    currency: {
      control: {
        type: 'select',
        options: ['GBP', 'USD', 'EUR'],
      },
    },
  },
} as Meta

const Template: Story<PriceProps> = (args) => <Price {...args} />

export const PriceAsNumber = Template.bind({})
PriceAsNumber.args = {
  price: 9.99,
  currency: 'GBP',
}
PriceAsNumber.argTypes = {
  priceString: { table: { disable: true } },
}

export const PriceAsString = Template.bind({})
PriceAsString.args = {
  priceString: '£9.99',
}
PriceAsString.argTypes = {
  currency: { table: { disable: true } },
  price: { table: { disable: true } },
}

export const NewPriceIncluded = Template.bind({})
NewPriceIncluded.args = {
  priceString: '<em>£39.99</em>',
  newPrice: 19.99,
}

NewPriceIncluded.argTypes = {
  currency: { table: { disable: true } },
  price: { table: { disable: false } },
}

export const FullPriceControl = Template.bind({})
FullPriceControl.args = {
  priceString: '<em>£19.99</em>',
  currency: 'GBP',
  price: 5.99,
}
