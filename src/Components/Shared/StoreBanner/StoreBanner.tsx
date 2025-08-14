import React, { FC } from 'react'
import { StoreBannerStyle } from './StoreBannerStyle'

export interface StoreBannerProps {
  /**
   * Variable name contains the name of the selected store
   */
  name?: string
  /**
   * Variable logoScr contains the src for a logo of the store which will be displayed
   */
  logoSrc?: string
}
/**
 * Component StoreBanner displays the logo of the store on the left corner, if exists, and the store name taking up the whole width of its containing element. Styled components are used to decorate the component.
 */
const StoreBanner: FC<StoreBannerProps> = ({ logoSrc, name }) => {
  if (name === undefined && logoSrc === undefined) {
    throw Error('Store Banner component is used without props (name,logo)')
  }
  return (
    <StoreBannerStyle>
      {logoSrc && <img src={logoSrc} height="44" alt="logo" />}

      {name && <p style={{fontWeight: 'bold', paddingLeft:'0.5rem'}}>{name}</p>}
    </StoreBannerStyle>
  )
}
export default StoreBanner
