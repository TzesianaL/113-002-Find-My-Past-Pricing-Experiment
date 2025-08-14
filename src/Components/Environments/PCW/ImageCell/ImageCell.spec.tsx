import React from 'react'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import * as renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import logo from 'images/logos/lifepro-prime1.png'
import ImageCell from './ImageCell'

describe('<ImageCell/>', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<ImageCell imagePath={logo} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should display text only when it is provided', () => {
    render(<ImageCell imagePath={logo} text="test logo" />)

    expect(screen.getByText('test logo')).toBeInTheDocument()
  })

  it('should throw an error when image is not provided', () => {
    const mockError = jest.spyOn(console, 'error')
    mockError.mockImplementation(() => {})

    expect(() => render(<ImageCell imagePath="" />)).toThrowError(
      'Image is not provided'
    )

    mockError.mockRestore()
  })
})
