import React, { FC } from 'react'
import Title from 'Components/Shared/Title/Title'
import { BasketRowStyle } from './BasketRowStyle'
import Price from 'Components/Shared/Price/Price'

export interface BasketPageProps {
  text: string
  image?: string
  price: number
  duration: string
}

const BasketRow: FC<BasketPageProps> = ({ image, text, price, duration }) => {
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
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          style={{ color: 'white' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1em', color: 'white' }}>
          £{price.toFixed(2)}/{duration}
        </div>
        {/* <div style={{ fontSize: '0.8em', marginLeft: '0.5em' }}>
          / {duration}
        </div> */}
      </div>
    </BasketRowStyle>
  )
}

export default BasketRow
