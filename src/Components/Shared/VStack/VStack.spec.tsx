import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import VStack from './VStack'
import Title from '../Title/Title'

describe('<VStack/>', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <VStack>
          <Title>Test Title</Title>
        </VStack>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
