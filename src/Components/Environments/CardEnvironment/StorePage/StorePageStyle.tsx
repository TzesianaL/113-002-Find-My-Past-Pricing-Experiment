import styled from 'styled-components'
import { CardGroupStyle } from '../CardGroup/CardGroupStyle'

export const StorePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 3em;
  background: #f2f2f2;

  h2,
  h1 {
    color: black;
  }

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  ${CardGroupStyle} {
    margin-top: 2em;
    margin-bottom: 2em;
    // width: 1540px;
  }

  .introText {
    font-size: 1.2em;
    max-width: 50em;
    @media screen and (max-width: 600px) {
      img {
        width: 100%;
      }
    }
  }

  .footerText {
    @media screen and (max-width: 600px) {
      max-width: 17em;
    }
    font-size: 1.2em;
    max-width: 50em;
  }
`

export const NewAddonGroupStyle = styled.div`
  display: flex;
  flex-direction: row !important;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`
