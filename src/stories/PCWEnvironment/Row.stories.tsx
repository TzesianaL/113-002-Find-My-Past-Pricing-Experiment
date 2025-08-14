import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  testSchema,
  testDataRow,
} from 'stories/PCWEnvironment/__fixtures__/pcw'
import Row, { RowProps } from '../../Components/Environments/PCW/Row/Row'

export default {
  title: 'Environments/ PCW Environment/ Table Row',
  component: Row,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    imageText: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<RowProps> = (args) => (
  <Row
    {...args}
    schema={testSchema}
    cellsData={testDataRow}
    onSelect={() => {}}
  />
)

export const TableRow = Template.bind({})
