import React, { FC } from 'react'
import Cell, { CellProps } from '../Cell/Cell'
import { ImageCellStyle, TextStyle } from './ImageCellStyle'

export interface ImageCellProps extends Partial<CellProps> {
  text?: string
  imagePath?: string
}

const ImageCell: FC<ImageCellProps> = ({ text, imagePath, ...props }) => {
  if (imagePath === '') {
    throw new Error('Image is not provided')
  }
  return (
    <Cell {...props}>
      <ImageCellStyle src={imagePath} alt="" />
      <TextStyle>{text}</TextStyle>
    </Cell>
  )
}

export default ImageCell
