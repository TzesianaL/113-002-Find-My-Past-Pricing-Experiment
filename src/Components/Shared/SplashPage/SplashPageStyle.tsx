import styled from 'styled-components'
import { TitleStyle } from '../Title/TitleStyle'
/**
 * Styled component is used to decorate SplashScreen component.
 * Props are passed from ThemeProvider component.
 */
export const SplashPageStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 40%;
  // grid-template-rows: 40% 40%;
  row-gap: 3%;
  column-gap: 3%;
  padding-bottom: 3%;
  max-width: 1440px;
  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
  }
`
export const SplashWrapper = styled.div`
  display: grid;
  margin-bottom: 10em;
  justify-items: center;
  background: #e5e5e5;

  ${TitleStyle} {
    padding-top: 2em;
    padding-bottom: 2em;
  }
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const AwardsImage = styled.img`
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const DesktopImageContainer = styled.div`
  display: block;
  margin: 17px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileImageContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
