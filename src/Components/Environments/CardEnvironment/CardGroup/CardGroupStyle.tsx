import styled from 'styled-components'
import { CardStyle } from '../Card/CardStyle'

/**
 * Styled component is used to decorate CallToAction wrapper component.
 * Props are passed from ThemeProvider component.
 */

export const CardGroupStyle = styled.div<{
  anyHighlighted: boolean
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1em;
  background: #f2f2f2;

  ${CardStyle} {
    margin-left: 1em;
    margin-right: 1em;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    ${CardStyle} {
      margin-left: 0;
      margin-right: 0;
    }
  }

  // Provide a gap for non-highlighted stores, if any are highlighted, so they have the same vertical position
  ${(props) =>
    props.anyHighlighted &&
    `
    & ${CardStyle} {
      margin-top: 2em;
    }
  `}
`
