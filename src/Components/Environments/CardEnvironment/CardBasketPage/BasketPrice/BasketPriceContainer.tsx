import React, { FC, useEffect } from 'react'
import { getCost } from 'redux/reducers/logicStore/logicStore.selectors'
import { OutputTypes, addOutput } from 'redux/reducers/output/outputSlice'
import { AddonData } from 'types'
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
  const price = useSelector(getCost)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.totalMonthlyPayment,
        value: price.toString(),
      })
    )
  }, [dispatch, price])
  return (
    <BasketPriceContainerStyle>
      {prePriceText && (
        <div dangerouslySetInnerHTML={{ __html: prePriceText }} />
      )}
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
        <span> £xx</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '18px',
          fontWeight: '600',
        }}
      >
        <span>Total Monthly Price:&nbsp; </span>
        <span> &nbsp;£{price}</span>
      </div>

      {postPriceText && (
        <div dangerouslySetInnerHTML={{ __html: postPriceText }} />
      )}
    </BasketPriceContainerStyle>
  )
}

export default BasketPriceContainer
