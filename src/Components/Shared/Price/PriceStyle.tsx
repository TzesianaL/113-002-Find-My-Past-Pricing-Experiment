import styled from 'styled-components'

/**
 * Styled components are used in order to style Price component. Props are passed through ThemeProvider.
 */
export const PriceStyle = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.color || props.theme.colors?.primary};
  font-size: ${(props) =>
    props.theme.priceFontSize || props.theme.fontSize || 1.2}rem;
  margin: 0em 0em 0.5em 0em;
  del {
    color: red;
  }
  .pricePeriodPlaceHolder {
    font-size: small;
    color: black;
    line-height: 23px;
  }
`
