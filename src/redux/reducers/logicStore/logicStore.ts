import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddonData, LogicStateType, SpeedCardItem } from 'types'
import { rehydrateFromJSON } from '../../globalActions/globalActions'

export const initialState: LogicStateType = {
  basket: [],
  price: 0,
  monthlyPrice: 0,
  duration: '',
  itemOrder: [],
  basketAddons: [],
  basketSpeedCardId: [],
  sortedByKey: undefined,
  sortedByHistory: ['default'],
  pcwPickedProduct: [],
  pcwMoreInfoClicked: {},
}

const logicStoreSlice = createSlice({
  name: 'logicStore',
  initialState,
  reducers: {
    addPriceToBasket(state, action: PayloadAction<number>): void {
      state.price = action.payload
    },
    addDurationToBasket(state, action: PayloadAction<string>): void {
      state.duration = action.payload
    },
    addMonthlyPriceToBasket(state, action: PayloadAction<number>): void {
      state.monthlyPrice = action.payload
    },
    addSpeedItemToBasket(state, action: PayloadAction<string>): void {
      state.basketSpeedCardId = [action.payload]
    },

    addItemToBasket(state, action: PayloadAction<string>): void {
      state.basket.push(action.payload)
    },
    addPCWItemsToBasket(state, action: PayloadAction<string>): void {
      state.pcwPickedProduct.push(action.payload)
    },

    emptyBasket(state): void {
      state.basket = []
      state.basketAddons = []
      state.basketSpeedCardId = []
    },

    setItemOrder(state, action: PayloadAction<number[]>): void {
      state.itemOrder = action.payload
    },
    addAddonToBasket(state, action: PayloadAction<AddonData>): void {
      const addonToAdd = action.payload
      const tempArray: AddonData[] = []
      // Add if either this isn't a mutex addon or we don't have a mutex addon in the store already
      if (!addonToAdd.mutex || tempArray.every((addon) => !addon.mutex)) {
        tempArray.push(addonToAdd)
        // state.basketAddons.push(addonToAdd)
      }

      if (
        !addonToAdd.mutexGroup4 ||
        tempArray.every((addon) => !addon.mutexGroup4)
      ) {
        tempArray.push(addonToAdd)
        // state.basketAddons.push(addonToAdd)
      }
      if (
        !addonToAdd.mutexGroup2 ||
        tempArray.every((addon) => !addon.mutexGroup2)
      ) {
        tempArray.push(addonToAdd)
        // state.basketAddons.push(addonToAdd)
      }

      const uniqueArray: AddonData[] = []
      tempArray.forEach((element) => {
        if (!uniqueArray.includes(element)) {
          uniqueArray.push(element)
        }
      })

      uniqueArray.forEach((element) => {
        state.basketAddons.push(element)
      })
    },
    removeAddon(state, action: PayloadAction<AddonData>): void {
      state.basketAddons = state.basketAddons.filter(
        (basketAddon) => basketAddon.id !== action.payload.id
      )
    },

    /**
     * Register that the more info button has been clicked for a particular plan
     *
     * This will increment the number of clicks for that plan by one if it already exists.
     * If not, then it will add the plan to the dictionary and set the number to one.
     */
    addPCWMoreInfoClick(state, action: PayloadAction<string>): void {
      const pageKey = action.payload
      if (state.pcwMoreInfoClicked[pageKey]) {
        state.pcwMoreInfoClicked[pageKey] += 1
      } else {
        state.pcwMoreInfoClicked[pageKey] = 1
      }
    },

    setSortedByKey(state, action: PayloadAction<string>): void {
      state.sortedByKey = action.payload
      state.sortedByHistory?.push(action.payload)
    },

    clearSortedByKey(state): void {
      state.sortedByKey = undefined
      state.sortedByHistory?.push('default')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rehydrateFromJSON, (state, action) => {
      const newState: { logic?: LogicStateType } = JSON.parse(action.payload)
      return newState.logic || state
    })
  },
})

export const {
  addDurationToBasket,
  addPriceToBasket,
  addMonthlyPriceToBasket,
  addItemToBasket,
  addSpeedItemToBasket,
  emptyBasket,
  setItemOrder,
  addAddonToBasket,
  removeAddon,
  addPCWItemsToBasket,
  addPCWMoreInfoClick,
  setSortedByKey,
  clearSortedByKey,
} = logicStoreSlice.actions

export const { reducer: logicStoreReducer } = logicStoreSlice
