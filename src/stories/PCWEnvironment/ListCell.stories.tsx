import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ListCell, {
  ListCellProps,
} from 'Components/Environments/PCW/ListCell/ListCell'

export default {
  title: 'Environments/PCW Environment/ List Cell',
  component: ListCell,
  argTypes: {
    list: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<ListCellProps> = (args) => (
  <ListCell {...args} list={['Incurance', 'Broadband', 'Energy']} />
)

export const List = Template.bind({})
