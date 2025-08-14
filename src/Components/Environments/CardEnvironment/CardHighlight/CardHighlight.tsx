import React, { FC } from 'react'
import { CardHighlightStyle } from './CardHighlightStyle'

interface CardHighlightProps {
  children: React.ReactNode
  isSelected?: boolean
}

const CardHighlight: FC<CardHighlightProps> = ({
  children,
  isSelected = false,
}) => {
  return (
    <CardHighlightStyle isSelected={isSelected}>{children}</CardHighlightStyle>
  )
}

export default CardHighlight
