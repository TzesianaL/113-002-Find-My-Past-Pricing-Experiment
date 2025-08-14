import React from 'react'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import BasketCard from './BasketCard'

describe('<BasketCard />', () => {
  it('should render correctly Basket Card', () => {
    const { asFragment } = render(
      <BasketCard title="title" cardImage="path to image" subtitle="subtitle" />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
