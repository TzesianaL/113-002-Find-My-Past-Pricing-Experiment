import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import {
  testSchema,
  testDataTable,
} from 'stories/PCWEnvironment/__fixtures__/pcw'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import Table from './Table'

describe('<Table/>', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Table
          schema={testSchema}
          products={testDataTable}
          onSelect={() => {}}
        />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should  throw error when schema is an empty array', () => {
    const mockError = jest.spyOn(console, 'error')
    mockError.mockImplementation(() => {})

    expect(() =>
      render(
        <Provider store={store}>
          <Table schema={[]} products={testDataTable} onSelect={() => {}} />
        </Provider>
      )
    ).toThrowError('Table schema is empty')

    mockError.mockRestore()
  })

  it('should  throw error when dataset is an empty array', () => {
    const mockError = jest.spyOn(console, 'error')
    mockError.mockImplementation(() => {})

    expect(() =>
      render(
        <Provider store={store}>
          <Table schema={testSchema} products={[]} onSelect={() => {}} />
        </Provider>
      )
    ).toThrowError('Data array is empty')

    mockError.mockRestore()
  })
})
