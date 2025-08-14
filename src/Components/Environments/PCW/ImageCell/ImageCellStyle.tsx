import styled from 'styled-components'

export const ImageCellStyle = styled.img`
  @media (max-width: 600px) {
    width: 33px;
    margin-top: 0em;
    margin-bottom: 0.3em;
  }
  width: 30px;
  margin-top: 0.5rem;
`

export const TextStyle = styled.div`
  @media (max-width: 600px) {
    max-width: max-content;
  }
  max-width: 100px;
  padding: 0px 4px 0px 4px;
  grid-column: 1 / span 2;
`
