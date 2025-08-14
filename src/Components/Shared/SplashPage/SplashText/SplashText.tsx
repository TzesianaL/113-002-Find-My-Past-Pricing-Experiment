import React, { FC } from 'react'
import Title from 'Components/Shared/Title/Title'
import { SplashTextStyle } from './SplashTextStyle'

export interface SplashTextProps {
  /**
   * Text that displays on the splashscreen component.
   */
  text: string
  /**
   * Title is used to display the title of each text block of splashScreen.
   */
  title?: string
}

/**
 * SplashText component is used to display the text included in the splashScreen
 * SplashTextStyle component is used to style the component
 */
const SplashText: FC<SplashTextProps> = ({ text, title }) => {
  return (
    <SplashTextStyle>
      {title && (
        <Title>
          <div dangerouslySetInnerHTML={{ __html: title }} />
        </Title>
      )}
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </SplashTextStyle>
  )
}

export default SplashText
