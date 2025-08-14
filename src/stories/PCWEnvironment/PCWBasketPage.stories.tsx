import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { HashRouter as Router } from 'react-router-dom'
import {
  testBasketPageFooter,
  testStyle,
  testDataTable,
  testSchema,
} from 'stories/PCWEnvironment/__fixtures__/pcw'
import logo from 'images/logos/pcwLogo.png'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import PCWBasketPage, {
  PCWBasketPageProps,
} from 'Components/Environments/PCW/PCWBasketPage/PCWBasketPage'

export default {
  title: 'Environments/PCW Environment/PCW Basket Page',
  component: PCWBasketPage,
  argTypes: {
    schema: {
      control: {
        type: 'array',
      },
    },
    dataset: {
      control: {
        type: 'array',
      },
    },
    footerText: {
      control: {
        type: 'array',
      },
    },
    logo: {
      control: {
        type: 'array',
      },
    },
    onCheckout: { action: 'Checkout' },
    onEmptyBasket: { action: 'Empty Basket' },
  },
} as Meta

const Template: Story<PCWBasketPageProps> = ({ ...args }) => (
  <Provider store={store}>
    <Router>
      <ThemeProvider
        theme={{
          banner: {
            color: '#377460',
            backgroundColor: 'white',
            logoPosition: 'left',
            fontSize: 1.5,
          },
          footer: {
            fontSize: '0.5',
          },
          button: {
            color: 'white',
            backgroundColor: 'black',
            width: 'max-content',
            borderRadius: '0',
          },
          card: {
            backgroundColor: '#377460',
            borderColor: '#377460',
            color: 'white',
          },
        }}
      >
        <PCWBasketPage
          {...args}
          footerText={testBasketPageFooter}
          titleStyle={testStyle}
          logo={logo}
          pcwCardproperties={testDataTable[0]}
          schema={testSchema}
        />
      </ThemeProvider>
    </Router>
  </Provider>
)

export const PriceComparisonBasketPage = Template.bind({})

PriceComparisonBasketPage.args = {
  footerText: testBasketPageFooter,
}
