import React, { FC } from 'react'
import { useEFSData } from '@dectech/react-library'
import { StandaloneProductRangeApp } from './AppComponents/StandaloneProductRangeApp'
import { ExperimentApp } from './AppComponents/ExperimentApp'
import { StandaloneBasketApp } from './AppComponents/StandaloneBasketApp'

const App: FC = () => {
  const { showStandaloneBasket, showProductRangeOnly } = useEFSData<{
    showStandaloneBasket?: boolean
    showProductRangeOnly?: boolean
  }>()
  if (showStandaloneBasket) {
    return <StandaloneBasketApp />
  }

  if (showProductRangeOnly) {
    return <StandaloneProductRangeApp />
  }

  return <ExperimentApp />
}

export default App
