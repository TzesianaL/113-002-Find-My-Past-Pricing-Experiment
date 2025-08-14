import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import SplashPage, {
  SplashPageProps,
} from 'Components/Shared/SplashPage/SplashPage'
import { handleConsoleLogClick } from 'functions/functions'
import { testingItems } from './__fixtures__/splashpage.fixtures'

export default {
  title: 'Shared/SplashPage/SplashPage',
  component: SplashPage,
} as Meta

interface StyledSplashPageProps extends SplashPageProps {
  backgroundColor: string
  textColor: string
  fontSize: number
  fontFamily: string
  bannerColor: string
  bannerBackgroundColor: string
  titleColor: string
  titleFontSize: number
  imageSize: number
  buttonWidth: string
  borderRadius: string
  activeBackgroundButtonColor: string
}

const Template: Story<StyledSplashPageProps> = ({
  backgroundColor,
  textColor,
  fontSize,
  fontFamily,
  bannerColor,
  bannerBackgroundColor,
  titleColor,
  titleFontSize,
  imageSize,
  buttonWidth,
  borderRadius,
  activeBackgroundButtonColor,
  ...args
}) => (
  <ThemeProvider
    theme={{
      titleFontSize: titleFontSize || 3,
      fontFamily: `${fontFamily || 'Arial'}`,
      titleColor: `${titleColor || 'grey'}`,
      splashScreenText: {
        backgroundColor: `${backgroundColor || 'lightgrey'}`,
        color: `${textColor || 'black'}`,
        fontSize: fontSize || 1,
        fontFamily: `${fontFamily || 'Arial'}`,
      },
      splashImage: {
        imageSize: imageSize || 100,
      },

      banner: {
        color: bannerColor,
        backgroundColor: bannerBackgroundColor,
        fontSize: 1.2,
      },
      button: {
        color: `${textColor || 'black'}`,
        backgroundColor: `${backgroundColor || 'lightgrey'}`,
        width: `${buttonWidth || '25%'}`,
        borderRadius: `${borderRadius || '2rem'}`,
        activeBackgroundColor: `${activeBackgroundButtonColor || 'grey'}`,
      },
    }}
  >
    <SplashPage {...args} />
  </ThemeProvider>
)

export const Basic = Template.bind({})

Basic.args = {
  storeName: 'StoreName',
  pageTitle: 'PageTitle',
  items: testingItems,
  backgroundColor: '#D8D8D8',
  textColor: '#505050',
  fontSize: 1,
  fontFamily: 'Arial',
  bannerColor: '#E6E6FA',
  bannerBackgroundColor: '#8B008B',
  titleColor: 'red',
  titleFontSize: 2,
  imageSize: 46,
  buttonText: 'Button',
  onClick: handleConsoleLogClick,
}

Basic.argTypes = {
  backgroundColor: {
    control: 'color',
  },
  textColor: {
    control: 'color',
  },
  bannerColor: {
    control: 'color',
  },
  bannerBackgroundColor: {
    control: 'color',
  },
  titleColor: {
    control: 'color',
  },
}
