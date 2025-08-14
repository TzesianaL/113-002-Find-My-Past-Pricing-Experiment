import React, { FC } from 'react'
import Cell, { CellProps } from '../Cell/Cell'
import { SubTextStyle } from '../SubTextCell/SubTextCellStyle'
import { IconTextStyle } from './IconTextStyle'

export interface IconTextCellProps extends Partial<CellProps> {
  text: string
  imagePath: string
}

const IconTextCell: FC<IconTextCellProps> = ({ text, imagePath, ...props }) => {
  if (imagePath === '') {
    throw new Error('Image is not provided')
  }
  return (
    <Cell {...props}>
      <IconTextStyle>
        <img src={imagePath} alt="icon" />
        <SubTextStyle>{text}</SubTextStyle>
      </IconTextStyle>
    </Cell>
  )
}

export default IconTextCell
