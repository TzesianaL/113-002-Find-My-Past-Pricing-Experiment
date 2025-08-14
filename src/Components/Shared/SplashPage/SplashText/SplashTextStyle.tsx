import styled from 'styled-components'
/**
 * Styled component is used to decorate SplashText component.
 * Props are passed from ThemeProvider component.
 */
export const SplashTextStyle = styled.div`
  background-color: ${(props) =>
    props.theme.splashScreenText?.backgroundColor ||
    props.theme.backgroundColor ||
    '#6300AA'};
  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.theme.splashScreenText?.color ||
    props.theme.color ||
    'white'} !important;
  font-size: ${(props) => props.theme.splashScreenText?.fontSize}rem;
  font-family: ${(props) => props.theme.splashScreenText?.fontFamily};
  padding: 16px 1em 24px 1em;
`
