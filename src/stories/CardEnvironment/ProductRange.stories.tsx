import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ProductRange from 'Components/Environments/CardEnvironment/ProductRange/ProductRange'

export default {
  title: 'Environments/Card Environment/ProductRange',
  component: ProductRange,
} as Meta

const Template: Story = (args) => <ProductRange {...args} />

export const BasicProductRange = Template.bind({})
BasicProductRange.args = {}
