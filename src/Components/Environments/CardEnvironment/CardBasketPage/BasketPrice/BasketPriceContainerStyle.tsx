import styled from 'styled-components'

/**
 * Styled component is used to decorate BasketPriceContainer component.
 * Props are passed from ThemeProvider component.
 */

export const BasketPriceContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: bold;
  div {
    margin: 0;
    padding: 0em 1em 0em 1em;
    text-align: right;
  }

  h3 {
    margin: 0;
    padding: 1em;
    text-align: right;
    color: black;
  }
  color: ${(props) =>
    props.theme.card?.color || props.theme.colors?.primary || '#000000'};
`
