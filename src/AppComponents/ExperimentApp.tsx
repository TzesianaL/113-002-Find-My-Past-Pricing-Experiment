import React, { FC, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadDataFromFile,
  setCondition,
  setRandomCondition,
} from 'redux/reducers/dataStore/dataStore'
import { getEnvironmentJourney } from 'functions/functions'
import { useEFSData } from '@dectech/react-library'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { HashRouter as Router } from 'react-router-dom'
import dataFileState from 'assets/data/data'
import { EnvironmentType } from 'types'
import { OutputSection } from 'output/outputSection'
import {
  selectTheme,
  getSelectedCondition,
} from '../redux/reducers/dataStore/dataStore.selectors'

export const ExperimentApp: FC = () => {
  const { condition, debugSelectCondition, useRandomCondition, environment } =
    useEFSData<{
      condition: number
      debugSelectCondition: boolean
      useRandomCondition: boolean
      environment: EnvironmentType
    }>()
  const [isReady, setIsReady] = useState(false)
  const dispatch = useDispatch()

  const selectedCondition = useSelector(getSelectedCondition)

  // Handle data loading and condition selection - either loading from the file or using random selection,
  // unless they're going to select the condition manually
  useEffect(() => {
    dispatch(loadDataFromFile(dataFileState))

    // Don't set condition if we are going to do so manually
    // This is a little bit more efficient, and stops having to reset state before subsequent setCondition calls
    // Ideally setCondition should reset to the baseline state first, before updating
    // but this will require caching the initial state
    if (!debugSelectCondition) {
      if (useRandomCondition) {
        dispatch(setRandomCondition())
      } else {
        dispatch(setCondition(condition))
      }
    }
    setIsReady(true)
  }, [dispatch, condition, debugSelectCondition, useRandomCondition])

  // If condition changes in the data store, then store into the output
  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.condition,
        value: String(selectedCondition),
      })
    )
  }, [dispatch, selectedCondition])

  const theme = useSelector(selectTheme)

  const Journey = getEnvironmentJourney(environment)

  if (!isReady) {
    return <></>
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Journey />
      </Router>
      <OutputSection />
    </ThemeProvider>
  )
}
