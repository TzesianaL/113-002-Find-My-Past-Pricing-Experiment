import { TitleStyle } from 'Components/Shared/Title/TitleStyle'
import styled from 'styled-components'
import { FeaturesStyle } from '../../Features/FeaturesStyle'
/**
 * Styled component is used to decorate CardWrapper component.
 * Props are passed from ThemeProvider component.
 */

export const BasketCardStyle = styled.div.attrs({
  className: 'basketCard',
})`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  // padding: 16px 1em 24px 1em;
  align-items: left;
  border: 7px;
  border-color: ${(props) => props.theme.card?.borderColor || 'gray'};
  border-radius: 7px;
  max-width: 500px;
  color: black;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  // margin: 0em 1em 1em 1em;

  @media (max-width: 768px) {
    max-width: 350px;
  }
  // font-size: 0.8em;
  .cardPriceDetails {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .cardprice {
      text-align: center;
      font-weight: bold;
      font-size: large;
    }
    .periodPlaceholder {
      font-weight: bold;
      padding: 0.1em;
    }
  }
  ${TitleStyle} {
    color: black;
  }
  ${FeaturesStyle} {
    color: black;
    flex-grow: 1;
  }
`

export const BasketCardWrapper = styled.div.attrs({
  className: 'basketCardWrapper',
})`
  display: flex;
  color: ${(props) =>
    props.theme.card?.color || props.theme.colors?.primary || '#000000'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  margin: 1em 0;
  max-width: 50em;
`

export const BasketCardRow = styled.div`
  // display: flex;
  width: 500px;
`
