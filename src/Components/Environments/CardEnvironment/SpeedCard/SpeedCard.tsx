import React, { FC, useState, useEffect } from 'react'
import { Periods } from 'types'
import { useDispatch, useSelector } from 'react-redux'
import Price from 'Components/Shared/Price/Price'
import Title from 'Components/Shared/Title/Title'
import { useEFSData } from '@dectech/react-library'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { getSelectedCondition } from 'redux/reducers/dataStore/dataStore.selectors'
import Features from '../Features/Features'
import CallToAction from '../CallToAction/CallToAction'
import {
  CardContainer,
  SpeedCardStyle,
  SpeedCardHighlight,
  MainSpeed,
  SubTitle,
  Divider,
  SpeedDetail,
  SpeedValue,
  SpeedExample,
  TimeValue,
  PricingSection,
  PriceContainer,
  FromText,
  SelectButton,
} from './SpeedCardStyle'

/**
 * CardProps contains all appropriate props we should pass to nested components.
 */
export interface SpeedCardProps {
  title: string
  subtitle: string
  price: number
  currency?: string
  onSelect: (id) => void
  handleCardClick: (id: string) => void
  highlightedText?: string
  highlightedTextBGColor?: string
  id: string
  pricePeriod?: Periods
  purchaseButtonText?: string
  mainSpeed: string
  downloadSpeed: string
  downloadExample: string
  downloadTime: string
  uploadSpeed: string
  uploadExample: string
  uploadTime: string
  selected?: boolean
}

/**
 * Card is used to wrap all components we render in order to create each cart.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const SpeedCard: FC<SpeedCardProps> = ({
  title,
  subtitle,
  price,
  currency,
  onSelect,
  handleCardClick,
  highlightedText,
  highlightedTextBGColor,
  pricePeriod,
  mainSpeed,
  downloadSpeed,
  downloadExample,
  downloadTime,
  uploadSpeed,
  uploadExample,
  uploadTime,
  id,
  purchaseButtonText,
  selected,
}) => {
  // TODO: This should be replaced to something using the props, as the card probably shouldn't rely on useEFSData hook

  return (
    <SpeedCardStyle
      role="article"
      highlightColor={highlightedTextBGColor}
      selected={selected}
    >
      <CardContainer>
        {highlightedText && (
          <SpeedCardHighlight>{highlightedText}</SpeedCardHighlight>
        )}
        {/* <Title style={{ textAlign: 'left' }}>{title}</Title> */}
        <MainSpeed>{mainSpeed}</MainSpeed>
        <SubTitle>{subtitle}</SubTitle>
        <Divider />
        <SpeedDetail>
          <SpeedValue>{downloadSpeed}</SpeedValue>
          <SpeedExample>
            <span>{downloadExample}</span>
            <TimeValue>{downloadTime}</TimeValue>
          </SpeedExample>
        </SpeedDetail>
        <SpeedDetail>
          <SpeedValue>{uploadSpeed}</SpeedValue>
          <SpeedExample>
            <span>{uploadExample}</span>
            <TimeValue>{uploadTime}</TimeValue>
          </SpeedExample>
        </SpeedDetail>
        <PricingSection>
          <PriceContainer>
            <FromText>from</FromText>
            <Price
              price={price}
              currency={currency}
              // priceString={priceString}
              pricePeriod={pricePeriod}
              id={id}
            />
          </PriceContainer>

          <CallToAction
            buttonText={purchaseButtonText || ''}
            onClick={() => {
              onSelect(id)
              handleCardClick(id)
            }}
          />
        </PricingSection>
      </CardContainer>
    </SpeedCardStyle>
  )
}

export default SpeedCard
