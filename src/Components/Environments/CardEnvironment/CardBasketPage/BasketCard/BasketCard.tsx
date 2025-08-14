import React, { FC } from 'react'
import Title from 'Components/Shared/Title/Title'
import { AddonData } from 'types'
import Price from 'Components/Shared/Price/Price'
import BasketRow from '../BasketRow/BasketRow'
import { BasketCardStyle, BasketCardRow } from './BasketCardStyle'

/**
 * CardProps contains all appropriate props we should pass to nested components.
 */
export interface BasketCardProps {
  title: string
  subtitle?: string
  cardImage?: string
  price?: number
  speed: string
  upfrontPrice?: number
}

/**
 * BasketCard is used to wrap all components we render in order to display selected Card.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const BasketCard: FC<BasketCardProps> = ({
  title,
  speed,
  subtitle,
  price,
  upfrontPrice,
}) => {
  return (
    <BasketCardRow>
      <BasketCardStyle style={{ border: '2px solid black' }}>
        <BasketRow text={speed} />
        <BasketRow text={title} />
        <Title subtitle>
          {subtitle !== undefined && (
            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
          )}
          <br />
          <hr />
          <div style={{ display: 'flex', gap: '1em' }}>
            <Price price={price} pricePeriod="month" />
            <Price price={upfrontPrice} pricePeriod="upfront" />
          </div>
        </Title>
      </BasketCardStyle>
    </BasketCardRow>
  )
}

export default BasketCard
