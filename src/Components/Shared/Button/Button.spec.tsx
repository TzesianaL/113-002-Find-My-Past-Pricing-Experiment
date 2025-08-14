import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  const handleClick = (): void => {}

  it('should render correctly', () => {
    const tree = renderer
      .create(<Button onClick={handleClick}>Button</Button>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should display Button', () => {
    const el = render(<Button onClick={handleClick}>Button</Button>)
    expect(el.getByText('Button')).toBeInTheDocument()
  })

  it('test button click', () => {
    const mockCallBack = jest.fn()
    render(<Button onClick={mockCallBack}>Button</Button>)
    fireEvent.click(screen.getByText(/button/i))
    expect(mockCallBack).toHaveBeenCalledTimes(1)
  })
})
