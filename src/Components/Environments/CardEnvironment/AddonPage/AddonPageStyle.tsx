import styled from 'styled-components'
import { AddonGroupStyle } from '../AddonGroup/AddonGroupStyle'

export const AddonPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 3em;
  background: #f2f2f2;
}

  .introText {
    font-size: 1.2em;
    max-width: 50em;
    @media screen and (max-width:600px) {
      max-width: 16em;
     
    }
  }

  .footerText {
    font-size: 1.2em;
    max-width: 50em;
    @media screen and (max-width: 600px) {
      max-width: 16em;
    }
  }
  h3,h2,h1{
    color: black;
  }

  ${AddonGroupStyle} {
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    background: #f2f2f2;
    justify-content: center;
  }
`
