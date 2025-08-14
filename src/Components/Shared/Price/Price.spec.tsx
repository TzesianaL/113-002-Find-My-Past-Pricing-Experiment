import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Price from './Price'

describe('<Price />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Price price={100} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should display £100', () => {
    const el = render(<Price price={100} />)
    expect(el.getByText('£100.00')).toBeInTheDocument()
  })
})
