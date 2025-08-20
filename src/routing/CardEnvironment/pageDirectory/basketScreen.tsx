import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CardBasketPage from 'Components/Environments/CardEnvironment/CardBasketPage/CardBasketPage'
import {
  selectBannerData,
  selectBasketPageOptions,
} from 'redux/reducers/dataStore/dataStore.selectors'
import { emptyBasket } from 'redux/reducers/logicStore/logicStore'
import {
  getAddonsInBasket,
  getFirstBasketItem,
} from 'redux/reducers/logicStore/logicStore.selectors'
import { useEFSContinue } from 'hooks/useEFSContinue'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { useScrollToTop } from 'hooks/useScrollToTop'
import { usePageDuration } from 'hooks/usePageDuration'

const BasketScreen: FC = () => {
  const { EFSSubmit } = useEFSContinue()
  const history = useHistory()
  const dispatch = useDispatch()

  const { logoSrc: bannerLogoSrc, text: bannerText } =
    useSelector(selectBannerData)
  const basketItem = useSelector(getFirstBasketItem)
  const basketPageOptions = useSelector(selectBasketPageOptions)
  const addons = useSelector(getAddonsInBasket)
  console.log('basketItem', basketItem)
  console.log('addons', addons)
  const [shouldExitToEFS, setShouldExitToEFS] = useState(false)

  useScrollToTop()
  const stopDuration = usePageDuration('basket')

  const handleBasketEmpty = (): void => {
    dispatch(emptyBasket())
    dispatch(addOutput({ key: OutputTypes.emptyBasket, value: 'true' }))
    dispatch(addOutput({ key: OutputTypes.selectedItemID, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.selectedAddons, value: '0' }))
    history.push('/storePage')
  }

  const handleOnCancel = (): void => {
    setTimeout(() => setShouldExitToEFS(true), 20)
  }

  if (shouldExitToEFS) {
    EFSSubmit()
    return null
  }

  return (
    <CardBasketPage
      bannerLogoSrc={bannerLogoSrc}
      bannerName={bannerText}
      prePriceText={basketItem.basketOptions?.prePriceText}
      postPriceText={basketItem.basketOptions?.postPriceText}
      introText={basketPageOptions?.introText}
      footerText={basketPageOptions?.footerText}
      checkOutButtonText={basketPageOptions?.checkOutButtonText}
      emptyBasketButtonText={basketPageOptions?.emptyBasketButtonText}
      item={basketItem}
      showCancelButton={basketPageOptions?.showCancelButton}
      addons={addons}
      onCancel={() => {
        stopDuration()
        handleOnCancel()
      }}
      onCheckout={() => {
        stopDuration()
        setTimeout(() => setShouldExitToEFS(true), 20)
      }}
      onEmptyBasket={handleBasketEmpty}
      convertedPricePeriod={basketPageOptions?.pagePricePeriod}
    />
  )
}

export default BasketScreen
