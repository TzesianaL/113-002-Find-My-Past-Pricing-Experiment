import React, { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { ButtonStyle } from './ButtonStyle'

export interface ButtonProps {
  /**
   * Function to handle the button click.
   * This isn't needed if the button is inactive
   */
  onClick?: () => void

  /**
   * Sets whether the button is inactive
   */
  disabled?: boolean

  style?: CSSProperties
}

/**
 * Button component creates a button with a specific text, given by the user.
 * ButtonStyle component is used to style the button
 */
const Button: FC<ButtonProps> = ({ children, onClick, disabled, style }) => {
  // const onClickHandler = disabled || !onClick ? undefined : onClick
  const handleClick = (e) => {
    if (onClick !== undefined) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <ButtonStyle
      style={style}
      onClick={(e) => {
        handleClick(e)
      }}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button
