import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { selectStoreItems } from 'redux/reducers/dataStore/dataStore.selectors'
import CardGroup from '../CardGroup/CardGroup'
import { StorePageStyle } from '../StorePage/StorePageStyle'

const ProductRange: FC = () => {
  const items = useSelector(selectStoreItems)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.itemOrderShown,
        value: items.map((item) => item.id).toString(),
      })
    )
    const handleCardClick = () => {
      // setCardClick(true)
      console.log('ButtonClicked')
    }
    dispatch(
      addOutput({
        key: OutputTypes.numberOfItemsShown,
        value: String(items.length),
      })
    )
  }, [dispatch, items])

  return (
    <StorePageStyle>
      {/* <CardGroup
        items={items}
        hidePrice={false}
        handleCardClick={handleCardClick}
        purchaseButtonText="No purchase button"
      /> */}
    </StorePageStyle>
  )
}

export default ProductRange
