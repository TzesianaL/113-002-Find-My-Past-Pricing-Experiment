import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Periods } from 'types'
import Card, {
  CardProps,
} from 'Components/Environments/CardEnvironment/Card/Card'
import cardHeader from '../images/cardHeader.png'

export default {
  title: 'Environments/Card Environment/Cards/Card',
  component: Card,
} as Meta

interface StoryProps extends CardProps {
  cardImage?: string
  cardHeight?: number
  cardWidth?: number
  textColor?: string
  titleColor?: string
  subtitleColor?: string
  backgroundColor?: string
  buttonColor?: string
  buttonTextColor?: string
  purchaseButtonText?: string
  pricePeriod?: Periods
  highlightedText?: string
}

const Template: Story<StoryProps> = ({
  cardHeight,
  cardWidth,
  textColor,
  titleColor,
  subtitleColor,
  ...args
}) => (
  <ThemeProvider
    theme={{
      titleColor: `${titleColor || '#6300AA'}`,
      subtitleColor: `${subtitleColor || '#ffffff'}`,

      card: {
        color: `${textColor || '#6300AA'}`,
        height: `${cardHeight}px`,
        width: `${cardWidth || 170}px`,
      },
    }}
  >
    <div style={{ marginTop: '4em' }}>
      <Card {...args} />
    </div>
  </ThemeProvider>
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Item Title',
  subtitle: 'Subtitle',
  price: 19.99,
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
}
Basic.argTypes = {
  backgroundColor: { table: { disable: true } },
  textColor: { table: { disable: true } },
  buttonColor: { table: { disable: true } },
  buttonTextColor: { table: { disable: true } },
}

export const Styleable = Template.bind({})
Styleable.args = {
  cardImage: cardHeader,
  cardHeight: 370,
  cardWidth: 170,
  textColor: '#6300AA',
  titleColor: '#6300AA',
  subtitleColor: '#ffffff',
  backgroundColor: '#D8D2E8',
  buttonColor: '#FF6EFF',
  buttonTextColor: '#ffffff',
  title: 'Item Title',
  subtitle: 'Subtitle',
  price: 19.99,
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
}

Styleable.argTypes = {
  cardHeight: {
    control: {
      type: 'range',
      min: 290,
      max: 400,
      step: 1,
    },
  },
  cardWidth: {
    control: {
      type: 'range',
      min: 170,
      max: 400,
      step: 1,
    },
  },
  textColor: {
    control: 'color',
  },
  titleColor: {
    control: 'color',
  },
  subtitleColor: {
    control: 'color',
  },
  backgroundColor: {
    control: 'color',
  },
  buttonColor: {
    control: 'color',
  },
  buttonTextColor: {
    control: 'color',
  },
}

export const Highlighted = Template.bind({})
Highlighted.args = {
  title: 'Item Title',
  subtitle: 'Subtitle',
  price: 19.99,
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  highlightedText: 'Recommended',
}
Highlighted.argTypes = {
  backgroundColor: { table: { disable: true } },
  textColor: { table: { disable: true } },
  buttonColor: { table: { disable: true } },
  buttonTextColor: { table: { disable: true } },
}
