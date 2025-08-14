import React, { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { HStackStyle } from './HstackStyle'

interface HStackProps {
  style?: CSSProperties
}
/**
 * HStack component is used to display horizontally the child component which is passed as prop.
 * HStackStyle is used to style the component
 */
const HStack: FC<HStackProps> = ({ style, children }) => {
  return <HStackStyle style={style}>{children}</HStackStyle>
}

export default HStack
