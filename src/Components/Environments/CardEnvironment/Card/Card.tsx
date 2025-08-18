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
import { CardContentsStyle, CardStyle } from './CardStyle'
import CardHighlight from '../CardHighlight/CardHighlight'

/**
 * CardProps contains all appropriate props we should pass to nested components.
 */
export interface CardProps {
  title: string
  subtitle: string
  subtitle2?: string
  price: {
    monthly: number
    quarterly?: number
    annualy?: number
  }
  currency?: string
  priceString?: string
  hidePrice?: boolean
  features: string
  onSelect: (id) => void
  handleCardClick: (id: string) => void
  cardImage?: string
  purchaseButtonText?: string
  upfrontPrice?: number
  pricePeriod?: Periods
  highlightedText?: string
  id: string
  isSelected?: boolean
}

/**
 * Card is used to wrap all components we render in order to create each cart.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const Card: FC<CardProps> = ({
  title,
  subtitle,
  subtitle2,
  price,
  currency,
  upfrontPrice,
  priceString,
  hidePrice,
  features,
  onSelect,
  cardImage,
  purchaseButtonText,
  pricePeriod,
  highlightedText,
  handleCardClick,
  id,
  isSelected = false,
}) => {
  // TODO: This should be replaced to something using the props, as the card probably shouldn't rely on useEFSData hook
  const { showProductRangeOnly } = useEFSData()

  return (
    <CardStyle role="article" isSelected={isSelected}>
      {highlightedText && (
        <CardHighlight isSelected={isSelected}>{highlightedText}</CardHighlight>
      )}
      <CardContentsStyle>
        {cardImage && <img src={cardImage} height="130" alt="cardHeader" />}
        <div
          style={{
            color: 'white',
            backgroundColor: '#232147',
            width: '100%',
          }}
        >
          <Title style={{ width: '100%', color: 'white' }}>
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Title>
          <div
            dangerouslySetInnerHTML={{ __html: subtitle }}
            style={{ padding: '0.7em' }}
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: subtitle2 }} />

        <Features features={features} />
        <hr style={{ width: '100%' }} />
        {!hidePrice && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '100%',
              margin: '10px',
            }}
          >
            {/* <Price
              price={price.monthly}
              currency={currency}
              priceString={priceString}
              pricePeriod={pricePeriod}
              id={id}
            /> */}
            {/* <Price
              price={price.quarterly}
              currency={currency}
              priceString={priceString}
              pricePeriod={pricePeriod}
              id={id}
            />
            <Price
              price={price.annualy}
              currency={currency}
              priceString={priceString}
              pricePeriod={pricePeriod}
              id={id}
            /> */}
          </div>
        )}

        {!showProductRangeOnly && (
          <CallToAction
            buttonText={purchaseButtonText || ''}
            onClick={() => {
              onSelect(id)
              handleCardClick(id)
            }}
          />
        )}
      </CardContentsStyle>
    </CardStyle>
  )
}

export default Card
