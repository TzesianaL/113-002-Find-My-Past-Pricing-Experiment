import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { selectBannerData } from 'redux/reducers/dataStore/dataStore.selectors'
import { addPCWItemsToBasket } from 'redux/reducers/logicStore/logicStore'
import { useScrollToTop } from 'hooks/useScrollToTop'
import { usePageDuration } from 'hooks/usePageDuration'
import PCWPage from 'Components/Environments/PCW/PCWPage/PCWPage'

interface TableScreenProps {
  nextPath: string
}

const PCWTableScreen: FC<TableScreenProps> = ({ nextPath: nextPage }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const bannerData = useSelector(selectBannerData)
  const stopDuration = usePageDuration('productPage')

  const handleProductSelected = (id: string): void => {
    dispatch(addPCWItemsToBasket(id))
    dispatch(addOutput({ key: OutputTypes.selectedItemID, value: id }))
    stopDuration()
    history.push(nextPage)
  }

  useScrollToTop()

  return (
    <PCWPage
      onSelect={handleProductSelected}
      logo={bannerData.logoSrc}
      text={bannerData.text}
    />
  )
}

export default PCWTableScreen
