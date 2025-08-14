import React from 'react'

type CSSProperties = React.CSSProperties

export enum BlockEnums {
  HStack = 'HStack',
  VStack = 'VStack',
  Image = 'Image',
  Title = 'Title',
  Subtitle = 'Subtitle',
  Features = 'Features',
  Price = 'Price',
  AddRemoveButton = 'AddRemoveButton',
  Null = 'Null',
}

export interface CompositionalLayoutBlock {
  blockType: BlockEnums.HStack | BlockEnums.VStack
  blocks: BlockLayout[]
  styleOverride?: CSSProperties
}

export interface DataLayoutBlock {
  blockType:
    | BlockEnums.Title
    | BlockEnums.Subtitle
    | BlockEnums.Image
    | BlockEnums.Features
    | BlockEnums.Price
    | BlockEnums.AddRemoveButton
    | BlockEnums.Null
  styleOverride?: CSSProperties
}

export type BlockLayout = CompositionalLayoutBlock | DataLayoutBlock

export function isInstanceOfCompositionalLayout(
  el: BlockLayout
): el is CompositionalLayoutBlock {
  const possibleBlocks = new Set([BlockEnums.VStack, BlockEnums.HStack])
  return possibleBlocks.has(el.blockType)
}

export function isInstanceOfDataLayout(el: BlockLayout): el is DataLayoutBlock {
  const possibleBlocks = new Set([
    BlockEnums.Title,
    BlockEnums.Subtitle,
    BlockEnums.Image,
    BlockEnums.Features,
    BlockEnums.Price,
    BlockEnums.AddRemoveButton,
  ])
  return possibleBlocks.has(el.blockType)
}
