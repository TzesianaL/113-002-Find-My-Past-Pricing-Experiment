import React from 'react'
import 'jest-styled-components'
import configureStore from 'redux-mock-store'
import * as renderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { testItems } from 'stories/CardEnvironment/__fixtures__/card.fixtures'
import StorePage from './StorePage'

const mockStore = configureStore([])

describe('<StorePage/>', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      testState: 'test txt',
    })
  })
  const TestStorePage = (props) => (
    <Provider store={store}>
      <StorePage
        items={testItems}
        onSelect={() => {}}
        bannerName="test banner-name"
        bannerLogoSrc="test banner-logo"
        {...props}
      />
    </Provider>
  )
  it('should render correctly StorePage', () => {
    expect(renderer.create(<TestStorePage />).toJSON()).toMatchSnapshot()
  })

  it("should render Cancel Button when showCancelButton is true and display default button text 'I Don't Want Any Of These Options'", () => {
    const showButton = true
    const button = render(
      <TestStorePage onCancel={() => {}} showCancelButton={showButton} />
    ).getByRole('button', { name: /I Don't Want Any Of These Options/i })
    expect(button).toBeInTheDocument()
  })
  it("should not render 'Cancel' Button when showCancelButton property is not provided ", () => {
    const button = render(<TestStorePage />)
    expect(button.queryByText(/I Don't Want Any Of These Options/)).toBeFalsy()
  })

  it('should throw an Error when showCancelButton is set to true and onCancel function is not provided', () => {
    const mockError = jest.spyOn(console, 'error')
    mockError.mockImplementation(() => {})
    expect(() => {
      render(<TestStorePage showCancelButton />)
    }).toThrowError(
      'OnCancel function is undefined when showCancelButton is provided'
    )

    mockError.mockRestore()
  })
  it('should call onCancel function,when showCancelButton is true and make sure it is clicked ', () => {
    const mockedFunction = jest.fn()
    render(<TestStorePage showCancelButton onCancel={mockedFunction} />)
    fireEvent.click(
      screen.getByRole('button', { name: /I Don't Want Any Of These Options/i })
    )
    expect(mockedFunction).toHaveBeenCalledTimes(1)
  })

  it('should show the provided cancelButtonText on the Cancel Button', () => {
    const testLabel = 'Cancel Button Text-Test'
    const mockedFunction = jest.fn()
    const el = render(
      <TestStorePage
        cancelButtonText={testLabel}
        showCancelButton
        onCancel={mockedFunction}
      />
    ).getByText(testLabel)
    expect(el).toBeInTheDocument()
  })

  it("should render the default value of I Don't Want Any Of These Options when cancelButtonText isn't  provided", () => {
    const mockedFunction = jest.fn()
    const button = render(
      <TestStorePage showCancelButton onCancel={mockedFunction} />
    ).getByRole('button', { name: /I Don't Want Any Of These Options/i })

    expect(button).toBeTruthy()
  })
})
