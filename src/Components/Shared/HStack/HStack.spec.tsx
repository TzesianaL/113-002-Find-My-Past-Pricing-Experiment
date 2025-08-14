import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import HStack from './HStack'
import Title from '../Title/Title'

describe('<HStack/>', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <HStack>
          <Title>Test Title</Title>
        </HStack>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
