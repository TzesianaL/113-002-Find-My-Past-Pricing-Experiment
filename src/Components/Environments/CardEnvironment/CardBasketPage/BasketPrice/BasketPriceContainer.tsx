import React, { FC, useEffect } from 'react'
import { getCost } from 'redux/reducers/logicStore/logicStore.selectors'
import { OutputTypes, addOutput } from 'redux/reducers/output/outputSlice'
import { useDispatch, useSelector } from 'react-redux'
import { BasketPriceContainerStyle } from './BasketPriceContainerStyle'
import Price from 'Components/Shared/Price/Price'

interface BasketPriceContainerProps {
  prePriceText?: string
  postPriceText?: string
  upfrontPrice?: number
}

const BasketPriceContainer: FC<BasketPriceContainerProps> = ({
  prePriceText,
  postPriceText,
  upfrontPrice,
}) => {
  // Based on the page route PCW or Behaviourlab, price should be taken from the relevant selector-- needs modification when PCW redux store is ready
  const { totalBasketPrice } = useSelector(getCost)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.totalMonthlyPayment,
        value: totalBasketPrice.toFixed(2).toString(),
      })
    )
  }, [dispatch, totalBasketPrice])
  return (
    <BasketPriceContainerStyle>
      {prePriceText && (
        <div dangerouslySetInnerHTML={{ __html: prePriceText }} />
      )}
      <br />

      <div
        style={{
          display: 'flex',
          margin: 'auto',
          fontSize: '25px',
          fontWeight: '600',
        }}
      >
        <span>Total amount due today :&nbsp;</span>
        <span> £{totalBasketPrice.toFixed(2)}</span>
      </div>

      {postPriceText && (
        <div dangerouslySetInnerHTML={{ __html: postPriceText }} />
      )}
    </BasketPriceContainerStyle>
  )
}

export default BasketPriceContainer
