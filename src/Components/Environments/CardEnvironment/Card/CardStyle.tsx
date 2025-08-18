import { ButtonStyle } from 'Components/Shared/Button/ButtonStyle'
import { PriceStyle } from 'Components/Shared/Price/PriceStyle'
import { TitleStyle } from 'Components/Shared/Title/TitleStyle'
import styled from 'styled-components'
import { FeaturesStyle } from '../Features/FeaturesStyle'

/**
 * Styled component is used to decorate CardWrapper component.
 * Props are passed from ThemeProvider component.
 */

export const CardStyle = styled.div<{
  newWidth?: string
  isSelected?: boolean
}>`
  ${TitleStyle} {
    color: black;
  }
  ${PriceStyle} {
    color: black;
  }
  text-align: center;
  background-color: ${(props) =>
    props.theme.card?.backgroundColor ||
    props.theme.colors?.background ||
    'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: ${(props) => `${props.theme.card?.fontSize}em` || '1em'};
  border: ${(props) => props.theme.card?.border || 'solid 2px'};
  border-color: ${(props) =>
    props.isSelected ? '#00b050' : props.theme.card?.borderColor || '#F5F0EB'};
  border-radius: 0.3em;
  border-top-left-radius: 0em;
  width: ${(props) => props.theme.card?.width || '340px'};
  height: ${(props) => props.newWidth || '920px'};
  color: ${(props) =>
    props.theme.card?.color || props.theme.colors?.primary || 'black'};

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  margin: 0;
  ${ButtonStyle} {
    width: 280px;
  }
  ${FeaturesStyle} {
    flex-grow: 1;
  }

  hr {
    width: 180px;
  }
  margin: 0em 1em 1em 1em;
  @media screen and (max-width: 600px) {
    margin: 0 0 1em 0;
    height: auto;
    max-width: 100%;
    width: auto;
  }
`

export const CardContentsStyle = styled.div`
  // padding: 16px 1em 24px 1em;
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
