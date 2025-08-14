import styled from 'styled-components'
/**
 * Styled component is used to decorate StoreBanner component.
 * Props are passed from ThemeProvider component.
 */
export const StoreBannerStyle = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  justify-content: left;
  width: -moz-available;
  align-items: left;
  color: ${(props) => props.theme.color || 'black'} !important;
  font-family: ${(props) => props.theme.fontFamily};
  padding: 0.6rem 0 0.6rem 0;
  padding-left: 1rem;
`
