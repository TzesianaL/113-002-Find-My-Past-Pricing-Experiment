import { BlockLayout, BlockEnums, AddonData } from 'types'

const layoutToDataMap = new Map([
  [BlockEnums.Title, 'title'],
  [BlockEnums.Subtitle, 'subtitle'],
  [BlockEnums.Features, 'features'],
  [BlockEnums.Price, 'price'],
])

const getDataForLayoutBlock = (
  layout: BlockLayout,
  data: AddonData
): string | string[] | number =>
  data[layoutToDataMap.get(layout.blockType) ?? ''] || ''

export default getDataForLayoutBlock
