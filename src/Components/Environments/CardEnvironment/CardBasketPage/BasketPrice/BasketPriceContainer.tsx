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
  const { totalMonthlyBasketPrice, totalBasketPrice } = useSelector(getCost)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.totalMonthlyPayment,
        value: totalMonthlyBasketPrice.toFixed(2).toString(),
      })
    )
  }, [dispatch, totalMonthlyBasketPrice])
  return (
    <BasketPriceContainerStyle>
      {prePriceText && (
        <div dangerouslySetInnerHTML={{ __html: prePriceText }} />
      )}
      <br />
      {totalBasketPrice !== 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '18px',
            fontWeight: '600',
            marginTop: '10px',
          }}
        >
          <span>Total Price:&nbsp;</span>
          <span> £{totalBasketPrice.toFixed(2)}</span>
        </div>
      )}
      {totalMonthlyBasketPrice !== 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          <span>Total Monthly Price:&nbsp; </span>
          <span> &nbsp;£{totalMonthlyBasketPrice.toFixed(2)}</span>
        </div>
      )}

      {postPriceText && (
        <div dangerouslySetInnerHTML={{ __html: postPriceText }} />
      )}
    </BasketPriceContainerStyle>
  )
}

export default BasketPriceContainer
