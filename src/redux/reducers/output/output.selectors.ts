import { OutputTypes } from 'redux/reducers/output/outputSlice'
import { createSelector } from '@reduxjs/toolkit'
import { selectOutputStore } from '../root.selectors'
import { RootState } from '..'

export const getOutputFromKey = createSelector(
  selectOutputStore,
  (output) =>
    (key: OutputTypes): string => {
      if (Object.prototype.hasOwnProperty.call(output, key)) {
        return output[key]
      }
      return ''
    }
)

/**
 * Selector to get the redux stores in a JSON object for debugging
 * and future use in standalone pages
 *
 * @returns {string} Stores serialized in a JSON object
 *
 * TODO: Write tests for this
 */
export const getSerializedStores = (state: RootState): string => {
  // drop the conditions  since we don't care about that for the outputs
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { conditionsData: _, ...data } = state.data
  return JSON.stringify({
    logic: state.logic,
    pageDuration: state.pageDuration,
    output: state.output,
    data,
  })
}
