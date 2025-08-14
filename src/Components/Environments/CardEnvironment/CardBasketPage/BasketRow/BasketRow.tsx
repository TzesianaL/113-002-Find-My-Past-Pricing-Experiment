import React, { FC } from 'react'
import Title from 'Components/Shared/Title/Title'
import { BasketRowStyle } from './BasketRowStyle'

export interface BasketPageProps {
  text: string
  image?: string
}

const BasketRow: FC<BasketPageProps> = ({ image, text }) => {
  return (
    <BasketRowStyle>
      {image && <img src={image} alt="cardHeader" />}
      <Title>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Title>
    </BasketRowStyle>
  )
}

export default BasketRow
