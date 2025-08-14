import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import Ucompare from 'images/logos/pcwLogo.png'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { preloadedStore } from 'redux/store'
import PCWJourney from 'routing/PCWRouting/PCWRouting'
import { baseSplashScreen } from 'assets/data/splashscreenData'
import { testSchema, testDataTable } from './__fixtures__/pcw'

export default {
  title: 'Environments/PCW Journey',
  component: PCWJourney,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider
          theme={{
            banner: {
              color: '#377460',
              backgroundColor: 'white', // 45
              fontSize: 1.5,
            },
            colors: {
              primary: '',
              secondary: '',
              background: '',
              pcwTags: {
                primary: 'red',
                secondary: 'yellow',
                tertiary: 'orange',
              },
            },
            button: {
              color: 'white',
              backgroundColor: 'black',
              activeBackgroundColor: 'white',
              borderRadius: '0px',
            },

            fontSize: 1,
            titleFontSize: 1.2,
            subtitleFontSize: 1,
            priceFontSize: 1.2,

            backgroundColor: '#fff',
            color: '#554344',
            titleColor: '#554344',
            subtitleColor: '#554344',
            fontFamily: 'Calibri, sans-serif',
            featureBullet: '⦾', // \u2022',
          }}
        >
          <Provider
            store={preloadedStore({
              data: {
                storeName: 'compare',
                pcwData: testDataTable,
                pcwSchema: testSchema,
                splash: baseSplashScreen,
                storeLogoSrc: Ucompare,
              },
            })}
          >
            <Router>
              <Story />
            </Router>
          </Provider>
        </ThemeProvider>
      </div>
    ),
  ],
} as Meta

const Template = ({ ...args }) => <PCWJourney {...args} />

export const PriceComparisonJourney = Template.bind({})
