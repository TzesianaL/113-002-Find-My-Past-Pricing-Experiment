import React, { FC } from 'react'
import { CardItem, AddonData, Periods } from 'types'
import BasketPriceContainer from '../BasketPrice/BasketPriceContainer'
import BasketCard from '../BasketCard/BasketCard'
import BasketAddonCard from '../BasketAddonCard'
import { BasketSummaryStyle } from './BasketSummaryStyle'
import { useSelector } from 'react-redux'
import { get } from 'http'
import {
  getBasketSpeedItem,
  getCardMonthlyPrice,
  getCardPrice,
  getCost,
  getDuration,
} from 'redux/reducers/logicStore/logicStore.selectors'

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
  const { totalBasketPrice } = useSelector(getCost)
  const duration = useSelector(getDuration)
  const cardPrice = useSelector(getCardPrice)

  return (
    <BasketSummaryStyle>
      <h2 style={{ color: '#242048' }}>Review your basket</h2>
      <BasketCard
        cardImage={item.headerImage}
        title={item.title}
        subtitle={item.subtitle}
        // price={price}
        // upfrontPrice={item.upfrontPrice || 0}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          fontSize: '17px',
          fontWeight: '600',
          paddingTop: '1em',
        }}
      >
        <span>
          Package cost for the first {duration === 'monthly' && 'month'}{' '}
          {duration === 'quarterly' &&
            item.title !== 'Ultimate - Pay Monthly' &&
            'quarter'}{' '}
          {duration === 'annually' &&
            item.title !== 'Ultimate - Pay Monthly' &&
            'year'}
          {duration === 'annually' &&
            item.title === 'Ultimate - Pay Monthly' &&
            'month'}
          {duration === 'quarterly' &&
            item.title === 'Ultimate - Pay Monthly' &&
            'month'}
          :&nbsp;{' '}
        </span>
        <span> &nbsp;£{cardPrice.toFixed(2)}</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0 1em',
          paddingTop: '1em',
          fontSize: '11px',
          width: '100%',
        }}
      >
        <div style={{ width: '330px', textAlign: 'left' }}>
          {duration === 'monthly' &&
            '*Your package subscription will renew automatically every month unless cancelled'}
          {duration === 'quarterly' &&
            item.title !== 'Ultimate - Pay Monthly' &&
            '*Your package subscription will renew automatically every quarter unless cancelled'}
          {duration === 'annually' &&
            item.title !== 'Ultimate - Pay Monthly' &&
            '*Your package subscription will renew automatically every year unless cancelled'}
          {duration === 'quarterly' &&
            item.title === 'Ultimate - Pay Monthly' &&
            '*Your package subscription will be billed every month for 3 months, with no cancellation allowed during this period.'}
          {duration === 'annually' &&
            item.title === 'Ultimate - Pay Monthly' &&
            '*Your package subscription will be billed every month for 12 months, with no cancellation allowed during this period.'}
        </div>
      </div>
      <br />
      {addons.length > 0 && <h2>Add-ons</h2>}
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
