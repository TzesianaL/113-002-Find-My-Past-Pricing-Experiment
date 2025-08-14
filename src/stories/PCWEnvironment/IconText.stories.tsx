import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import IconTextCell, {
  IconTextCellProps,
} from 'Components/Environments/PCW/IconTextCell/IconTextCell'

export default {
  title: 'Environments/PCW Environment/ Icon Text Cell',
  component: IconTextCell,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    imagePath: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<IconTextCellProps> = (args) => <IconTextCell {...args} />

export const IconText = Template.bind({})

IconText.args = {
  imagePath: 'testLogo',
  text: 'Some text here. Longer text lorem ipsum etc etc',
}
