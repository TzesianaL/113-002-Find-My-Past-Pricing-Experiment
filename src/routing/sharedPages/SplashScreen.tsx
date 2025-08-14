import React, { FC, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEFSData } from '@dectech/react-library'
import { usePageDuration } from 'hooks/usePageDuration'
import { setCondition } from 'redux/reducers/dataStore/dataStore'
import {
  selectBannerData,
  selectSplashData,
} from 'redux/reducers/dataStore/dataStore.selectors'
import { ConditionSelectionPage } from 'Components/Shared/ConditionSelection/ConditionSelectionPage'
import dataFileState from 'assets/data/data'
import { useScrollToTop } from 'hooks/useScrollToTop'
import SplashPage from 'Components/Shared/SplashPage/SplashPage'

interface SplashScreenProps {
  nextPath: string
}
const SplashScreen: FC<SplashScreenProps> = ({ nextPath }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { logoSrc: bannerLogoSrc, text: bannerText } =
    useSelector(selectBannerData)

  const { debugSelectCondition } = useEFSData<{
    debugSelectCondition: boolean
  }>()
  const [showConditionSelector, setShowConditionSelector] = useState(true)
  const splashScreenData = useSelector(selectSplashData)

  const handleSplashScreenNextPage = (): void => {
    history.push(nextPath)
  }
  const stopDuration = usePageDuration('splash')

  const handleConditionSelected = useCallback(
    (condition: number) => {
      dispatch(setCondition(condition))
      setShowConditionSelector(false)
      stopDuration()
    },
    [dispatch, stopDuration]
  )
  useScrollToTop()

  if (debugSelectCondition && showConditionSelector) {
    return (
      <ConditionSelectionPage
        dataFile={dataFileState}
        onClick={handleConditionSelected}
      />
    )
  }

  return (
    <SplashPage
      items={splashScreenData.items}
      buttonText="Continue"
      pageTitle={splashScreenData.title}
      storeName={bannerText}
      storeLogo={bannerLogoSrc}
      onClick={handleSplashScreenNextPage}
    />
  )
}

export default SplashScreen
