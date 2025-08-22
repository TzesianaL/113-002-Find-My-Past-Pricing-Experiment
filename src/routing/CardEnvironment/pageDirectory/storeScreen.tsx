import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEFSContinue } from 'hooks/useEFSContinue'
import {
  selectBannerData,
  selectSpeedItems,
  selectStoreItems,
  selectStorePageOptions,
} from 'redux/reducers/dataStore/dataStore.selectors'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import {
  addDurationToBasket,
  addItemToBasket,
  addPriceToBasket,
  addSpeedItemToBasket,
  addMonthlyPriceToBasket,
} from 'redux/reducers/logicStore/logicStore'
import { useScrollToTop } from 'hooks/useScrollToTop'
import { usePageDuration } from 'hooks/usePageDuration'
import StorePage from 'Components/Environments/CardEnvironment/StorePage/StorePage'

const StoreScreen: FC = () => {
  const { EFSSubmit } = useEFSContinue()
  const history = useHistory()
  const dispatch = useDispatch()

  const { logoSrc: bannerLogoSrc, text: bannerText } =
    useSelector(selectBannerData)

  const storeItems = useSelector(selectStoreItems)

  const speedItems = useSelector(selectSpeedItems)
  const storePageOptions = useSelector(selectStorePageOptions)

  const [shouldExitToEFS, setShouldExitToEFS] = useState(false)

  const handleOnCancel = (): void => {
    dispatch(addOutput({ key: OutputTypes.skipCardPage, value: 'true' }))
    // history.push('/addOnPage')
    setTimeout(() => setShouldExitToEFS(true), 20)
  }
  // THIS VARIABLE SHOULD COME FROM DATA WHEN ADD ONs DATA STRUCTURE HAS BEEN CREATED
  // const showAddonsPage = true

  const handleCardItemSelected = (
    id: string,
    price: number,
    duration: string,
    monthlyPrice: number
  ): void => {
    dispatch(addItemToBasket(id))
    dispatch(addPriceToBasket(price))
    dispatch(addDurationToBasket(duration))
    dispatch(addMonthlyPriceToBasket(monthlyPrice))
    dispatch(addOutput({ key: OutputTypes.selectedItemID, value: id }))
    history.push('/addOnPage')
  }

  const handleSpeedItemSelected = (id: string): void => {
    dispatch(addSpeedItemToBasket(id))
    dispatch(addOutput({ key: OutputTypes.speedCardSelected, value: id }))
  }

  useScrollToTop()

  const stopDuration = usePageDuration('store')

  if (shouldExitToEFS) {
    EFSSubmit()
    return null
  }

  return (
    <StorePage
      bannerLogoSrc={bannerLogoSrc}
      bannerName={bannerText}
      items={storeItems}
      speedItems={speedItems}
      purchaseButtonText={storePageOptions?.purchaseButtonText}
      hidePrice={storePageOptions?.hidePrice}
      introText={storePageOptions?.introText}
      footerText={storePageOptions?.footerText}
      showCancelButton={storePageOptions?.showCancelButton}
      onCancel={() => {
        stopDuration()
        handleOnCancel()
      }}
      onSelect={handleCardItemSelected}
      onSpeedSelect={handleSpeedItemSelected}
    />
  )
}

export default StoreScreen
