import styled from 'styled-components'
import { ButtonStyle } from 'Components/Shared/Button/ButtonStyle'

export const ChoosePlanStyle = styled.div`
  @media (max-width: 600px) {
    width: 95%;
  }
  
  ${ButtonStyle} {
    @media  (max-width: 600px) {
      width: 100% !important;
    }
  
    font-size: 0.95em;
    white-space: nowrap;
    border-radius: 0px;
    color: ${(props) => props.theme.pcwCell?.buttonColor || '#ffffff'};
    background: ${(props) =>
      props.theme.pcwCell?.buttonBackground || '#000000'};
  }
}`

export const PlanInfoStyle = styled.div`
  @media (max-width: 600px) {
    padding: 0.7em 1em;
    background: #c0c0c0;
    color: white;
    width: 94%;
    text-decoration: none;
  }
  font-size: x-small;
  color: #000000;
  font-weight: normal;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`
