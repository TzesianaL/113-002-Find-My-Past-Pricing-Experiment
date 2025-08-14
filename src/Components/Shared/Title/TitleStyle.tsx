import styled from 'styled-components'

/**
 * Styled components are used in order to style Title component. Props are passed through ThemeProvider.
 */
export const TitleStyle = styled.div<{
  subtitle: boolean
}>`
  ${(props) =>
    !props.subtitle &&
    `
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-family: BoldVf !important;
  `}

  justify-content: center;
  color: ${(props) =>
    props.subtitle
      ? props.theme.subtitleColor || props.theme.colors?.secondary || '#ffffff'
      : props.theme.titleColor || props.theme.colors?.primary};
  font-size: ${(props) =>
    !props.subtitle
      ? props.theme.titleFontSize || props.theme.fontSize || 1.2
      : props.theme.subtitleFontSize || props.theme.fontSize || 1.2}em;
  font-family: ${(props) => props.theme.fontFamily};
  margin: 0.5em 0em 0.5em 0em;
`
