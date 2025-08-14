import React, { FC, useState } from 'react'
import { CSSProperties } from 'styled-components'
import PCWBasketCard from 'Components/Environments/PCW/PCWBasketCard/PCWBasketCard'
import { PCWProductData, PCWSchema } from 'types'
import BasketPage from 'Components/Shared/BasketPage/BasketPage'
import { emptyBasket } from 'redux/reducers/logicStore/logicStore'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useScrollToTop } from 'hooks/useScrollToTop'
import { usePageDuration } from 'hooks/usePageDuration'
import { useEFSContinue } from 'hooks/useEFSContinue'

export interface PCWBasketPageProps {
  titleStyle?: CSSProperties
  logo: string
  text?: string
  footerText?: string
  pcwCardproperties: PCWProductData
  schema: PCWSchema[]
}

const PCWBasketPage: FC<PCWBasketPageProps> = ({
  titleStyle,
  logo,
  text,
  footerText,
  pcwCardproperties,
  schema,
}) => {
  useScrollToTop()

  const emptyBasketButtonText = 'Empty Basket'
  const checkOutButtonText = 'Checkout'
  const cancelButtonText = ''

  const stopDuration = usePageDuration('productPage')

  const { EFSSubmit } = useEFSContinue()
  const history = useHistory()
  const dispatch = useDispatch()
  const [shouldExitToEFS, setShouldExitToEFS] = useState(false)

  const handleOnCancel = (): void => {
    stopDuration()
    setTimeout(() => setShouldExitToEFS(true), 20)
  }

  const handleOnCheckout = (): void => {
    stopDuration()
    setTimeout(() => setShouldExitToEFS(true), 20)
  }

  const handleBasketEmpty = (): void => {
    dispatch(emptyBasket())
    dispatch(addOutput({ key: OutputTypes.emptyBasket, value: 'true' }))
    dispatch(addOutput({ key: OutputTypes.selectedItemID, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.bundle, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.cardSpeed, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.answers, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.speedBoost, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.wifiWalk, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.totalMonthlyPayment, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.pcwMoreInfoClicked, value: '0' }))
    dispatch(addOutput({ key: OutputTypes.pcwSortedproductList, value: '0' }))
    history.push('/tableScreen')
  }

  if (shouldExitToEFS) {
    EFSSubmit()
    return null
  }

  return (
    <BasketPage
      bannerLogoSrc={logo}
      bannerName={text}
      titleStyle={titleStyle}
      titleText="Basket"
      introText={undefined}
      footerText={footerText}
      showCancelButton={false}
      onCancel={() => {
        handleOnCancel()
      }}
      onCheckout={() => {
        handleOnCheckout()
      }}
      onEmptyBasket={() => {
        handleBasketEmpty()
      }}
      emptyBasketButtonText={emptyBasketButtonText}
      checkOutButtonText={checkOutButtonText}
      cancelButtonText={cancelButtonText}
      basketContents={
        <PCWBasketCard pcwCardproperties={pcwCardproperties} schema={schema} />
      }
    />
  )
}

export default PCWBasketPage
