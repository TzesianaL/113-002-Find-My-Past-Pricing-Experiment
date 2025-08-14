import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import CardHighlight from './CardHighlight'

describe('<CardHighlight />', () => {
  it('should render correctly Highlighted Card', () => {
    const tree = renderer.create(<CardHighlight />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
