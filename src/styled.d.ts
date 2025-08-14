import {} from 'styled-components'

// Module declarations for packages without types
declare module 'react-outside-click-handler' {
  import { ReactNode } from 'react'

  interface OutsideClickHandlerProps {
    onOutsideClick: () => void
    children: ReactNode
  }

  const OutsideClickHandler: React.FC<OutsideClickHandlerProps>
  export default OutsideClickHandler
}

export interface Theme {
  highlight?: {
    color?: string
    backgroundColor?: string
    height?: string
  }

  card?: {
    color?: string
    backgroundColor?: string
    width?: string
    height?: string
    border?: string
    borderColor?: string
    borderRadius?: string
    fontSize?: number
  }

  button?: {
    color?: string
    backgroundColor?: string
    inactiveColor?: string
    width?: string
    borderRadius?: string
    activeBackgroundColor?: string
  }

  planInfo?: {
    backgroundColor?: string
    color?: string
    buttonBackground?: string
    buttonText?: string
    buttonBorderRadius?: number
  }

  banner?: {
    color?: string
    backgroundColor?: string
    logoPosition?: string // 'left' | 'center' | 'right'
    fontSize?: number
    fontFamily?: string
  }

  footer?: {
    fontSize: string
  }

  colors?: {
    primary: string
    secondary: string
    background: string
    pcwTags: {
      primary: string
      secondary: string
      tertiary: string
    }
  }

  splashScreenText?: {
    backgroundColor: string
    color: string
    fontSize: number
    fontFamily: string
  }
  splashImage?: {
    imageSize: number
  }

  pcwCell?: {
    backgroundColor?: string
    textColor?: string
    buttonColor?: sting
    buttonBackground?: string
  }
  fontSize?: number
  fontFamily?: string
  titleFontSize?: number
  subtitleFontSize?: number
  priceFontSize?: number

  titleFontFamily?: string

  labelWidth?: string
  featureBullet?: string

  color?: string
  backgroundColor?: string
  titleColor?: string
  subtitleColor?: string
}

declare module 'styled-components' {
  // Define the theme object
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
