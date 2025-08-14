import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import StoreBanner, {
  StoreBannerProps,
} from 'Components/Shared/StoreBanner/StoreBanner'
import logo from '../images/logo.png'

export default {
  title: 'Environments/Card Environment/StoreBanner',
  component: StoreBanner,
} as Meta

interface StoryProps extends StoreBannerProps {
  backgroundColor?: string
  logoPosition?: 'left' | 'center' | 'right'
  textColor?: string
  fontSize?: number
  fontFamily?: string
}

const Template: Story<StoryProps> = ({
  backgroundColor,
  logoPosition,
  textColor,
  fontSize,
  fontFamily,
  ...args
}) => (
  <ThemeProvider
    theme={{
      banner: {
        backgroundColor: `${backgroundColor || '#6300AA'}`,
        logoPosition: `${logoPosition}`,
        color: `${textColor || 'grey'}`,
        fontSize: fontSize || 2,
        fontFamily: `${fontFamily || 'Helvetica'}`,
      },
    }}
  >
    <StoreBanner {...args} />
  </ThemeProvider>
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'BT',
  logoSrc: logo,
  backgroundColor: '#6300AA',
  logoPosition: 'right',
  textColor: 'grey',
  fontSize: 1,
  fontFamily: 'Arial',
}

Basic.argTypes = {
  backgroundColor: {
    control: 'color',
  },
  textColor: {
    control: 'color',
  },
}
