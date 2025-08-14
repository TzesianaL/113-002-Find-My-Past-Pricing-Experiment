import styled from 'styled-components'

/**
 * Styled components are used in order to style HStack component. Props are passed through ThemeProvider.
 */
export const HStackStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSize || '1'}rem;
  font-family: ${(props) => props.theme.titleFontFamily};
  width: ${(props) => props.theme.button?.width};
  justify-content: center;
  align-items: center;
`
