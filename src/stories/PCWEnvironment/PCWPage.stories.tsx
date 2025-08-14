import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import {
  testSchema,
  testDataTable,
  testFooter,
  testStyle,
} from 'stories/PCWEnvironment/__fixtures__/pcw'
import logo from 'images/logos/pcwLogo.png'
import { Provider } from 'react-redux'
import { preloadedStore } from 'redux/store'
import { PCWProductData, PCWSchema } from 'types'
import PCWPage, {
  PCWPageProps,
} from '../../Components/Environments/PCW/PCWPage/PCWPage'

export default {
  title: 'Environments/PCW Environment/PCW Page',
  component: PCWPage,
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
        type: 'text',
      },
    },
    logo: {
      control: {
        type: 'file',
      },
    },
    onSelect: {
      action: 'clicked',
    },
  },
} as Meta

interface StoryProps extends PCWPageProps {
  schema: PCWSchema[]
  dataset: PCWProductData[]
}

const Template: Story<StoryProps> = ({
  schema,
  dataset,
  footerText,
  titleStyle,
  onSelect,
}) => (
  <Provider
    store={preloadedStore({
      data: {
        pcwData: dataset,
        pcwSchema: schema,
      },
    })}
  >
    <ThemeProvider
      theme={{
        planInfo: {
          backgroundColor: '#377460',
          color: 'white',
        },
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
      }}
    >
      <PCWPage
        headerText="We’ve found the best available energy tariff for you:"
        footerText={footerText}
        titleStyle={titleStyle}
        logo={logo}
        onSelect={onSelect}
      />
    </ThemeProvider>
  </Provider>
)

export const PriceComparisonPage = Template.bind({})

PriceComparisonPage.args = {
  schema: testSchema,
  dataset: testDataTable,
  footerText: testFooter,
  titleStyle: testStyle,
}
