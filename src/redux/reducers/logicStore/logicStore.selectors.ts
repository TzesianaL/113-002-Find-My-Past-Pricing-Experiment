import { createSelector } from '@reduxjs/toolkit'
import { convertPricePeriods, getPeriodText } from 'functions/functions'
import { selectDataStore, selectLogicStore } from '../root.selectors'
import {
  getAllAddons,
  selectBasketPageOptions,
  selectStoreItems,
  selectPCWData,
  selectSpeedItems,
} from '../dataStore/dataStore.selectors'

export const getFirstBasketItem = createSelector(
  selectLogicStore,
  selectStoreItems,
  (logic, storeItems) => {
    // if (logic.basket.length === 0) {
    //   throw new Error('no items in basket')
    // }
    const lenght = logic.basket.length

    const id = logic.basket[lenght - 1]

    const item = storeItems.find((cardItem) => cardItem.id === id)

    // if (item === undefined) {
    //   throw new Error(`item in basket "${id}" not found in dataStore`)
    // }
    return item
  }
)

export const getBasketItem = createSelector(
  selectLogicStore,
  selectStoreItems,
  (logic, storeItems) => {
    const index = logic.basket.length

    const id = logic.basket[index - 1]
    const item = storeItems.find((cardItem) => cardItem.id === id)
    return item
  }
)

export const getBasketSpeedItem = createSelector(
  selectLogicStore,
  selectSpeedItems,
  (logic, speedItems) => {
    const id = logic.basketSpeedCardId[0]

    const item = speedItems.find((speedItem) => speedItem.id === id)

    return item
  }
)

export const getAddonsInBasket = createSelector(
  selectLogicStore,
  (logic) => logic.basketAddons
)

export const getPCWProductInBasket = createSelector(
  selectLogicStore,
  selectPCWData,
  (logic, tableItems) => {
    const id = logic.pcwPickedProduct[0]
    const product = tableItems.find((row) => row.id === id)
    if (product === undefined) {
      throw new Error(`item in basket "${id} " not found in dataStore`)
    }
    return product
  }
)

export const getAddonsForSelectedItem = createSelector(
  getAllAddons,
  getFirstBasketItem,
  (addons, item) =>
    addons.filter(
      (addon) =>
        (addon.includedProductIDs === undefined ||
          addon.includedProductIDs.some(
            (productID) => productID === item.id
          )) &&
        (addon.excludedProductIDs === undefined ||
          addon.excludedProductIDs.every((productID) => productID !== item.id))
    )
)

/**
 * Check to see if the basket contains any mutex addons
 * @returns boolean Whether there are any mutex addons in the basket
 */
export const selectAnyMutexAddonsInBasket = createSelector(
  getAddonsInBasket,
  (addons) => addons.some((addon) => addon.mutex)
)
export const selectAnyMutexAddonsInBasketGroup4 = createSelector(
  getAddonsInBasket,
  (addons) => addons.some((addon) => addon.mutexGroup4)
)

export const getCostBreakdown = createSelector(
  getFirstBasketItem,
  getAddonsInBasket,
  getBasketSpeedItem,
  selectBasketPageOptions,
  (item, selectedAddons, basketSpeedItem, basketPageOptions) => {
    // sum up the total price of selected addons and card
    let totalBasketPrice = 0

    // sum up total addons price
    if (selectedAddons !== undefined && selectedAddons.length !== 0) {
      totalBasketPrice += selectedAddons.reduce(
        (sum, basketAddon) =>
          sum +
          convertPricePeriods(
            basketAddon.price || 0,
            basketAddon.pricePeriod,
            basketPageOptions?.pagePricePeriod
          ),
        0
      )
    }
    // // sum up speedcard price
    // if (basketSpeedItem !== undefined && basketSpeedItem.price) {
    //   let speedItemPrice = basketSpeedItem.price
    //   speedItemPrice = convertPricePeriods(
    //     speedItemPrice,
    //     basketSpeedItem.pricePeriod,
    //     basketPageOptions?.pagePricePeriod
    //   )
    //   totalBasketPrice += speedItemPrice
    // }

    // add card price to totalBasketPrice
    if (item !== undefined && item.price) {
      let itemPrice = item.price
      itemPrice = convertPricePeriods(
        itemPrice,
        item.pricePeriod,
        basketPageOptions?.pagePricePeriod
      )
      totalBasketPrice += itemPrice
    }

    // When user doesn't select addons we display card priceString in the basket
    if (
      (selectedAddons === undefined || selectedAddons.length === 0) &&
      item?.priceString !== undefined
    ) {
      return item.priceString
    }

    // handle currency conversion
    const totalPriceString = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: item?.currency || 'GBP',
    }).format(totalBasketPrice)

    // add the price period if needed
    let periodString = ''
    if (basketPageOptions?.pagePricePeriod) {
      periodString = ` ${getPeriodText(basketPageOptions?.pagePricePeriod)}`
    } else if (item.pricePeriod) {
      periodString = ` ${getPeriodText(item.pricePeriod)}`
    }

    return `${totalPriceString}${periodString}`
  }
)

export const getMoreInfoClicks = createSelector(
  selectLogicStore,
  (store) => store.pcwMoreInfoClicked
)

export const getSortByHistory = createSelector(
  selectLogicStore,
  (store) => store.sortedByHistory
)

export const getSelectedCondition = createSelector(
  selectDataStore,
  (data) => data.condition
)

export const getCost = createSelector(
  getBasketItem,
  getAddonsInBasket,
  selectBasketPageOptions,
  getBasketSpeedItem,
  (item, selectedAddons, basketPageOptions, basketSpeedItem) => {
    // sum up the total price of selected addons and card
    let totalBasketPrice = 0

    // sum up total addons price
    if (selectedAddons !== undefined && selectedAddons.length !== 0) {
      totalBasketPrice += selectedAddons.reduce(
        (sum, basketAddon) =>
          sum +
          convertPricePeriods(
            basketAddon.price || 0,
            basketAddon.pricePeriod,
            basketPageOptions?.pagePricePeriod
          ),
        0
      )
    }
    // if (basketSpeedItem !== undefined) {
    //   let speedItemPrice = basketSpeedItem.price
    //   speedItemPrice = convertPricePeriods(
    //     speedItemPrice,
    //     basketSpeedItem.pricePeriod,
    //     basketPageOptions?.pagePricePeriod
    //   )
    //   totalBasketPrice += speedItemPrice
    // }

    // add card price to totalBasketPrice
    if (item !== undefined && item.price) {
      let itemPrice = item.price
      itemPrice = convertPricePeriods(
        itemPrice,
        item.pricePeriod,
        basketPageOptions?.pagePricePeriod
      )
      totalBasketPrice += itemPrice
    }

    return totalBasketPrice
  }
)
