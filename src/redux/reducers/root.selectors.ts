import { DataStateType, LogicStateType } from 'types'
import { RootState } from 'redux/reducers'

export const selectDataStore = (state: RootState): DataStateType => state.data

export const selectLogicStore = (state: RootState): LogicStateType =>
  state.logic

export const selectOutputStore = (
  state: RootState
): { [key: number]: string } => state.output

export const selectPageDurationStore = (
  state: RootState
): { [key: string]: number } => state.pageDuration

export const selectActionLogStore = (state: RootState): string[] =>
  state.actionLog
