import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ImageCell, {
  ImageCellProps,
} from 'Components/Environments/PCW/ImageCell/ImageCell'
import testLogo from 'images/logos/lifepro-prime1.png'

export default {
  title: 'Environments/PCW Environment/ Image Cell',
  component: ImageCell,
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

const Template: Story<ImageCellProps> = (args) => (
  <ImageCell {...args} imagePath={testLogo} text="company logo" />
)

export const Image = Template.bind({})
