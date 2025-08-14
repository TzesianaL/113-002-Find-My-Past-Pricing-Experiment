import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'
import {
  addItemToBasket,
  emptyBasket,
  addAddonToBasket,
} from '../logicStore/logicStore'

export const initialState: string[] = []

const actionLogStoreSlice = createSlice({
  name: 'actionLogStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addItemToBasket, (state, action) => {
      state.push(`Added ${action.payload}`)
    })
    builder.addCase(emptyBasket, (state) => {
      state.push('Basket Emptied')
    })
    builder.addCase(addAddonToBasket, (state, action) => {
      state.push(`Added ${action.payload} addon`)
    })
  },
})

export const { reducer: actionLogStoreReducer } = actionLogStoreSlice

export const getActionLog = (state: RootState): string => {
  return state.actionLog.join(',')
}
