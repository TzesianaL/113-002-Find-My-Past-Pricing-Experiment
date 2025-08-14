import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import * as renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Cell from './Cell'

describe('<Cell/>', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Cell />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should grey out background when shaded prop is true', () => {
    const { container } = render(<Cell shaded>Test</Cell>)
    expect(container.querySelector('div')).toHaveStyleRule(
      'background',
      '#DCDCDC'
    )
  })
  it('should not grey out background when shaded prop is not provided', () => {
    const { container } = render(<Cell>Test</Cell>)
    expect(container.querySelector('div')).toHaveStyleRule(
      'background',
      '#ffffff'
    )
  })
})
