import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ProductRange from './ProductRange'

const mockStore = configureStore([])

describe('<ProductRange />', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      data: {
        dataLoaded: false,
        condition: -1,
        storeLogoSrc: '',
        storeName: 'Queen Carlotta`s undefined Store!',
        splash: {
          title: '',
          items: [],
        },
        storeItems: [],
        theme: {},
      },
    })
  })

  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProductRange />
        </Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render component with minimum data requirements', () => {
    const el = render(
      <Provider store={store}>
        <ProductRange />
      </Provider>
    )

    expect(el).not.toBeNull()
  })
})
