import React, { FC } from 'react'
import { PCWSchema, CellDataType, TagType, PlanInfoData } from 'types'
import PCWCellRender from './PCWCellRender'
import { RowStyle } from './RowStyle'

export interface RowProps {
  schema: PCWSchema[]
  cellsData: CellDataType[]
  planInfoData: PlanInfoData
  onSelect: () => void
  tags?: TagType[]
  mobileScreenSize: boolean
}

const Row: FC<RowProps> = ({
  schema,
  cellsData,
  planInfoData,
  onSelect,
  tags,
  mobileScreenSize,
}) => {
  return (
    <RowStyle>
      {schema.map((cellSchema) => (
        <span key={cellSchema.dataSource}>
          <PCWCellRender
            schemaColumn={cellSchema}
            cellsData={cellsData}
            tags={tags}
            planInfoData={planInfoData}
            handleSelect={onSelect}
            mobileScreenSize={mobileScreenSize}
          />
        </span>
      ))}
    </RowStyle>
  )
}

export default Row
