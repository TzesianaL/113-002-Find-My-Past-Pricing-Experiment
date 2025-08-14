import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import merge from 'lodash-es/merge'
import rootReducer, { RootState } from './reducers'
import { initialState as dataInitialState } from './reducers/dataStore/dataStore'
import { initialState as actionLogInitialState } from './reducers/actionLogStore/actionLogStore'
import { initialState as logicInitialState } from './reducers/logicStore/logicStore'
import { initialState as outputInitialState } from './reducers/output/outputSlice'
import { initialState as pageDurationInitialState } from './reducers/pageDurationStore/pageDurationStore'

export const store = configureStore({
  reducer: rootReducer,
})

const defaultStoreState: RootState = {
  data: dataInitialState,
  logic: logicInitialState,
  actionLog: actionLogInitialState,
  output: outputInitialState,
  pageDuration: pageDurationInitialState,
}

// eslint-disable-next-line @typescript-eslint/ban-types
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export const preloadedStore = (
  state: DeepPartial<RootState>
): EnhancedStore<RootState> =>
  configureStore({
    reducer: rootReducer,
    preloadedState: merge({}, defaultStoreState, state),
  })
