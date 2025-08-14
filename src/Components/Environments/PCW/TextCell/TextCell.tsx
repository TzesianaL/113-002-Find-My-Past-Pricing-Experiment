import React, { FC } from 'react'
import Cell, { CellProps } from '../Cell/Cell'

export interface TextCellProps extends Partial<CellProps> {
  text: string
}

const TextCell: FC<TextCellProps> = ({ text, ...props }) => {
  return (
    <Cell {...props}>
      <p>{text}</p>
    </Cell>
  )
}

export default TextCell
