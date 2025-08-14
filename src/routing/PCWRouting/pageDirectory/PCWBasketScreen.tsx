import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import PCWBasketPage from 'Components/Environments/PCW/PCWBasketPage/PCWBasketPage'

import {
  selectBannerData,
  selectPCWSchema,
} from 'redux/reducers/dataStore/dataStore.selectors'
import { getPCWProductInBasket } from 'redux/reducers/logicStore/logicStore.selectors'

const PCWBasketScreen: FC = () => {
  const bannerData = useSelector(selectBannerData)
  const basketItems = useSelector(getPCWProductInBasket)
  const pcwSchema = useSelector(selectPCWSchema)
  return (
    <PCWBasketPage
      logo={bannerData.logoSrc}
      text={bannerData.text}
      pcwCardproperties={basketItems}
      schema={pcwSchema}
    />
  )
}

export default PCWBasketScreen
