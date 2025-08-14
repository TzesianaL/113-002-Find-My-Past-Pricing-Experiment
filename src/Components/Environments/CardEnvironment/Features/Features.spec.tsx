import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Features from './Features'

describe('<Features />', () => {
  const featArray = ['feat1', 'feat2', 'feat3']
  it('should render correctly', () => {
    const tree = renderer.create(<Features features={featArray} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should display the text of the provided features', () => {
    const list = render(<Features features={featArray} />)
    expect(list.queryByText(/feat1/ && / feat2/ && /feat3/)).toBeInTheDocument()
  })
})
