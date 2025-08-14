import cloneDeep from 'lodash-es/cloneDeep'
import { DataStateType, LogicStateType, BlockEnums } from 'types'
import { getOutputFromKey } from './output.selectors'
import { rehydrateFromJSON } from '../../globalActions/globalActions'
import { RootState } from '../index'
import { outputStoreReducer, OutputTypes } from './outputSlice'

describe('Output Store', () => {
  describe('getOutput selector', () => {
    const basicDataStore: DataStateType = {
      dataLoaded: true,
      condition: 0,
      pcwData: [],
      pcwSchema: [],
      splash: {
        title: '',
        items: [],
      },
      storeItems: [],
      storeLogoSrc: '',
      storeName: '',
      theme: {},
      addonLayout: { blockType: BlockEnums.Null },
      storeAddons: [],
    }

    const basicLogicStore: LogicStateType = {
      basket: [],
      itemOrder: [],
      basketAddons: [],
      pcwPickedProduct: [],
      pcwMoreInfoClicked: {},
    }

    const initialState: RootState = {
      data: basicDataStore,
      logic: basicLogicStore,
      output: {},
      actionLog: [],
      pageDuration: {},
    }

    it('should return an empty string when trying to find a key thats not in the store', () => {
      const state = cloneDeep(initialState)
      delete state.output[OutputTypes.condition]
      const testOutput = getOutputFromKey(state)(OutputTypes.condition)
      expect(testOutput).toEqual('')
    })

    it('should return the output value when the key is in the store', () => {
      const keyName: OutputTypes = OutputTypes.condition
      const value = '123'
      const state = cloneDeep(initialState)
      state.output[keyName] = value
      const testOutput = getOutputFromKey(state)(keyName)
      expect(testOutput).toEqual(value)
    })
  })

  describe('Action:', () => {
    describe('rehydrateFromJSON', () => {
      it('should set the state to the output store in the JSON string', () => {
        const stateToRehydrate = {
          output: {
            a: 'test',
            pokemon: 'charizard',
            emoji: '🐉',
          },
        }

        const rehydrateAction = rehydrateFromJSON(
          JSON.stringify(stateToRehydrate)
        )
        const testState = outputStoreReducer(undefined, rehydrateAction)
        expect(testState).toStrictEqual(stateToRehydrate.output)
      })

      it('should replace the state with the dehydrated state in the JSON string', () => {
        const originalState = {
          a: 'Other test',
          pokemon: 'Meowth',
          symbol: '$',
        }

        const stateToRehydrate = {
          output: {
            a: 'test',
            pokemon: 'charizard',
            emoji: '🐉',
          },
        }

        const rehydrateAction = rehydrateFromJSON(
          JSON.stringify(stateToRehydrate)
        )
        const testState = outputStoreReducer(originalState, rehydrateAction)
        expect(testState).toStrictEqual(stateToRehydrate.output)
      })

      it("should keep the original state if the dehydrated state in the JSON string doesn't have output", () => {
        const originalState = {
          a: 'Other test',
          pokemon: 'Pikachu V',
        }

        const stateToRehydrate = {
          notOutput: {
            a: 'test',
            pokemon: 'charizard',
            emoji: '🐉',
          },
        }

        const rehydrateAction = rehydrateFromJSON(
          JSON.stringify(stateToRehydrate)
        )
        const testState = outputStoreReducer(originalState, rehydrateAction)
        expect(testState).toStrictEqual(originalState)
      })
    })
  })
})
