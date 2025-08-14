import styled from 'styled-components'

/**
 * Styled components are used in order to style Addon component. Props are passed through ThemeProvider.
 */
export const AddonStyle = styled.div`
  display: flex;
  flex-direction: column;
  hr {
    width: 180px;
  }

  img {
    margin: 1rem;
    width: 160px;
    border-radius: 10px;
  }
`
