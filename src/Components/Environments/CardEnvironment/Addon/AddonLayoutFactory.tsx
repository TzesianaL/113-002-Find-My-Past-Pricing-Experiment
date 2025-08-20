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
import styled from 'styled-components'
import getDataForLayoutBlock from './GetDataForLayoutBlock'
import AddonButton from './AddonButton/AddonButton'
import data from 'assets/data/data'
import { Button } from '@mui/material'

const AddonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin: 1em;
  padding: 1em;
  width: 800px;
  max-width: calc(100vw - 2em);
  align-self: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: calc(100vw - 1em);
    min-height: 180px;
    height: auto;
    margin: 0.5em;
    padding: 1em 0.5em;
    gap: 1em;
    box-sizing: border-box;
  }
`

const ContentSection = styled.div`
  flex-direction: column;
  width: 450px;

  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const PriceSection = styled.div`
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const TitleText = styled.div`
  font-weight: bold;
  font-size: 1.2em;

  @media screen and (max-width: 600px) {
    font-size: 1.1em;
  }
`

const SubtitleText = styled.p`
  margin: 0.5em 0;

  @media screen and (max-width: 600px) {
    font-size: 0.9em;
    margin: 0.5em 0 0 0;
    line-height: 1.3;
    min-height: 2.6em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

const PriceText = styled.div`
  font-weight: bold;
  font-size: 1.2em;

  @media screen and (max-width: 600px) {
    font-size: 1.1em;
  }
`

const PeriodText = styled.div`
  font-size: 0.7em;

  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`

const ButtonSection = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
    min-height: 40px;
  }
`

const AddonLayoutFactory: FC<{
  element: BlockLayout
  dataset: AddonData
}> = ({ element, dataset }) => {
  return (
    <AddonContainer>
      <ContentSection>
        <TitleText>{dataset.title}</TitleText>
        <SubtitleText>{dataset.subtitle}</SubtitleText>
      </ContentSection>
      <PriceSection>
        <PriceText>£{dataset.price.toFixed(2)}</PriceText>
        <PeriodText>Monthly</PeriodText>
      </PriceSection>
      <ButtonSection>
        <AddonButton
          styleOverride={{
            backgroundColor: '#F4D13D',
            color: '#242048',
            width: '100px',
            minWidth: '80px',
            border: '1px solid #242048',
            padding: `0.2em 0em`,
          }}
          addon={dataset}
        />
      </ButtonSection>
    </AddonContainer>
  )

  // if (isInstanceOfCompositionalLayout(element)) {
  //   switch (element.blockType) {
  //     case BlockEnums.VStack: {
  //       return (
  //         <VStack style={element.styleOverride}>
  //           {element.blocks.map((el, i) => (
  //             <AddonLayoutFactory key={i} element={el} dataset={dataset} />
  //           ))}
  //         </VStack>
  //       )
  //     }
  //     case BlockEnums.HStack: {
  //       return (
  //         <HStack style={element.styleOverride}>
  //           {element.blocks.map((el, i) => (
  //             <AddonLayoutFactory key={i} element={el} dataset={dataset} />
  //           ))}
  //         </HStack>
  //       )
  //     }
  //     default: {
  //       throw new Error(
  //         `Compositional Layout factory method not found: : ${element}`
  //       )
  //     }
  //   }
  // }
  // if (isInstanceOfDataLayout(element)) {
  //   const blockData = getDataForLayoutBlock(element, dataset)
  //   // it's definitely a data block
  //   switch (element.blockType) {
  //     case BlockEnums.Image: {
  //       // if there's no block data, then don't render this element
  //       if (!blockData) {
  //         return null
  //       }
  //       return (
  //         <img
  //           src={blockData as string}
  //           style={element.styleOverride}
  //           alt="Addon"
  //         />
  //       )
  //     }
  //     case BlockEnums.Title: {
  //       // if there's no block data, then don't render this element
  //       if (!blockData) {
  //         return null
  //       }
  //       return (
  //         <Title style={element.styleOverride}>{blockData as string}</Title>
  //       )
  //     }
  //     case BlockEnums.Subtitle: {
  //       // if there's no block data, then don't render this element
  //       if (!blockData) {
  //         return null
  //       }
  //       return (
  //         <Title style={element.styleOverride} subtitle>
  //           <div dangerouslySetInnerHTML={{ __html: blockData as string }} />
  //         </Title>
  //       )
  //     }
  //     case BlockEnums.Features: {
  //       // if there's no block data, then don't render this element
  //       if (!blockData) {
  //         return null
  //       }
  //       return null
  //       // <Features
  //       //   style={element.styleOverride}
  //       //   features={blockData as string[]}
  //       // />
  //     }
  //     case BlockEnums.Price: {
  //       // if there's no block data, then don't render this element
  //       // if (!blockData) {
  //       //   return null
  //       // }
  //       return (
  //         <>
  //           <hr style={{ width: '100%' }} />
  //           <Price
  //             style={element.styleOverride}
  //             price={dataset.price || 0}
  //             id={dataset.title}
  //             pricePeriod="month"
  //           />
  //         </>
  //       )
  //     }
  //     case BlockEnums.AddRemoveButton: {
  //       return (
  //         <AddonButton styleOverride={element.styleOverride} addon={dataset} />
  //       )
  //     }
  //     default: {
  //       throw Error(`Data Layout factory method not found: ${element}`)
  //     }
  //   }
  // }
  // throw new Error(`Unable to figure out what type of block ${element} is`)
}

export default AddonLayoutFactory
