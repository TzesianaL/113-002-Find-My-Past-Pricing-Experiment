import React, { FC } from 'react'
import StoreBanner from 'Components/Shared/StoreBanner/StoreBanner'
import Title from 'Components/Shared/Title/Title'
import { SplashItem } from 'types'
import Button from 'Components/Shared/Button/Button'
import { isImageItem } from 'functions/functions'
import SplashText from './SplashText/SplashText'
import SplashImg from './SplashImage/SplashImage'
import { SplashPageStyle, SplashWrapper } from './SplashPageStyle'

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
  return (
    <SplashWrapper>
      <StoreBanner name={storeName} logoSrc={storeLogo} />
      <Title>
        <div dangerouslySetInnerHTML={{ __html: pageTitle }} />
      </Title>
      <SplashPageStyle>
        {items.map((item) => {
          if (isImageItem(item)) {
            return <SplashImg imageSrc={item.src} key={item.id} />
          }
          return (
            <SplashText
              title={item.title}
              text={item.paragraph}
              key={item.id}
            />
          )
        })}
      </SplashPageStyle>
      <Button onClick={onClick}>{buttonText}</Button>
    </SplashWrapper>
  )
}

export default SplashPage
