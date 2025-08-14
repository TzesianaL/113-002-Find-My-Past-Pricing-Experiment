import React, { FC, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEFSData } from '@dectech/react-library'

import { StandaloneBasket } from 'Components/Environments/CardEnvironment/CardBasketPage/StandaloneBasket'
import { rehydrateFromJSON } from 'redux/globalActions/globalActions'
import { selectTheme } from '../redux/reducers/dataStore/dataStore.selectors'

export const StandaloneBasketApp: FC = () => {
  const { reduxStores } = useEFSData<{
    reduxStores: string
  }>()
  const [isReady, setReady] = useState(false)
  const dispatch = useDispatch()

  // Rehydrate the Redux stores from the reduxStores object
  useEffect(() => {
    dispatch(rehydrateFromJSON(decodeURIComponent(reduxStores)))
    setReady(true)
  }, [dispatch, reduxStores])

  const theme = useSelector(selectTheme)

  if (!isReady) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StandaloneBasket />
    </ThemeProvider>
  )
}
