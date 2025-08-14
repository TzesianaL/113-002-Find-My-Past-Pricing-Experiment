import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {
  getAddonsInBasket,
  getFirstBasketItem,
} from 'redux/reducers/logicStore/logicStore.selectors'
import { BasketCardWrapper } from './BasketCard/BasketCardStyle'
import { BasketPageStyle } from '../../../Shared/BasketPage/BasketPageStyle'
import { BasketSummary } from './BasketSummary/BasketSummary'

export const StandaloneBasket: FC = () => {
  const basketItem = useSelector(getFirstBasketItem)
  const addons = useSelector(getAddonsInBasket)

  return (
    <BasketPageStyle>
      <BasketCardWrapper>
        <BasketSummary
          item={basketItem}
          addons={addons}
          prePriceText={basketItem.basketOptions?.prePriceText}
          postPriceText={basketItem.basketOptions?.postPriceText}
        />
      </BasketCardWrapper>
    </BasketPageStyle>
  )
}
