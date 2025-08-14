import React, { FC } from 'react'
import { SplashImageStyle } from './SplashImageStyle'

export interface SplashImgProps {
  /**
   * Image path for image that displays on the splashscreen component.
   */
  imageSrc: string
}

/**
 * SplashImg component is used to display any images included in the splashScreen
 * SplashImgStyle component is used to style the component
 */
const SplashImg: FC<SplashImgProps> = ({ imageSrc }) => {
  return (
    <SplashImageStyle>
      <img src={imageSrc} alt="splashimg" />
    </SplashImageStyle>
  )
}

export default SplashImg
