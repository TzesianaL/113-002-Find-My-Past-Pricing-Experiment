import styled from 'styled-components'
/**
 * Styled component is used to decorate SplashImage component.
 * Props are passed from ThemeProvider component.
 */
export const SplashImageStyle = styled.div`
  display: grid;
  justify-self: center;
  align-self: center;
  width: ${(props) => props.theme.splashImage?.imageSize || 100}%;
  img {
    width: 100%;
  }
`
