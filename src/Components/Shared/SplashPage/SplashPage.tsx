import React, { FC } from 'react'
import StoreBanner from 'Components/Shared/StoreBanner/StoreBanner'
import Title from 'Components/Shared/Title/Title'
import { SplashItem } from 'types'
import Button from 'Components/Shared/Button/Button'
import mainImage from 'images/main_image.png'
import awards from 'images/splash-bl.png'
import fouthPanel from 'images/splash-br.png'
import mainImagePhoneVersion from 'images/main_image_phone_version.png'
import secondImagePhoneVersion from 'images/second_image_phone_version.png'
import main_faster from 'images/main_faster.png'
import main_faster_mobile from 'images/main_faster_mobile.png'
import {
  SplashPageStyle,
  SplashWrapper,
  ContentGrid,
  AwardsImage,
  DesktopImageContainer,
  MobileImageContainer,
} from './SplashPageStyle'
import { useSelector } from 'react-redux'
import { getSelectedCondition } from 'redux/reducers/dataStore/dataStore.selectors'

export interface SplashPageProps {
  /**
   * storeLogo has the path for the store logo
   */
  storeLogo: string
  /**
   * Contains the name of the store each time.
   */
  storeName: string
  /**
   * pageTitle displays the Main page's title.
   */
  pageTitle: string
  /**
   * items contains title and text of each block.
   */
  items: SplashItem[]
  /**
   * buttonText has the text to be shown on the button
   */
  buttonText: string
  /**
   * function defines what action will the button does.
   */
  onClick: () => void
}

/**
 * SplashScreen component is used to group together all splashscreen components.
 * SplashScreenStyle component is used to style it.
 */
const SplashPage: FC<SplashPageProps> = ({
  storeLogo,
  storeName,
  pageTitle,
  items,
  buttonText,
  onClick,
}) => {
  const selectedCondition = useSelector(getSelectedCondition)

  const mainImageSrc =
    selectedCondition === 1 || selectedCondition === 2 ? mainImage : main_faster
  const mainImagePhoneSrc =
    selectedCondition === 1 || selectedCondition === 2
      ? mainImagePhoneVersion
      : main_faster_mobile
  return (
    <SplashWrapper>
      <StoreBanner name={storeName} logoSrc={storeLogo} />
      <ContentGrid>
        <div style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
          <Title
            style={{
              fontSize: '2rem',
              paddingTop: '1em',
              paddingBottom: '1em',
            }}
          >
            Smith’s Broadband Offers You
          </Title>
          <DesktopImageContainer>
            <img src={mainImageSrc} alt="main-image" width="100%" />
          </DesktopImageContainer>
          <MobileImageContainer>
            <img src={mainImagePhoneSrc} alt="main-image" width="400px" />
            <img
              src={secondImagePhoneVersion}
              alt="second-image"
              width="400px"
            />
          </MobileImageContainer>
        </div>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 1rem',
          }}
        >
          <Title
            style={{
              fontSize: '1.75rem',
              textAlign: 'left',
              width: '100%',
              paddingLeft: '16px',
              paddingRight: '16px',
              boxSizing: 'border-box',
              marginBottom: '0',
              padding: '0.5rem 0 1rem 0',
            }}
          >
            Award-winning broadband and reviews
          </Title>
          <img src={awards} alt="awards" width="100%" />
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            textAlign: 'left',
            margin: '0 1rem',
          }}
        >
          <Title
            style={{
              fontSize: '1.75rem',
              textAlign: 'left',
              width: '100%',
              padding: '0.5rem 0 1rem 0',
            }}
          >
            Switching to Smith’s is easy
          </Title>
          <img
            src={fouthPanel}
            alt="fourthPanel"
            width="100%"
            style={{ paddingTop: '9px' }}
          />
        </section>
      </ContentGrid>
      <br />
      <br />
      <Button onClick={onClick}>{buttonText}</Button>
      <br />
      <br />
    </SplashWrapper>
  )
}

export default SplashPage
