import React, { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { TitleStyle } from './TitleStyle'

export interface TitleProps {
  /**
   * Whether the contents should be displayed using subtitle styling
   */
  subtitle?: boolean
  style?: CSSProperties
}

/**
 * Component that displays any title or subtitle of the tile.
 * TitleStyle is used to style the component
 */
const Title: FC<TitleProps> = ({ style, subtitle, children }) => {
  return (
    <TitleStyle style={style} subtitle={subtitle || false}>
      {children}
    </TitleStyle>
  )
}

export default Title
