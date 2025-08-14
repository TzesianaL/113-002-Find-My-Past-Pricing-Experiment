import styled from 'styled-components'
import { BasketCardWrapper } from './BasketCard/BasketCardStyle'

export const CardBasketPageStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3em;

  ${BasketCardWrapper} {
    margin-top: 2em;
  }

  .introText {
    font-size: 1.2em;
    max-width: 50em;
    @media screen and (max-width: 600px) {
      max-width: 17em;
    }
  }

  .footerText {
    font-size: 1.2em;
    max-width: 50em;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 0.5em 1em;
  }
`
