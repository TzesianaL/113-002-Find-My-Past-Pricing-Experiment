import { OutputTypes } from './outputSlice'
import { getOutputFromKey } from './output.selectors'

describe('getOutputFromKey', () => {
  it('should return an empty string when trying to find a key thats not in the store', () => {
    const outputStore = {}
    const testOutput = getOutputFromKey.resultFunc(outputStore)(
      OutputTypes.condition
    )
    expect(testOutput).toEqual('')
  })

  it('should return the output value when the key is in the store', () => {
    const outputStore = {}
    const keyName: OutputTypes = OutputTypes.condition
    const value = '123'
    outputStore[keyName] = value
    const testOutput = getOutputFromKey.resultFunc(outputStore)(keyName)
    expect(testOutput).toEqual(value)
  })
})
