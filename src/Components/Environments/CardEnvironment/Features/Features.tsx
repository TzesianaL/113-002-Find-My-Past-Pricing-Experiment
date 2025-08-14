import React, { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { FeaturesStyle } from './FeaturesStyle'

export interface FeaturesProps {
  /**
   * Features is an array which contains all the features of string type
   */
  features: string[]
  style?: CSSProperties
}

/**
 * Component that displays features using un-order list and styled component.
 */
const Features: FC<FeaturesProps> = ({ style, features }) => {
  if (features.length === 0) {
    return null
  }

  return (
    <FeaturesStyle style={style}>
      {/* {features[0]} */}
      {/* {features && features.map((feature) => <li key={feature}>{feature}</li>)} */}
      {features &&
        features.map((feature) => (
          <div
            style={{ marginBottom: '11px' }}
            dangerouslySetInnerHTML={{ __html: feature }}
            key={feature}
          />
        ))}
    </FeaturesStyle>
  )
}

export default Features
