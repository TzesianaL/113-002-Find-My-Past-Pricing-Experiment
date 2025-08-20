import React, { FC, useState } from 'react'
import { CSSProperties } from 'styled-components'
import { FeaturesStyle, DropdownHeader, DropdownContent } from './FeaturesStyle'

export interface FeaturesProps {
  /**
   * Features is an array which contains all the features of string type
   */
  features: string
  style?: CSSProperties
  onExpandedChange?: (isExpanded: boolean) => void
}

/**
 * Component that displays features using un-order list and styled component.
 */
const Features: FC<FeaturesProps> = ({ style, features, onExpandedChange }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpanded = () => {
    const newExpandedState = !isExpanded
    setIsExpanded(newExpandedState)
    onExpandedChange?.(newExpandedState)
  }

  return (
    <div style={style}>
      <DropdownHeader onClick={toggleExpanded}>
        <span>What is included</span>
        <span
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          ▼
        </span>
      </DropdownHeader>

      <DropdownContent isExpanded={isExpanded}>
        <FeaturesStyle>
          <div
            style={{ marginBottom: '11px' }}
            dangerouslySetInnerHTML={{ __html: features }}
          />
        </FeaturesStyle>
      </DropdownContent>
    </div>
  )
}

export default Features
