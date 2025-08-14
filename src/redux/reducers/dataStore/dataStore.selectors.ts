import { createSelector } from '@reduxjs/toolkit'
import cloneDeep from 'lodash-es/cloneDeep'
import { selectDataStore, selectLogicStore } from '../root.selectors'

const selectBannerLogo = createSelector(
  selectDataStore,
  (data) => data.storeLogoSrc
)

const selectBannerText = createSelector(
  selectDataStore,
  (data) => data.storeName
)

export const selectBannerData = createSelector(
  selectBannerLogo,
  selectBannerText,
  (logoSrc, text) => ({
    logoSrc,
    text,
  })
)

// splash data

export const selectSplashData = createSelector(
  selectDataStore,
  (data) => data.splash
)

// storeItems

export const selectStoreItems = createSelector(
  selectDataStore,
  (data) => data.storeItems
)

// speedItems
export const selectSpeedItems = createSelector(
  selectDataStore,
  (data) => data.speedItems
)

// Page Options

export const selectStorePageOptions = createSelector(
  selectDataStore,
  (data) => data.storePageOptions
)

export const selectAddonPageOptions = createSelector(
  selectDataStore,
  (data) => data.addonPageOptions
)

export const selectBasketPageOptions = createSelector(
  selectDataStore,
  (data) => data.basketPageOptions
)

// Condition based selectors

export const getNumberOfConditions = createSelector(selectDataStore, (data) => {
  if (!data.dataLoaded) {
    throw Error('No data file loaded')
  }

  if (!data.conditionsData) {
    return 0
  }

  return Object.keys(data.conditionsData).length
})

export const getSelectedCondition = createSelector(
  selectDataStore,
  (data) => data.condition
)

export const getAllAddons = createSelector(
  selectDataStore,
  (data) => data.storeAddons
)

export const getAddonLayout = createSelector(
  selectDataStore,
  (data) => data.addonLayout
)

export const selectTheme = createSelector(selectDataStore, (data) => data.theme)

export const selectPCWData = createSelector(
  selectDataStore,
  (data) => data.pcwData
)

export const selectPCWSchema = createSelector(
  selectDataStore,
  (data) => data.pcwSchema
)

export const selectSortedPCWData = createSelector(
  selectPCWData,
  selectLogicStore,
  (dataset, logicStore) => {
    const { sortedByKey } = logicStore
    if (sortedByKey === undefined) {
      return dataset
    }

    return cloneDeep(dataset).sort((a, b) => {
      const aCell = a.cells.find((cell) => cell.id === sortedByKey)
      const bCell = b.cells.find((cell) => cell.id === sortedByKey)

      if (aCell === undefined && bCell === undefined) {
        return 0
      }

      if (aCell === undefined) {
        return 1
      }

      if (bCell === undefined) {
        return -1
      }

      if (aCell.value && bCell.value) {
        return aCell.value - bCell.value
      }
      if (aCell.value) return 1
      if (bCell.value) return -1

      return (aCell.text || '').localeCompare(bCell.text || '')
    })
  }
)
