import React, { FC, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { merge } from 'lodash-es'
import { CardItem } from 'types'
import Card from '../Card/Card'
import { CardGroupStyle } from './CardGroupStyle'

export interface CardGroupProps {
  items: CardItem[]
  hidePrice?: boolean
  purchaseButtonText?: string
  selected?: string
  onSelect(id: string, price: number, duration: string): void
  handleCardClick(id: string): void
}

/**
 * CardGroup is used to wrap all components we render in order to create each cart.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const CardGroup: FC<CardGroupProps> = ({
  items,
  hidePrice,
  selected,
  onSelect,
  purchaseButtonText = 'Choose Plan',
  handleCardClick,
}) => {
  const anyHighlighted = items.some((item) => item.highlightedText)

  const handleOnClick = (id: string, price: number, duration: string) => {
    onSelect(id, price, duration)
  }

  return (
    <CardGroupStyle anyHighlighted={anyHighlighted}>
      {items.map((item) => (
        <ThemeProvider
          key={item.id}
          theme={(theme) => {
            return merge({}, theme, {
              card: {
                backgroundColor: item.cardColor || theme.card?.backgroundColor,
              },
              button: {
                backgroundColor: item.id === selected ? 'green' : '#005000',
              },
            })
          }}
        >
          <Card
            id={item.id}
            cardImage={item.headerImage}
            price={item.price}
            hidePrice={hidePrice}
            currency={item.currency}
            priceString={item.priceString}
            title={item.title}
            subtitle={item.subtitle}
            subtitle2={item.subtitle2}
            features={item.features}
            pricePeriod={item.pricePeriod}
            highlightedText={item.highlightedText}
            onSelect={(id: string, price: number, duration: string) =>
              handleOnClick(id, price, duration)
            }
            purchaseButtonText={
              item.id === selected ? 'Selected' : purchaseButtonText
            }
            handleCardClick={(id: string) => {
              handleCardClick(id)
            }}
            isSelected={item.id === selected}
          />
        </ThemeProvider>
      ))}
    </CardGroupStyle>
  )
}

export default CardGroup
