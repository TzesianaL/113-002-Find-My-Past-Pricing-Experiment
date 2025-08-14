import React, { FC } from 'react'
import Text from 'Components/Environments/PCW/TextCell/TextCell'
import SubText from 'Components/Environments/PCW/SubTextCell/SubTextCell'
import ImageCell from 'Components/Environments/PCW/ImageCell/ImageCell'
import ListCell from 'Components/Environments/PCW/ListCell/ListCell'
import ChoosePlanCell from 'Components/Environments/PCW/ChoosePlanCell/ChoosePlanCell'
import { PCWSchema, CellDataType, TagType, PlanInfoData } from 'types'
import { IconText } from 'stories/PCWEnvironment/IconText.stories'
import TagList from '../TagList/TagList'

export interface PCWCellRenderProps {
  schemaColumn: PCWSchema
  cellsData: CellDataType[]
  planInfoData: PlanInfoData
  tags: TagType[] | undefined
  handleSelect: () => void
  mobileScreenSize: boolean
}

const PCWCellRender: FC<PCWCellRenderProps> = ({
  schemaColumn,
  cellsData,
  planInfoData,
  tags,
  handleSelect,
  mobileScreenSize,
}) => {
  const { type, shaded, dataSource, buttonText } = schemaColumn
  const columnData = cellsData.find((row) => row.id === dataSource)

  if (columnData === undefined) {
    throw new Error('ColumnData is undefined')
  }
  switch (type) {
    case 'text': {
      if (columnData.text !== undefined) {
        return <Text text={columnData.text} shaded={shaded} />
      }
      break
    }
    case 'subtext': {
      if (columnData?.text !== undefined && columnData?.subtext !== undefined) {
        return (
          <SubText
            text={columnData.text}
            subtext={columnData.subtext}
            shaded={shaded}
          />
        )
      }
      break
    }
    case 'image': {
      if (columnData?.imagePath !== undefined) {
        return (
          <ImageCell
            text={columnData.text}
            imagePath={columnData.imagePath}
            shaded={shaded}
          />
        )
      }
      break
    }

    case 'list': {
      if (columnData?.list !== undefined) {
        return <ListCell list={columnData.list} listType shaded={shaded} />
      }
      break
    }
    case 'button': {
      return (
        <>
          {mobileScreenSize && <TagList tags={tags} />}
          <ChoosePlanCell
            buttonText={buttonText}
            onSelect={handleSelect}
            moreInfoText={columnData.moreInfoText}
            planInfoData={planInfoData}
            cellsData={cellsData}
          />
        </>
      )
    }

    case 'icontext': {
      if (
        columnData?.imagePath !== undefined &&
        columnData?.text !== undefined
      ) {
        return (
          <IconText imagePath={columnData.imagePath} text={columnData.text} />
        )
      }
      break
    }

    default:
      throw Error('Choose the correct cell type')
  }

  throw Error(`Incorrect column type: ${schemaColumn}`)
}

export default PCWCellRender
