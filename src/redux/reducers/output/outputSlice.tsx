import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { rehydrateFromJSON } from '../../globalActions/globalActions'

export enum OutputTypes {
  condition,
  selectedItemID,
  itemOrderShown,
  numberOfItemsShown,
  skipCardPage,
  reachedBasket,
  emptyBasket,
  timeSpentPerPage,
  speedCardSelected,
  selectedAddons,
  // PCW outputs
  pcwMoreInfoClicked,
  pcwSortedproductList,
  answers,
  wifiWalk,
  speedBoost,
  totalMonthlyPayment,
  bundle,
  cardPrice,
  addonPrice,
  contractLength,
}

interface OutputStoreType {
  [key: number]: string
}

export const initialState: OutputStoreType = {
  [OutputTypes.skipCardPage]: '0',
  [OutputTypes.reachedBasket]: '0',
  [OutputTypes.emptyBasket]: '0',
  [OutputTypes.condition]: '0',
  [OutputTypes.selectedItemID]: '0',
  [OutputTypes.itemOrderShown]: '0',
  [OutputTypes.timeSpentPerPage]: '0',
  [OutputTypes.numberOfItemsShown]: '0',
  [OutputTypes.pcwMoreInfoClicked]: '0',
  [OutputTypes.pcwSortedproductList]: '0',
}

const outputSlice = createSlice({
  name: 'output',
  initialState,
  reducers: {
    addOutput: (
      state,
      action: PayloadAction<{ key: OutputTypes; value: string }>
    ) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rehydrateFromJSON, (state, action) => {
      const newState: { output?: OutputStoreType } = JSON.parse(action.payload)
      return newState.output || state
    })
  },
})

export const { reducer: outputStoreReducer } = outputSlice
export const { addOutput } = outputSlice.actions
