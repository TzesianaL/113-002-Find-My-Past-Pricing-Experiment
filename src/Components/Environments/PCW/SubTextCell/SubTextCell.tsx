import React, { FC } from 'react'
import Cell, { CellProps } from '../Cell/Cell'
import { SubTextStyle } from './SubTextCellStyle'

export interface SubTextCellProps extends Partial<CellProps> {
  text: string
  subtext: string
}

const SubTextCell: FC<SubTextCellProps> = ({ text, subtext, ...props }) => {
  return (
    <Cell {...props}>
      <div>{text}</div>
      <SubTextStyle>{subtext}</SubTextStyle>
    </Cell>
  )
}

export default SubTextCell
