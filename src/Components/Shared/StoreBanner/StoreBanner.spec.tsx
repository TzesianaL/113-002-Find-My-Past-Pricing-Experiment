import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import StoreBanner from './StoreBanner'

describe('<StoreBanner/>', () => {
  it('should render correctly Store Banner', () => {
    const tree = renderer
      .create(<StoreBanner name="Storename" logoSrc="logo" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
