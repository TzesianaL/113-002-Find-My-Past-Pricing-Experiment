import React, { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { CellStyle } from './CellStyle'

export interface CellProps {
  shaded?: boolean
  style?: CSSProperties
  listType?: boolean
}

const Cell: FC<CellProps> = ({ shaded, style, children, listType }) => {
  return (
    <CellStyle
      style={style}
      shaded={shaded || false}
      listType={listType || false}
    >
      {children}
    </CellStyle>
  )
}

export default Cell
