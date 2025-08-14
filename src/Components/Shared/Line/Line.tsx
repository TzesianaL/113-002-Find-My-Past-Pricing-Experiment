import React, { FC } from 'react'
import { LineStyle, PropertyStyle } from './LineStyle'

export interface LineProps {
  property: string
  value: string | number
}

const Line: FC<LineProps> = ({ property, value }) => {
  return (
    <LineStyle>
      <div>{property}</div>
      <PropertyStyle>{value}</PropertyStyle>
    </LineStyle>
  )
}

export default Line
