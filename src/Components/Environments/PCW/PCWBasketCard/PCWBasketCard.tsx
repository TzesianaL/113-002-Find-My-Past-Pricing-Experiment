import React, { FC } from 'react'
import { PCWProductData, PCWSchema } from 'types'
import Line from 'Components/Shared/Line/Line'
import { PCWBasketCardStyle, PCWTitleStyle } from './PCWBasketCardstyle'

export interface PCWBasketCardProps {
  pcwCardproperties: PCWProductData
  schema: PCWSchema[]
}

const PCWBasketCard: FC<PCWBasketCardProps> = ({
  pcwCardproperties,
  schema,
}) => {
  const titleData = {
    image: '',
    text: 'null text',
  }

  // filter out the properties where excludeFromBasket in the scheme is true, and also the
  // image/text cell that we're using

  const schemaWithData = schema.map((schemaItem) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const dataItem = pcwCardproperties.cells.find(
      (property) => property.id === schemaItem.dataSource
    )!

    return {
      schemaItem,
      dataItem,
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const schemaWithDataToDisplay = schemaWithData.filter((item) => {
    if (item.schemaItem.excludedFromBasket) {
      return false
    }

    if (item.schemaItem.type === 'image') {
      titleData.image = item.dataItem.imagePath ?? ''
      titleData.text = item.dataItem.text ?? ''
      return false
    }

    return true
  })

  const propertiesToDisplay = schemaWithDataToDisplay.map((item) => ({
    title: item.schemaItem.name ?? 'Empty Value',
    text: item.dataItem.text ?? item.dataItem.subtext ?? 'AHHH ERROR!!!',
  }))

  return (
    <PCWBasketCardStyle>
      <PCWTitleStyle>
        <img src={titleData.image} alt="" />
        <h2>{titleData.text}</h2>
      </PCWTitleStyle>
      {propertiesToDisplay.map(({ title, text }) => (
        <Line property={title} value={text} key={text} />
      ))}
    </PCWBasketCardStyle>
  )
}

export default PCWBasketCard
