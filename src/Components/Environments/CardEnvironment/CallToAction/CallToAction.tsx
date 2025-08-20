import React, { FC } from 'react'
import Button from 'Components/Shared/Button/Button'
import { CallToActionStyle } from './CallToActionStyle'

export interface CallToActionProps {
  /**
   * Text to be displayed on top of the button
   */
  buttonText: string
  /**
   * Function to handle onClick action
   */
  onClick: () => void
  style?: React.CSSProperties
}

/**
 * CallToAction component wraps both label and button and display them vertically. Styled components are used in order to build the styling.
 */
const CallToAction: FC<CallToActionProps> = ({
  buttonText,
  onClick,
  style,
}) => {
  return (
    <CallToActionStyle style={style}>
      <Button onClick={onClick}>{buttonText}</Button>
    </CallToActionStyle>
  )
}

export default CallToAction
