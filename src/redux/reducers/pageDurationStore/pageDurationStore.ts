import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface IncrementDurationPayloadType {
  id: string
  duration: number
}

export const initialState = {}

const pageDurationStoreSlice = createSlice({
  name: 'pageDurationStore',
  initialState,
  reducers: {
    incrementDuration(
      state,
      action: PayloadAction<IncrementDurationPayloadType>
    ) {
      let oldValue = 0
      // if we have the key already in state, then take the value and increment it
      if (Object.prototype.hasOwnProperty.call(state, action.payload.id)) {
        oldValue = state[action.payload.id]
      }

      state[action.payload.id] = oldValue + action.payload.duration
      return state
    },
    resetDuration(state, action: PayloadAction<string>) {
      state[action.payload] = 0
      return state
    },
  },
})

export const { incrementDuration, resetDuration } =
  pageDurationStoreSlice.actions
export const { reducer: pageDurationStoreReducer } = pageDurationStoreSlice

// Selectors

/**
 * Get all the page durations that are logged, in milliseconds
 */
export const getPageDurations = (
  state: RootState
): { [key: string]: number } => {
  return state.pageDuration
}

/**
 * Selector to get the page durations as an object with the page IDs as the keys
 * and the duration as the associated value in seconds, with 1 decimal place
 * of accuracy.
 *
 * This is intended for use with the outputComponent in EFS
 */
export const getPageDurationsInFractionalSeconds = createSelector(
  getPageDurations,
  (durations) =>
    Object.keys(durations).reduce(
      (output, id) => ({
        ...output,
        [id]: Math.round(durations[id] / 10) / 100,
      }),
      {}
    )
)
