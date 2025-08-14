import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import CallToAction, {
  CallToActionProps,
} from 'Components/Environments/CardEnvironment/CallToAction/CallToAction'

export default {
  title: 'Environments/Card Environment/CallToAction',
  component: CallToAction,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta

interface TemplateProps extends CallToActionProps {
  buttonColor: string
  buttonTextColor: string
}

const Template: Story<TemplateProps> = ({
  buttonColor,
  buttonTextColor,
  ...args
}) => (
  <ThemeProvider
    theme={{
      button: {
        color: buttonTextColor,
        backgroundColor: buttonColor,
      },
    }}
  >
    <CallToAction {...args} />
  </ThemeProvider>
)

export const CTAButton = Template.bind({})
CTAButton.args = {
  buttonText: 'Purchase',
  buttonColor: '#003D59',
  buttonTextColor: '#ffffff',
}
CTAButton.argTypes = {
  buttonColor: { control: 'color' },
  buttonTextColor: { control: 'color' },
}
