import { PriceStyle } from 'Components/Shared/Price/PriceStyle'
import { TitleStyle } from 'Components/Shared/Title/TitleStyle'
import styled from 'styled-components'

/**
 * Styled component is used to decorate CardWrapper component.
 * Props are passed from ThemeProvider component.
 */

export const BasketAddonCardStyle = styled.div`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);

  background-color: white;
  max-width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  color: black;
  @media (max-width: 768px) {
    max-width: 350px;
  }
`

export const BasketAddonCardRowStyle = styled.div`
  background-color: white;
  display: flex;
  width: 95%;
  padding: 1em;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 5px;
  color: black;

  ${TitleStyle} {
    color: black;
  }
  ${PriceStyle} {
    color: black;
    margin: 0.2em 0em 0.2em 0em;
  }
`
