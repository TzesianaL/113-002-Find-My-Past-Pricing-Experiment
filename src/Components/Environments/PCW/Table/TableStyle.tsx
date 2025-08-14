import styled from 'styled-components'

export const TableStyle = styled.div`
  @media (max-width: 600px) {
    display: grid;
    position: relative;
    .mobileLayout {
      display: none;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-bottom: 1em;
`
