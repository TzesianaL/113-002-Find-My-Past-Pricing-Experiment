import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import SplashImage from './SplashImage'

describe('<SplashImage/>', () => {
  it('should renderer correctly SplashText', () => {
    const tree = renderer
      .create(<SplashImage imageSrc="test source" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
