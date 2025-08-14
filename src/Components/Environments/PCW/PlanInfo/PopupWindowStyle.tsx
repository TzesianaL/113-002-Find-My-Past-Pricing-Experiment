import styled from 'styled-components'
import { ButtonStyle } from 'Components/Shared/Button/ButtonStyle'
import { TitleStyle } from 'Components/Shared/Title/TitleStyle'

export const PopupWindowStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  justify-content: center;
  padding: 2em 2em 2em 2em;
  @media (max-width: 600px) {
    font-size: small;
    width: 90%;
    overflow-y: scroll;
  }
  overflow-y: scroll;
  height: 300px;
  width: 15%;
  right: 0;
  top: 300px;
  bottom: 0;
  z-index: 10;
  border: 1px solid white;
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  background-color: black;

  color: ${(props) =>
    props.theme.planInfo?.color || props.theme.banner?.color || `white`};

  ${ButtonStyle} {
    align-self: center;
    background-color: ${(props) =>
      props.theme.planInfo?.buttonBackground || 'black'};
    color: ${(props) => props.theme.planInfo?.buttonText || 'white'};
    border-radius: ${(props) =>
      props.theme.planInfo?.buttonBorderRadius || 0}px;
    width: max-content;
    margin-top: 2em;
    margin-bottom: 3em;
    @media (max-width: 600px) {
      font-size: small;
    }
  }

  ${TitleStyle} {
    text-align: center;
    color: ${(props) =>
      props.theme.planInfo?.color || props.theme.banner?.color || `white`};
  }

  .footerText {
    text-align: center;
    font-size: small;
  }
`

export const PopupTitle = styled.div`
  img {
    width: 70px;
  }
  @media (max-width: 600px) {
    padding-top: 0em;
    padding-bottom: 0em;
  }
  padding-top: 3em;
  padding-bottom: 4em;
  text-align: center;
`
export const FeatureList = styled.p`
  text-align: start;
`
export const TableInfo = styled.p`
  align-self: center;
  width: 70%;
`
