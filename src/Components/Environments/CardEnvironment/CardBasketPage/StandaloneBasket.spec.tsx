import React from 'react'
import configureStore from 'redux-mock-store'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { StandaloneBasket } from './StandaloneBasket'

const createMockStore = configureStore([])

describe('StandaloneBasket', () => {
  // A spy to mute the console.error messages
  let consoleErrorSpy: jest.SpyInstance

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  it('should throw an exception if it is unable to get Basket Data from EFS', () => {
    const store = createMockStore({ data: {}, logic: { basket: [] } })

    expect(() =>
      render(
        <Provider store={store}>
          <StandaloneBasket />
        </Provider>
      )
    ).toThrowError('no items in basket')
  })

  it('should call BasketSummary with the item in the redux store basket', () => {
    const state = {
      logic: {
        basket: ['TEST'],
      },
      data: {
        storeItems: [
          {
            id: 'TEST',
            title: 'Test Item',
          },
        ],
      },
    }

    const store = createMockStore(state)
    render(
      <Provider store={store}>
        <StandaloneBasket />
      </Provider>
    )

    expect(screen.queryByText('Test Item')).toBeInTheDocument()
  })
})
