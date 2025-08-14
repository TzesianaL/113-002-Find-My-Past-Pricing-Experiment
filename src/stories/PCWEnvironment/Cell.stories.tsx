import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Cell, { CellProps } from 'Components/Environments/PCW/Cell/Cell'

export default {
  title: 'Environments/PCW Environment/Generic Cell',
  component: Cell,
  argTypes: {
    shaded: {
      control: {
        type: 'select',
        options: ['true', 'false'],
      },
    },
  },
} as Meta

const Template: Story<CellProps> = (args) => <Cell {...args}>Generic Cell</Cell>

export const Generic = Template.bind({})
