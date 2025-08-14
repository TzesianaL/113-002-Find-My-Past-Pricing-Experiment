import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CardBasketPage from 'Components/Environments/CardEnvironment/CardBasketPage/CardBasketPage'
import { ThemeProvider } from 'styled-components'
import AIALogo from 'images/logos/aia-logo.png'
import { CardItem, AddonData } from 'types'
import { Provider } from 'react-redux'
import { preloadedStore } from 'redux/store'
import testLogo from '../images/logo.png'
import { AiaCardItems } from './__fixtures__/aia.fixtures'
import { testItems } from './__fixtures__/card.fixtures'

const addons: AddonData[] = [
  {
    id: 'Addon1',
    title: 'Trauma Cover',
    subtitle: 'What does it include?',
    price: 19.99,
    pricePeriod: 'month',
  },
  {
    id: 'Addon2',
    title: 'Life Cover',
    subtitle: 'What does it include?',
    price: 29.99,
    pricePeriod: 'month',
  },
]

export default {
  title: 'Environments/Card Environment/Basket/BasketPage',
  component: CardBasketPage,
  argTypes: {
    onCheckout: { action: 'Checkout' },
    onEmptyBasket: { action: 'Empty Basket' },
    onCancel: { action: 'Cancel' },
  },
  // decorators: [(story) => <Provider store={store}>{story}</Provider>],
} as Meta

const Template: Story<{
  onCheckout: () => void
  onEmptyBasket: () => void
  prePriceText?: string
  postPriceText?: string
  item: CardItem
  bannerLogoSrc?: string
  bannerName?: string
  checkOutButtonText?: string
  emptyBasketButtonText?: string
  showCancelButton: boolean
  onCancel: () => void
  cancelButtonText?: string
}> = ({
  onCheckout,
  onEmptyBasket,
  prePriceText,
  postPriceText,
  item,
  bannerLogoSrc,
  bannerName,
  checkOutButtonText,
  emptyBasketButtonText,
  showCancelButton,
  onCancel,
  cancelButtonText,
}) => (
  <Provider
    store={preloadedStore({
      logic: { basket: [item.id] },
      data: {
        storeItems: [item],
      },
    })}
  >
    <ThemeProvider
      theme={{
        card: {
          height: '350px',
        },
      }}
    >
      <CardBasketPage
        bannerLogoSrc={bannerLogoSrc}
        bannerName={bannerName}
        prePriceText={prePriceText}
        postPriceText={postPriceText}
        item={item}
        onCheckout={onCheckout}
        onEmptyBasket={onEmptyBasket}
        checkOutButtonText={checkOutButtonText}
        emptyBasketButtonText={emptyBasketButtonText}
        showCancelButton={showCancelButton}
        onCancel={onCancel}
        cancelButtonText={cancelButtonText}
        addons={addons}
      />
    </ThemeProvider>
  </Provider>
)

// #region Basic
export const Basic = Template.bind({})
Basic.args = {
  item: testItems[0],
  bannerLogoSrc: testLogo,
}

Basic.argTypes = {
  bannerLogoSrc: { table: { disable: true } },
  bannerName: { table: { disable: true } },
}
// #endregion

// #region AIA_Example
// Now set up for the AIA example
const AIATemplate: Story<{
  onCheckout: () => void
  onEmptyBasket: () => void
  prePriceText?: string
  postPriceText?: string
  item: CardItem
  bannerLogoSrc?: string
  bannerName?: string
  bannerColor?: string
  cardHeight?: number
  cardWidth?: number
  cardBackgroundColor?: string
  cardBorderWidth?: number
  cardBorderColor?: string
  cardBorderRadius?: number
  titleColor?: string
  subtitleColor?: string
  bannerBackgroundColor?: string
  checkOutButtonText?: string
  emptyBasketButtonText?: string
  onCancel: () => void
  showCancelButton: boolean
  cancelButtonText?: string
}> = ({
  onCheckout,
  onEmptyBasket,
  prePriceText,
  postPriceText,
  item,
  bannerLogoSrc,
  bannerName,
  bannerColor,
  cardHeight,
  cardBackgroundColor,
  cardBorderColor,
  cardBorderRadius,
  cardBorderWidth,
  cardWidth,
  titleColor,
  subtitleColor,
  bannerBackgroundColor,
  checkOutButtonText,
  emptyBasketButtonText,
  onCancel,
  showCancelButton,
  cancelButtonText,
}) => (
  <Provider
    store={preloadedStore({
      logic: { basket: [item.id] },
      data: {
        storeItems: [item],
      },
    })}
  >
    <ThemeProvider
      theme={{
        card: {
          height: `${cardHeight}px`,
          width: `${cardWidth}px`,
          backgroundColor: `${cardBackgroundColor}`,
          border: `solid ${cardBorderWidth}px`,
          borderColor: cardBorderColor,
          borderRadius: `${cardBorderRadius}em`,
        },
        button: {
          color: '#ffffff',
          backgroundColor: '#D41345',
          activeBackgroundColor: '#d86080',
          width: '10em',
        },
        banner: {
          color: bannerColor,
          backgroundColor: bannerBackgroundColor,
          fontSize: 1.2,
        },

        fontSize: 0.9,
        titleFontSize: 2,
        subtitleFontSize: 0.8,
        priceFontSize: 1.2,

        color: '#554344',
        titleColor,
        subtitleColor,

        fontFamily: 'AIAFont, Calibri, sans-serif',
        featureBullet: '⦾', // \u2022',
      }}
    >
      <CardBasketPage
        bannerLogoSrc={bannerLogoSrc}
        bannerName={bannerName}
        item={item}
        prePriceText={prePriceText}
        postPriceText={postPriceText}
        onCheckout={onCheckout}
        onEmptyBasket={onEmptyBasket}
        checkOutButtonText={checkOutButtonText}
        emptyBasketButtonText={emptyBasketButtonText}
        showCancelButton={showCancelButton}
        onCancel={onCancel}
        cancelButtonText={cancelButtonText}
        addons={addons}
      />
    </ThemeProvider>
  </Provider>
)
export const AIA = AIATemplate.bind({})

AIA.args = {
  item: AiaCardItems[0],
  bannerName: 'Basket Page',
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
