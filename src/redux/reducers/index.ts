import { combineReducers } from 'redux'
import { dataStoreReducer } from './dataStore/dataStore'
import { outputStoreReducer } from './output/outputSlice'
import { logicStoreReducer } from './logicStore/logicStore'
import { pageDurationStoreReducer } from './pageDurationStore/pageDurationStore'
import { actionLogStoreReducer } from './actionLogStore/actionLogStore'

const rootReducer = combineReducers({
  data: dataStoreReducer,
  logic: logicStoreReducer,
  output: outputStoreReducer,
  pageDuration: pageDurationStoreReducer,
  actionLog: actionLogStoreReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
