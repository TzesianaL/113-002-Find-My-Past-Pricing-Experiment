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
import Button from 'Components/Shared/Button/Button'

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
    quarterlyMonthly?: number
    annualMonthly?: number
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
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(true)

  // TODO: This should be replaced to something using the props, as the card probably shouldn't rely on useEFSData hook
  const { showProductRangeOnly } = useEFSData()

  const handleFeaturesExpandedChange = (isExpanded: boolean) => {
    setIsFeaturesExpanded(isExpanded)
  }

  // Calculate dynamic height based on features expansion
  const cardHeight = isFeaturesExpanded ? 'auto' : '850px'

  return (
    <CardStyle role="article" isSelected={isSelected} newWidth={cardHeight}>
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

        <Features
          features={features}
          style={{ background: isFeaturesExpanded ? '#F5F0EB' : 'transparent' }}
          onExpandedChange={handleFeaturesExpandedChange}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            width: '100%',
            margin: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
            }}
          >
            <div style={{ fontWeight: 'bold' }}>Monthly</div>
            <Button
              style={{
                backgroundColor: '#F4D13D',
                color: '#242048',
                width: '200px',
                border: '1px solid #242048',
              }}
              onClick={() => {
                onSelect(id)
                handleCardClick(id)
              }}
            >
              £{price.monthly.toFixed(2)}/Month
            </Button>
          </div>
          <div
            style={{
              fontSize: '0.8em',
              textAlign: 'left',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
              paddingTop: '0.5em',
            }}
          >
            *Billed as a single payment of £{price.monthly.toFixed(2)}.
            Automatic billing, cancel any time.
          </div>
          <hr style={{ width: '90%' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
            }}
          >
            <div style={{ fontWeight: 'bold' }}>Quarterly</div>
            <Button
              style={{
                backgroundColor: '#F4D13D',
                color: '#242048',
                width: '200px',
                border: '1px solid #242048',
              }}
              onClick={() => {
                onSelect(id)
                handleCardClick(id)
              }}
            >
              £{price.quarterlyMonthly.toFixed(2)}/Month
            </Button>
          </div>
          <div
            style={{
              fontSize: '0.8em',
              textAlign: 'left',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
              paddingTop: '0.5em',
            }}
          >
            *Billed as a single payment of £{price.quarterly.toFixed(2)}.
            Automatic billing, cancel any time.
          </div>
          <hr style={{ width: '90%' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
            }}
          >
            <div style={{ fontWeight: 'bold' }}>Annually</div>
            <Button
              style={{
                backgroundColor: '#F4D13D',
                color: '#242048',
                width: '200px',
                border: '1px solid #242048',
              }}
              onClick={() => {
                onSelect(id)
                handleCardClick(id)
              }}
            >
              £{price.annualMonthly.toFixed(2)}/Month
            </Button>
          </div>
          <div
            style={{
              fontSize: '0.8em',
              textAlign: 'left',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
              paddingTop: '0.5em',
            }}
          >
            *Billed as a single payment of £{price.annualy.toFixed(2)}.
            Automatic billing, cancel any time.
          </div>
        </div>
      </CardContentsStyle>
    </CardStyle>
  )
}

export default Card
