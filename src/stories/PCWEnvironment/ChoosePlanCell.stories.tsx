import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ChoosePlanCell, {
  ChoosePlanCellProps,
} from 'Components/Environments/PCW/ChoosePlanCell/ChoosePlanCell'

export default {
  title: 'Environments/PCW Environment/ Choose Plan Cell',
  component: ChoosePlanCell,
  argTypes: {
    buttonText: {
      control: {
        type: 'text',
      },
    },
    hyperLinkText: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<ChoosePlanCellProps> = (args) => (
  <ChoosePlanCell {...args} />
)

export const ChoosePlan = Template.bind({})
