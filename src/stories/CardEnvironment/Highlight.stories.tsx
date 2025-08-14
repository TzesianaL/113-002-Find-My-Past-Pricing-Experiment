import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import CardHighlight from 'Components/Environments/CardEnvironment/CardHighlight/CardHighlight'

export default {
  title: 'Environments/Card Environment/Cards/Highlight',
  component: CardHighlight,
} as Meta

interface StoryProps {
  highlightText: string
  cardWidth?: number
  color?: string
  backgroundColor?: string
  borderColor?: string
  borderWidth?: number
  borderRadius?: number
}

const Template: Story<StoryProps> = ({
  cardWidth,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  highlightText,
}) => (
  <ThemeProvider
    theme={{
      card: {
        width: `${cardWidth}px`,
        border: `solid ${borderWidth}px`,
        borderColor,
        borderRadius: `${borderRadius}em`,
      },
      highlight: {
        backgroundColor,
        color,
      },
    }}
  >
    <div
      style={{
        position: 'relative',
        width: '200px',
        marginTop: '4em',
        marginLeft: '2em',
      }}
    >
      <CardHighlight>{highlightText}</CardHighlight>
    </div>
  </ThemeProvider>
)

export const Basic = Template.bind({})
Basic.args = {
  highlightText: 'Most Popular',
  borderWidth: 2,
  borderRadius: 2,
  cardWidth: 180,
}
Basic.argTypes = {
  color: { control: 'color' },
  backgroundColor: { control: 'color' },
  borderColor: { control: 'color' },
}
