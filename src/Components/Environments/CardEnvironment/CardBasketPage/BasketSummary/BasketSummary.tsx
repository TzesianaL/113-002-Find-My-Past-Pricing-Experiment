import React, { FC } from 'react'
import { CardItem, AddonData, Periods } from 'types'
import BasketPriceContainer from '../BasketPrice/BasketPriceContainer'
import BasketCard from '../BasketCard/BasketCard'
import BasketAddonCard from '../BasketAddonCard'
import { BasketSummaryStyle } from './BasketSummaryStyle'
import { useSelector } from 'react-redux'
import { get } from 'http'
import { getBasketSpeedItem } from 'redux/reducers/logicStore/logicStore.selectors'

interface BasketSummaryProps {
  item: CardItem
  addons: AddonData[]
  prePriceText?: string
  postPriceText?: string
  convertedPricePeriod?: Periods
}

export const BasketSummary: FC<BasketSummaryProps> = ({
  item,
  addons,
  prePriceText,
  postPriceText,
  convertedPricePeriod,
}) => {
  const selectedSpeed = useSelector(getBasketSpeedItem)

  return (
    <BasketSummaryStyle>
      <h2>Your Basket</h2>
      <BasketCard
        cardImage={item.headerImage}
        // speed={selectedSpeed.mainSpeed}
        title={item.title}
        subtitle={item.subtitle}
        price={item.price}
        upfrontPrice={item.upfrontPrice || 0}
      />

      {addons.length > 0 && <h2>Add ons</h2>}
      <BasketAddonCard
        selectedAddons={addons}
        convertedPricePeriod={convertedPricePeriod}
      />

      <BasketPriceContainer
        prePriceText={prePriceText}
        postPriceText={postPriceText}
        upfrontPrice={item.upfrontPrice || 0}
      />
    </BasketSummaryStyle>
  )
}
