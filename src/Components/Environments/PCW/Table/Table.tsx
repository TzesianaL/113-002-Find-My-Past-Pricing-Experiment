import React, { createContext, FC } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { PCWSchema, PCWProductData } from 'types'
import { TableStyle } from './TableStyle'
import Row from '../Row/Row'
import TagList from '../TagList/TagList'

export interface TableProps {
  schema: PCWSchema[]
  products: PCWProductData[]
  onSelect: (id: string) => void
}

export const TableContext = createContext<{
  product?: PCWProductData
}>({})

const Table: FC<TableProps> = ({ schema, products, onSelect }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  if (products.length === 0 || products.some((row) => row.cells.length === 0)) {
    throw new Error('Data array is empty')
  }

  if (schema.length === 0) {
    throw new Error('Table schema is empty')
  }

  return (
    <>
      {products?.map((product) => {
        return (
          <TableStyle key={product.id}>
            <TableContext.Provider value={{ product }}>
              <Row
                schema={schema}
                cellsData={product.cells}
                planInfoData={product.planInfo}
                onSelect={() => onSelect(product.id)}
                tags={product.tags}
                mobileScreenSize={matches}
              />
              {!matches && <TagList tags={product.tags} />}
            </TableContext.Provider>
          </TableStyle>
        )
      })}
    </>
  )
}

export default Table
