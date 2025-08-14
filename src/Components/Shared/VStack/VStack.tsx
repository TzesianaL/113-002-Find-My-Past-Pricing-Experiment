import React, { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { VStackStyle } from './VStackStyle'

interface VStackProps {
  style?: CSSProperties
}
/**
 * VStack component is used to display vertically the child component which is passed as prop.
 * VStackStyle is used to style the component
 */
const VStack: FC<VStackProps> = ({ style, children }) => {
  return <VStackStyle style={style}>{children}</VStackStyle>
}

export default VStack
