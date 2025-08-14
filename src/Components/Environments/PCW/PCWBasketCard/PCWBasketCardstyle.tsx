import styled from 'styled-components'

export const PCWBasketCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: black;
  color: white;
  border-radius: 2em;
  padding: 1.3em 1.5em 3em 1.3em;
  width: 50%;
  @media (max-width: 600px) {
    width: 60%;
  }
  img {
    width: 20%;
    padding: 0 0.25em;
  }
`

export const PCWTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
`
