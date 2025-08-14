import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  testSchema,
  testDataTable,
} from 'stories/PCWEnvironment/__fixtures__/pcw'
import PCWTable, {
  TableProps,
} from '../../Components/Environments/PCW/Table/Table'

export default {
  title: 'Environments/PCW Environment/Table',
  component: PCWTable,
  argTypes: {
    schema: {
      control: {
        type: 'array',
      },
    },
    dataset: {
      control: {
        type: 'array',
      },
    },
  },
} as Meta

const Template: Story<TableProps> = ({ schema, products, ...args }) => (
  <PCWTable {...args} schema={schema} products={products} />
)

export const Table = Template.bind({})

Table.args = {
  schema: testSchema,
  products: testDataTable,
}
