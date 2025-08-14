import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import Button, { ButtonProps } from 'Components/Shared/Button/Button'

export default {
  title: 'Shared/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click Me</Button>
)

export const Basic = Template.bind({})

Basic.argTypes = {}

interface StyledButtonProps extends ButtonProps {
  buttonColor: string
  textColor: string
}

const StyledTemplate: Story<StyledButtonProps> = ({
  buttonColor,
  textColor,
  ...args
}) => (
  <ThemeProvider
    theme={{
      button: {
        color: textColor,
        backgroundColor: buttonColor,
      },
    }}
  >
    <Button {...args}>Click Me</Button>
  </ThemeProvider>
)

export const Styled = StyledTemplate.bind({})
Styled.args = {
  buttonColor: '#003D59',
  textColor: '#ffffff',
}
Styled.argTypes = {
  buttonColor: { control: 'color' },
  textColor: { control: 'color' },
}
