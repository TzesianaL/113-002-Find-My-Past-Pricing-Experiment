import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import StorePage from 'Components/Environments/CardEnvironment/StorePage/StorePage'
import { ThemeProvider } from 'styled-components'
import AIALogo from 'images/logos/aia-logo.png'
import { CardItem } from 'types'
import testLogo from '../images/logo.png'
import { AiaCardItems } from './__fixtures__/aia.fixtures'
import { testItems } from './__fixtures__/card.fixtures'

export default {
  title: 'Environments/Card Environment/Store/StorePage',
  component: StorePage,
  argTypes: {
    onCancel: { action: 'cancelled' },
  },
} as Meta

const Template: Story<{
  onCancel: () => void
  onSelect: () => void
  items: CardItem[]
  introText?: string
  bannerLogoSrc?: string
  bannerName?: string
  purchaseButtonText?: string
  showCancelButton?: boolean
  cancelButtonText?: string
}> = ({
  onCancel,
  items,
  introText,
  bannerLogoSrc,
  bannerName,
  purchaseButtonText,
  showCancelButton,
  cancelButtonText,
}) => (
  <ThemeProvider
    theme={{
      card: {
        height: '350px',
      },
    }}
  >
    <StorePage
      bannerLogoSrc={bannerLogoSrc}
      bannerName={bannerName}
      items={items}
      introText={introText}
      onCancel={onCancel}
      purchaseButtonText={purchaseButtonText}
      onSelect={() => {}}
      showCancelButton={showCancelButton}
      cancelButtonText={cancelButtonText}
    />
  </ThemeProvider>
)

// #region Basic Version
export const Basic = Template.bind({})
Basic.args = {
  items: testItems,
  bannerLogoSrc: testLogo,
}

Basic.argTypes = {
  items: { table: { disable: false } },
  bannerLogoSrc: { table: { disable: true } },
  bannerName: { table: { disable: true } },
}
// #endregion

// #region AIA_Example
// Now set up for the AIA example
const AIATemplate: Story<{
  onCancel: () => void
  items: CardItem[]
  introText?: string
  bannerLogoSrc?: string
  bannerName?: string
  bannerColor?: string
  cardHeight?: number
  cardWidth?: number
  cardBorderWidth?: number
  cardBorderColor?: string
  cardBorderRadius?: number
  titleColor?: string
  subtitleColor?: string
  bannerBackgroundColor?: string
  purchaseButtonText?: string
  showCancelButton?: boolean
  cancelButtonText?: string
}> = ({
  onCancel,
  items,
  introText,
  bannerLogoSrc,
  bannerName,
  bannerColor,
  cardHeight,
  cardBorderColor,
  cardBorderRadius,
  cardBorderWidth,
  cardWidth,
  titleColor,
  subtitleColor,
  bannerBackgroundColor,
  purchaseButtonText,
  showCancelButton,
  cancelButtonText,
}) => (
  <ThemeProvider
    theme={{
      card: {
        height: `${cardHeight}px`,
        width: `${cardWidth}px`,
        backgroundColor: '#ffbbbb',
        border: `solid ${cardBorderWidth}px`,
        borderColor: cardBorderColor,
        borderRadius: `${cardBorderRadius}em`,
      },

      button: {
        color: '#ffffff',
        backgroundColor: '#D41345',
        activeBackgroundColor: '#d86080',
      },

      banner: {
        color: bannerColor,
        backgroundColor: bannerBackgroundColor,
        fontSize: 1.2,
      },

      fontSize: 1,
      titleFontSize: 1.75,
      subtitleFontSize: 1,
      priceFontSize: 1.2,

      color: '#554344',
      titleColor,
      subtitleColor,

      fontFamily: 'AIAFont, Calibri, sans-serif',
      featureBullet: '⦾', // \u2022',
    }}
  >
    <StorePage
      bannerLogoSrc={bannerLogoSrc}
      bannerName={bannerName}
      introText={introText}
      items={items}
      purchaseButtonText={purchaseButtonText}
      onCancel={onCancel}
      onSelect={() => {}}
      showCancelButton={showCancelButton}
      cancelButtonText={cancelButtonText}
    />
  </ThemeProvider>
)
export const AIA = AIATemplate.bind({})

AIA.args = {
  items: AiaCardItems,
  bannerName:
    'Life Insurance - We’re here to help protect your family, your lifestyle and your future',
  bannerLogoSrc: AIALogo,
  cardWidth: 675,
  cardHeight: 620,
  cardBorderColor: '#000000',
  cardBorderWidth: 0,
  cardBorderRadius: 0,
  titleColor: '#554344',
  subtitleColor: '#554344',
  bannerColor: '#ffffff',
  bannerBackgroundColor: '#D41345',
}

AIA.argTypes = {
  items: { table: { disable: false } },
  onCancel: { table: { disable: true } },
  cardWidth: {
    control: {
      type: 'range',
      min: 290,
      max: 1000,
      step: 1,
    },
  },
  cardHeight: {
    control: {
      type: 'range',
      min: 290,
      max: 1000,
      step: 1,
    },
  },
  bannerLogoSrc: { table: { disable: true } },
  cardBorderColor: { control: 'color' },
  titleColor: { control: 'color' },
  subtitleColor: { control: 'color' },
  bannerColor: { control: 'color' },
  bannerBackgroundColor: { control: 'color' },
}
// #endregion
