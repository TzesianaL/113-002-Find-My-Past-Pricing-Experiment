import React, { ReactElement } from 'react'
import Title from 'Components/Shared/Title/Title'
import { PlanInfoData } from 'types'
import Line from 'Components/Shared/Line/Line'
import { FeatureList, TableInfo } from './PopupWindowStyle'

export function PlanInfoMainText(data: PlanInfoData): ReactElement {
  switch (data.type) {
    case 'table': {
      return (
        <TableInfo>
          <h4>{data.title}</h4>
          {data.table?.map((row, value) => (
            // eslint-disable-next-line react/no-array-index-key
            <Line property={row.rowHeader} value={row.rowValue} key={value} />
          ))}
        </TableInfo>
      )
    }
    case 'featureList': {
      return (
        <FeatureList>
          <h4>{data.title}</h4>
          <ul>
            {data.featureList?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FeatureList>
      )
    }
    default:
      // text type
      return <Title subtitle>{data.text}</Title>
  }

  return <></>
}
