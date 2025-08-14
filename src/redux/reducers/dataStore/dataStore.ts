import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import cloneDeep from 'lodash-es/cloneDeep'
import { DataStateType, DataFileType, BlockEnums } from 'types'
import { rehydrateFromJSON } from '../../globalActions/globalActions'

export const initialState: DataStateType = {
  dataLoaded: false,
  condition: -1,
  speedItems: [],
  storeLogoSrc: '',
  storeName: 'Queen Carlotta`s undefined Store!',
  splash: {
    title: '',
    items: [],
  },
  storeItems: [],
  theme: {},
  storeAddons: [],
  addonLayout: { blockType: BlockEnums.Null },
  pcwData: [],
  pcwSchema: [],
}

const dataStoreSlice = createSlice({
  name: 'dataStore',
  initialState,
  reducers: {
    setCondition(state, action: PayloadAction<number>) {
      if (state.dataLoaded === false) {
        throw new Error('No data file loaded')
      }

      const condition = action.payload

      if (condition > 0 && !state.conditionsData) {
        throw new Error('No condition data loaded')
      }

      // If we have condition data, then merge it in
      // At least, it should merge the data in, rather than just replace en-masse...
      if (state.conditionsData) {
        const conditionData = state.conditionsData[condition]

        if (!conditionData) {
          throw new Error(`Condition ${condition} not found in loaded data`)
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { conditionName, ...restConditions } =
          state.conditionsData[condition]

        return {
          ...state,
          ...restConditions,
          condition,
        }
      }

      return {
        ...state,
        condition,
      }
    },
    loadDataFromFile(state, action: PayloadAction<DataFileType>) {
      if (state.dataLoaded) {
        throw new Error('Data file already loaded')
      }

      // This should be an action which takes the data file from some variable???
      const dataFromFile = cloneDeep(action.payload)
      const { conditions, ...rest } = dataFromFile

      return {
        ...state,
        ...rest,
        conditionsData: { ...conditions },
        dataLoaded: true,
      }
    },
    setRandomCondition(state) {
      if (state.dataLoaded === false) {
        throw new Error('No data file loaded')
      }

      // Set to baseline if there's no conditionsData
      if (!state.conditionsData) {
        return {
          ...state,
          condition: 0,
        }
      }

      // pick a random condition from the list
      const conditionKeys = Object.keys(state.conditionsData).map(Number)
      const chosenConditionKeyIndex = Math.floor(
        Math.random() * conditionKeys.length
      )
      const chosenConditionKey = conditionKeys[chosenConditionKeyIndex]
      const chosenCondition = state.conditionsData[chosenConditionKey]

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { conditionName, ...restConditions } = chosenCondition

      return {
        ...state,
        ...restConditions,
        condition: chosenConditionKey,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rehydrateFromJSON, (state, action) => {
      const newState: { data?: DataStateType } = JSON.parse(action.payload)
      return newState.data || state
    })
  },
})

export const { setCondition, loadDataFromFile, setRandomCondition } =
  dataStoreSlice.actions
export const { reducer: dataStoreReducer } = dataStoreSlice
