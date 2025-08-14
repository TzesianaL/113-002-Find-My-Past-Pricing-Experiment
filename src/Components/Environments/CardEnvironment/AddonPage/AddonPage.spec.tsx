import React from 'react'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import { horizontalThreeColumnAddonLayout } from 'StandardLayouts/AddonLayouts'
import { AddonData } from 'types'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import AddonPage from './AddonPage'

describe('<AddonPage/>', () => {
  const Addons: AddonData[] = [
    {
      id: 'Addon_1',
      title: 'Basic',
      price: 9.99,
      features: ['Feature 1'],
    },
    {
      id: 'Addon_2',
      title: 'Better',
      price: 29.99,
      features: ['Feature 1', 'Feature 2'],
    },
    {
      id: 'Addon_3',
      title: 'Premium',
      price: 39.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  ]

  it('should render AddonPage component correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <AddonPage
          data={Addons}
          layout={horizontalThreeColumnAddonLayout}
          bannerName="Test"
        />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
