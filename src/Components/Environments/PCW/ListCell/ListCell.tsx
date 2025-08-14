import React, { FC } from 'react'
import Cell, { CellProps } from '../Cell/Cell'
import { ListCellContainer, ListCellItem } from './ListCellStyle'

export interface ListCellProps extends Partial<CellProps> {
  list: string[]
}

const ListCell: FC<ListCellProps> = ({ list, ...props }) => {
  return (
    <Cell {...props} listType>
      <ListCellContainer>
        {list.map((element) => {
          return <ListCellItem key={element}>{element}</ListCellItem>
        })}
      </ListCellContainer>
    </Cell>
  )
}

export default ListCell
