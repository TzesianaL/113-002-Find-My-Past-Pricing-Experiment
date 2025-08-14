import styled from 'styled-components'
import { ButtonStyle } from '../../../Shared/Button/ButtonStyle'

export const PCWBasketStyle = styled.div`
  display: flex;
  flex-direction: column;
  .footerText {
    font-size: small;
    text-align: center;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75%;
  justify-content: space-between;
  margin: 3em 0em 5em 0em;

  ${ButtonStyle} {
    width: 45%;
  }
`

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 40%;
  margin-top: 6em;
  align-items: center;
  .cardWrapper {
    width: 75%;
  }
`
