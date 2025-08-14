import { PriceStyle } from 'Components/Shared/Price/PriceStyle'
import { TitleStyle } from 'Components/Shared/Title/TitleStyle'
import styled from 'styled-components'

/**
 * Styled component is used to decorate CardWrapper component.
 * Props are passed from ThemeProvider component.
 */

export const BasketAddonCardStyle = styled.div`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);
  border-radius: 5px;
  margin: 0em 1em 1em 1em;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 97%;
  color: black;
`

export const BasketAddonCardRowStyle = styled.div`
  background-color: white;
  display: flex;
  width: 89%;
  // margin: 0.5em 1em 1em 1em;
  justify-content: space-between;
  flex-direction: row;
  color: black;

  ${TitleStyle} {
    color: black;
  }
  ${PriceStyle} {
    color: black;
    margin: 0.2em 0em 0.2em 0em;
  }
`
