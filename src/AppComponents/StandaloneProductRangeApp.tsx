import React, { FC, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadDataFromFile,
  setCondition,
} from 'redux/reducers/dataStore/dataStore'
import dataFileState from 'assets/data/data'
import ProductRange from 'Components/Environments/CardEnvironment/ProductRange/ProductRange'
import { OutputSection } from 'output/outputSection'
import { useEFSData } from '@dectech/react-library'
import { selectTheme } from '../redux/reducers/dataStore/dataStore.selectors'

export const StandaloneProductRangeApp: FC = () => {
  const { condition } = useEFSData<{
    condition: number
  }>()

  if (!condition) {
    throw new Error(
      'showProductRangeOnly is true but not condition is defined.'
    )
  }

  const [isReady, setReady] = useState(false)
  const dispatch = useDispatch()

  const theme = useSelector(selectTheme)

  useEffect(() => {
    dispatch(loadDataFromFile(dataFileState))
    dispatch(setCondition(condition))
    setReady(true)
  }, [dispatch, condition, setReady])

  if (!isReady) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <ProductRange />
      <OutputSection />
    </ThemeProvider>
  )
}
