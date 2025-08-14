import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import PCWBasketCard, {
  PCWBasketCardProps,
} from 'Components/Environments/PCW/PCWBasketCard/PCWBasketCard'
import {
  testDataTable,
  testSchema,
} from 'stories/PCWEnvironment/__fixtures__/pcw'

export default {
  title: 'Environments/PCW Environment/Basket Card',
  component: PCWBasketCard,
  argTypes: {
    pcwCardproperties: {
      control: {
        type: 'text',
      },
    },
    schema: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<PCWBasketCardProps> = (args) => (
  <PCWBasketCard
    {...args}
    pcwCardproperties={testDataTable[0]}
    schema={testSchema}
  />
)

export const PCWBasketCrd = Template.bind({})
