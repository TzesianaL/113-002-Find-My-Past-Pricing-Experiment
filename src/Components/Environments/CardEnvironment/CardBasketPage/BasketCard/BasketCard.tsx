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
  upfrontPrice?: number
}

/**
 * BasketCard is used to wrap all components we render in order to display selected Card.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const BasketCard: FC<BasketCardProps> = ({
  title,
  subtitle,
  price,
  upfrontPrice,
}) => {
  return (
    <BasketCardRow>
      <BasketCardStyle>
        <div
          style={{
            padding: '1em',
            backgroundColor: '#242048',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        >
          <BasketRow text={title} price={price} duration="monthly" />
        </div>
        <Title subtitle style={{ padding: '1em' }}>
          {subtitle !== undefined && (
            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
          )}
        </Title>
        <br />
      </BasketCardStyle>
    </BasketCardRow>
  )
}

export default BasketCard
