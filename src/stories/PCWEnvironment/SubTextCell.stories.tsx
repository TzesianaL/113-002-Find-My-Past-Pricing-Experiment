import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SubTextCell, {
  SubTextCellProps,
} from 'Components/Environments/PCW/SubTextCell/SubTextCell'

export default {
  title: 'Environments/PCW Environment/Sub Text Cell',
  component: SubTextCell,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    subText: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<SubTextCellProps> = (args) => (
  <SubTextCell {...args} text="test text " subtext="test subtext" />
)

export const Text = Template.bind({})
