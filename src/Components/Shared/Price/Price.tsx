import React, { FC } from 'react'
import { getPeriodText } from 'functions/functions'
import { Periods } from 'types'
import { getSelectedCondition } from 'redux/reducers/dataStore/dataStore.selectors'
import { useSelector } from 'react-redux'
import { getCost } from 'redux/reducers/logicStore/logicStore.selectors'
import { CSSProperties } from 'styled-components'
import { PriceStyle } from './PriceStyle'

export interface PriceProps {
  /**
   * String variable stores the price and currency
   */
  price: number
  currency?: string
  priceString?: string
  newPrice?: number
  pricePeriod?: Periods
  style?: CSSProperties
  id?: string
}

/**
 * Price component is used to display the price and currency.
 * PriceStyle is used to style the component.
 */
const Price: FC<PriceProps> = ({
  price,
  currency = 'GBP',
  priceString = 'month',
  newPrice,
  pricePeriod,
  style,
  id,
}) => {
  const cost = useSelector(getCost)

  const selectedCondition = useSelector(getSelectedCondition)

  // let priceToShow = '0'

  // if (price !== undefined) {
  //   priceToShow = new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency,
  //   }).format(price)
  // }

  // if (price === undefined && priceString === undefined) {
  //   throw Error('Price component was used without any price')
  // }

  if (priceString === undefined && price !== undefined && price !== null) {
    const oldPriceOutput = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price)
    if (newPrice !== undefined && newPrice !== null) {
      const newPriceOutput = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
      }).format(newPrice)

      return (
        <PriceStyle style={style}>
          <del>{oldPriceOutput}</del>- Now {newPriceOutput}
          {pricePeriod && ` ${getPeriodText(pricePeriod)}`}
        </PriceStyle>
      )
    }

    return (
      <PriceStyle style={style}>
        {oldPriceOutput}
        {pricePeriod && ` ${getPeriodText(pricePeriod)}`}
      </PriceStyle>
    )
  }

  return (
    <PriceStyle style={style}>
      <strong>£{price.toFixed()}</strong> &nbsp;{' '}
      <span className="pricePeriodPlaceHolder">
        {' '}
        {pricePeriod && ` ${getPeriodText(pricePeriod)}`}
      </span>
      &nbsp;
    </PriceStyle>
  )
}

export default Price
