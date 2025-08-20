import React, { FC } from 'react'
import Title from 'Components/Shared/Title/Title'
import { BasketRowStyle } from './BasketRowStyle'
import Price from 'Components/Shared/Price/Price'

export interface BasketPageProps {
  text: string
  image?: string
  price: number
}

const BasketRow: FC<BasketPageProps> = ({ image, text, price }) => {
  return (
    <BasketRowStyle>
      {/* {image && <img src={image} alt="cardHeader" />} */}
      <div
        style={{
          background: '#242048',
          color: 'white',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          fontSize: '1.2em',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Price
        price={price}
        pricePeriod="month"
        style={{ background: '#242048', color: 'white' }}
      />
    </BasketRowStyle>
  )
}

export default BasketRow
