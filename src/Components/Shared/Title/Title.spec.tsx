import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Title from './Title'

describe('<Title />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title>Test Title</Title>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should display Title', () => {
    const el = render(<Title>Title</Title>)
    expect(el.getByText('Title')).toBeInTheDocument()
  })
})
