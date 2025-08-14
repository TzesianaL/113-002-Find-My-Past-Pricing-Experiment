import React from 'react'
import 'jest-styled-components'
import { CardItem, AddonData, DataStateType, BlockEnums } from 'types'
import configureStore from 'redux-mock-store'
import { screen, render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { testItems } from 'stories/CardEnvironment/__fixtures__/card.fixtures'
import CardBasketPage from './CardBasketPage'

const mockStore = configureStore([])

describe('<BasketPage/>', () => {
  const cardToAdd: CardItem = {
    title: 'test card',
    subtitle: '',
    id: 'TESTCARD',
    price: 5.0,
    features: [],
    cardColor: '',
  }

  const basicDataStore: DataStateType = {
    dataLoaded: true,
    storeAddons: [],
    pcwData: [],
    pcwSchema: [],
    addonLayout: { blockType: BlockEnums.Null },
    condition: 0,
    splash: {
      title: '',
      items: [],
    },
    storeItems: [],
    storeLogoSrc: '',
    storeName: '',
    theme: {},
    storePageOptions: {},
    basketPageOptions: {},
  }
  let store

  const testAddon: AddonData[] = [
    {
      id: '1',
      title: 'Trauma Cover',
      subtitle: 'What does it include?',
      price: 19.99,
    },
  ]

  beforeEach(() => {
    store = mockStore({
      logic: {
        basket: [cardToAdd.id],
        itemOrder: [],
      },
      data: { ...basicDataStore, storeItems: [cardToAdd] },
      output: {},
    })
  })

  // A test harness for the BasketPage prop
  // Using this makes the tests clearer as it removes the boiler plate
  // that BasketPage needs, but we don't really care about
  // We can also override any of the props on the basket page as well
  const TestBasketPage = (props) => (
    <Provider store={store}>
      <CardBasketPage
        bannerLogoSrc=""
        bannerName="Store Name"
        item={cardToAdd}
        onCheckout={() => {}}
        onEmptyBasket={() => {}}
        {...props}
      />
    </Provider>
  )

  it('should render correctly', () => {
    const { asFragment } = render(<TestBasketPage />)
    expect(asFragment()).toMatchSnapshot()

    expect(screen.getByText(cardToAdd.title)).toBeInTheDocument()

    const expectedTotalPrice = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(cardToAdd.price || 0)

    expect(screen.getByText(expectedTotalPrice)).toBeInTheDocument()
  })

  it('should show the provided checkOutButtonText on the Check Out Button', () => {
    const testLabel = 'CheckOut Test'

    const button = render(
      <TestBasketPage checkOutButtonText={testLabel} />
    ).getByRole('button', { name: testLabel })
    expect(button).toBeInTheDocument()
  })

  it('should show the provided emptyBasketButtonText on the Empty Basket Button', () => {
    const testLabel = 'Empty Basket Test'
    const button = render(
      <TestBasketPage emptyBasketButtonText={testLabel} />
    ).getByRole('button', { name: testLabel })

    expect(button).toBeInTheDocument()
  })

  it("should render the default value of 'Check Out' when checkOutButtonText isn't provided", () => {
    const button = render(
      <Provider store={store}>
        <CardBasketPage
          bannerLogoSrc="test"
          bannerName="test"
          item={testItems[0]}
          onCheckout={() => {}}
          onEmptyBasket={() => {}}
          addons={testAddon}
        />
      </Provider>
    ).getByRole('button', { name: /Check Out/ })
    expect(button).toBeInTheDocument()
  })

  it("should render the default value of 'Empty Basket' when emptyBasketButtonText isn't provided", () => {
    const button = render(<TestBasketPage />).getByRole('button', {
      name: /Empty Basket/,
    })
    expect(button).toBeInTheDocument()
  })

  it("should render 'Cancel Button' when showCancelButton is true with the display default button text 'Cancel', and using the onCancel function ", () => {
    const cancelFunction = jest.fn()
    const button = render(
      <TestBasketPage showCancelButton onCancel={cancelFunction} />
    )
    expect(button.getByRole('button', { name: /Cancel/ })).toBeInTheDocument()

    fireEvent.click(screen.getByText(/Cancel/i))
    expect(cancelFunction).toHaveBeenCalledTimes(1)
  })

  it("should not render 'Cancel' Button when showCancelButton property is not provided ", () => {
    const button = render(<TestBasketPage />)
    expect(button.queryByText(/Cancel/)).toBeFalsy()
  })

  it('should throw an Error when showCancelButton is set to true and onCancel function is not provided', () => {
    const mockError = jest.spyOn(console, 'error')
    mockError.mockImplementation(() => {})

    expect(() => {
      render(<TestBasketPage showCancelButton />)
    }).toThrowError(
      'OnCancel function is undefined when showCancelButton is provided'
    )

    mockError.mockRestore()
  })

  it('should call onCancel function,when showCancelButton is true and make sure it is clicked ', () => {
    const mockedFunction = jest.fn()
    render(<TestBasketPage showCancelButton onCancel={mockedFunction} />)
    fireEvent.click(screen.getByText(/Cancel/i))
    expect(mockedFunction).toHaveBeenCalledTimes(1)
  })

  it('should render pricePeriod when it is provided', () => {
    store = mockStore({
      logic: {
        basket: [cardToAdd.id],
        itemOrder: [],
      },
      data: {
        ...basicDataStore,
        storeItems: [{ ...cardToAdd, pricePeriod: 'year' }],
      },
      output: {},
    })

    // pricePeriod is provided on testitems[1]
    render(
      <Provider store={store}>
        <CardBasketPage
          bannerLogoSrc="test"
          bannerName="test"
          item={{
            ...testItems[1],
          }}
          addons={testAddon}
          onCheckout={() => {}}
          onEmptyBasket={() => {}}
        />
      </Provider>
    )

    expect(screen.getByText(/per year/)).toBeInTheDocument()
  })

  it('should not render pricePeriod when it is not provided', () => {
    const el = render(<TestBasketPage />)
    expect(
      el.queryByText(
        /per day/ ||
          /per week/ ||
          /per fortnight/ ||
          /per month/ ||
          /per quarter/ ||
          /per year/
      )
    ).toBeFalsy()
  })

  it('should show the provided cancelButtonText on the Cancel Button', () => {
    const testLabel = 'Cancel Button Text-Test'
    const mockedFunction = jest.fn()
    const el = render(
      <TestBasketPage
        cancelButtonText={testLabel}
        showCancelButton
        onCancel={mockedFunction}
      />
    ).getByRole('button', {
      name: /Cancel Button Text-Test/,
    })
    expect(el).toBeInTheDocument()
  })

  it("should render the default value of Cancel when cancelButtonText isn't provided", () => {
    const mockedFunction = jest.fn()
    const button = render(
      <TestBasketPage showCancelButton onCancel={mockedFunction} />
    ).getByRole('button', { name: /Cancel/ })
    expect(button).toBeInTheDocument()
  })
})
