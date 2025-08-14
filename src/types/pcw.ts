import { ImageCellProps } from 'Components/Environments/PCW/ImageCell/ImageCell'
import { ListCellProps } from 'Components/Environments/PCW/ListCell/ListCell'
import { SubTextCellProps } from 'Components/Environments/PCW/SubTextCell/SubTextCell'
import { TextCellProps } from 'Components/Environments/PCW/TextCell/TextCell'
import { ChoosePlanCellProps } from 'Components/Environments/PCW/ChoosePlanCell/ChoosePlanCell'
import { XOR5 } from './util'

type ExclusiveCellProps = XOR5<
  ImageCellProps,
  ListCellProps,
  SubTextCellProps,
  TextCellProps,
  Omit<ChoosePlanCellProps, 'onSelect' | 'buttonStyle'>
>

export interface PCWSchema {
  type: 'text' | 'subtext' | 'image' | 'list' | 'button' | 'icontext'
  excludedFromPlanInfo: boolean
  shaded?: boolean
  excludedFromBasket?: boolean
  sortable?: boolean
  dataSource: string
  name?: string
  isPrice?: boolean
  buttonText?: string
}

export type CellDataType = ExclusiveCellProps & {
  id: string
  value?: number
}

export interface TagType {
  text: string
  color?: string
  tagColorType?: 'primary' | 'secondary' | 'tertiary'
}

export interface PCWProductData {
  id: string
  cells: CellDataType[]
  tags?: TagType[]
  planInfo: PlanInfoData
}

export interface PlanInfoData {
  type: 'table' | 'featureList' | 'text'
  introText?: string
  footerText?: string
  featureList?: string[]
  text?: string
  title?: string
  table?: {
    rowHeader: string
    rowValue: string
  }[]
}
