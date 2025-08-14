import styled from 'styled-components'

/**
 * Styled component is used to decorate CallToAction wrapper component.
 * Props are passed from ThemeProvider component.
 */

export const CallToActionStyle = styled.div`
  background-color: ${(props) =>
    props.theme.backgroundColor || props.theme.colors?.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 26%;
`
