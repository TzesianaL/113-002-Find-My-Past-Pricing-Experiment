/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react'
import VStack from 'Components/Shared/VStack/VStack'
import Title from 'Components/Shared/Title/Title'
import Features from 'Components/Environments/CardEnvironment/Features/Features'
import {
  BlockLayout,
  BlockEnums,
  isInstanceOfCompositionalLayout,
  isInstanceOfDataLayout,
  AddonData,
} from 'types'
import { getCost } from 'redux/reducers/logicStore/logicStore.selectors'
import { useSelector } from 'react-redux'
import { getSelectedCondition } from 'redux/reducers/dataStore/dataStore.selectors'
import HStack from 'Components/Shared/HStack/HStack'
import Price from 'Components/Shared/Price/Price'
import getDataForLayoutBlock from './GetDataForLayoutBlock'
import AddonButton from './AddonButton/AddonButton'

const AddonLayoutFactory: FC<{
  element: BlockLayout
  dataset: AddonData
}> = ({ element, dataset }) => {
  const selectedCondition = useSelector(getSelectedCondition)
  const cost = useSelector(getCost)

  if (isInstanceOfCompositionalLayout(element)) {
    switch (element.blockType) {
      case BlockEnums.VStack: {
        return (
          <VStack style={element.styleOverride}>
            {element.blocks.map((el, i) => (
              <AddonLayoutFactory key={i} element={el} dataset={dataset} />
            ))}
          </VStack>
        )
      }
      case BlockEnums.HStack: {
        return (
          <HStack style={element.styleOverride}>
            {element.blocks.map((el, i) => (
              <AddonLayoutFactory key={i} element={el} dataset={dataset} />
            ))}
          </HStack>
        )
      }

      default: {
        throw new Error(
          `Compositional Layout factory method not found: : ${element}`
        )
      }
    }
  }

  if (isInstanceOfDataLayout(element)) {
    const blockData = getDataForLayoutBlock(element, dataset)

    // it's definitely a data block
    switch (element.blockType) {
      case BlockEnums.Image: {
        // if there's no block data, then don't render this element
        if (!blockData) {
          return null
        }

        return (
          <img
            src={blockData as string}
            style={element.styleOverride}
            alt="Addon"
          />
        )
      }

      case BlockEnums.Title: {
        // if there's no block data, then don't render this element
        if (!blockData) {
          return null
        }

        return (
          <Title style={element.styleOverride}>{blockData as string}</Title>
        )
      }

      case BlockEnums.Subtitle: {
        // if there's no block data, then don't render this element
        if (!blockData) {
          return null
        }

        return (
          <Title style={element.styleOverride} subtitle>
            <div dangerouslySetInnerHTML={{ __html: blockData as string }} />
          </Title>
        )
      }

      case BlockEnums.Features: {
        // if there's no block data, then don't render this element
        if (!blockData) {
          return null
        }

        return (
          <Features
            style={element.styleOverride}
            features={blockData as string[]}
          />
        )
      }

      case BlockEnums.Price: {
        // if there's no block data, then don't render this element
        // if (!blockData) {
        //   return null
        // }

        return (
          <>
            <hr style={{ width: '100%' }} />

            <Price
              style={element.styleOverride}
              price={dataset.price || 0}
              id={dataset.title}
              pricePeriod="month"
            />
          </>
        )
      }

      case BlockEnums.AddRemoveButton: {
        return (
          <AddonButton styleOverride={element.styleOverride} addon={dataset} />
        )
      }

      default: {
        throw Error(`Data Layout factory method not found: ${element}`)
      }
    }
  }

  throw new Error(`Unable to figure out what type of block ${element} is`)
}

export default AddonLayoutFactory
