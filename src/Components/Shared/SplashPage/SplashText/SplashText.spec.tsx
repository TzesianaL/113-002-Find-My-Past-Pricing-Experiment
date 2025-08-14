import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import SplashText from './SplashText'

describe('<SplashText/>', () => {
  it('should render correctly SplashText', () => {
    const tree = renderer
      .create(<SplashText text=" text title" title="title" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
