import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { merge } from 'lodash-es'
import { ThemeProvider } from 'styled-components'
import { CardItem, AddonData, Periods } from 'types'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import BasketPage from 'Components/Shared/BasketPage/BasketPage'
import { BasketCardWrapper } from './BasketCard/BasketCardStyle'
import { BasketSummary } from './BasketSummary/BasketSummary'

/**
 *
 */
export interface BasketPageProps {
  bannerName?: string
  bannerLogoSrc?: string
  introText?: string
  footerText?: string
  prePriceText?: string
  postPriceText?: string
  checkOutButtonText?: string
  emptyBasketButtonText?: string
  item: CardItem
  showCancelButton?: boolean
  onCheckout: () => void
  onEmptyBasket: () => void
  onCancel?: () => void
  cancelButtonText?: string
  addons: AddonData[]
  convertedPricePeriod?: Periods
}

const CardBasketPage: FC<BasketPageProps> = ({
  bannerLogoSrc,
  bannerName,
  prePriceText,
  postPriceText,
  emptyBasketButtonText,
  introText,
  footerText,
  item,
  showCancelButton,
  onCancel,
  onCheckout,
  onEmptyBasket,
  checkOutButtonText,
  cancelButtonText,
  addons,
  convertedPricePeriod,
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.selectedAddons,
        value: addons?.map((addon) => addon.id).toString(),
      })
    )
    dispatch(
      addOutput({
        key: OutputTypes.addonPrice,
        value: addons?.map((addon) => addon.price).toString(),
      })
    )
  }, [dispatch, addons])

  return (
    <ThemeProvider
      key={item.id}
      theme={(theme) => {
        return merge({}, theme, {
          card: {
            backgroundColor: item.cardColor,
          },
        })
      }}
    >
      <BasketPage
        bannerLogoSrc={bannerLogoSrc}
        bannerName={bannerName}
        introText={introText}
        footerText={footerText}
        showCancelButton={showCancelButton}
        onCancel={onCancel}
        onCheckout={onCheckout}
        onEmptyBasket={onEmptyBasket}
        emptyBasketButtonText={emptyBasketButtonText}
        checkOutButtonText={checkOutButtonText}
        cancelButtonText={cancelButtonText}
        basketContents={
          <BasketCardWrapper>
            <BasketSummary
              item={item}
              addons={addons}
              convertedPricePeriod={convertedPricePeriod}
              prePriceText={prePriceText}
              postPriceText={postPriceText}
            />
          </BasketCardWrapper>
        }
      />
    </ThemeProvider>
  )
}

export default CardBasketPage
