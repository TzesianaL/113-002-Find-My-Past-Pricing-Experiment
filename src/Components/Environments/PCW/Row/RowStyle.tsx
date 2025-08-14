import styled from 'styled-components'

export const RowStyle = styled.div`
  @media (max-width: 600px) {
    display: grid;
    position: abslute;
    span:first-of-type {
      grid-column: 1 / span 2;
    }
    span:nth-last-child(2) {
      grid-column: 1 / span 2;
    }
    span:last-of-type {
      grid-column: 1 / span 2;
    }
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`
