import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import SplashText, {
  SplashTextProps,
} from 'Components/Shared/SplashPage/SplashText/SplashText'

export default {
  title: 'Environments/Card Environment/SplashScreen/SplashText',
  component: SplashText,
} as Meta

interface StyledSplashTextProps extends SplashTextProps {
  backgroundColor: string
  textColor: string
  fontSize: number
  fontFamily: string
}

const Template: Story<StyledSplashTextProps> = ({
  backgroundColor,
  textColor,
  fontSize,
  fontFamily,
  ...args
}) => (
  <ThemeProvider
    theme={{
      splashScreenText: {
        backgroundColor: `${backgroundColor || 'lightgrey'}`,
        color: `${textColor || 'black'}`,
        fontSize: fontSize || 1,
        fontFamily: `${fontFamily || 'Arial'}`,
      },
    }}
  >
    <SplashText {...args} />
  </ThemeProvider>
)

export const Basic = Template.bind({})

Basic.args = {
  title: 'Title',
  text: 'p1 <b>test test test test </b>p2 <br/>p3',
  backgroundColor: 'lightgrey',
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
