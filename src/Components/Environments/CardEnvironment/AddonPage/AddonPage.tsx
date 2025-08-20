import React, { FC } from 'react'
import Button from 'Components/Shared/Button/Button'
import { BlockLayout, AddonData } from 'types'
import { useSelector } from 'react-redux'
import { useScrollToTop } from 'hooks/useScrollToTop'
import { getBasketItem } from 'redux/reducers/logicStore/logicStore.selectors'
import AddonGroup from '../AddonGroup/AddonGroup'
import StoreBanner from '../../../Shared/StoreBanner/StoreBanner'
import { AddonPageStyle } from './AddonPageStyle'

export interface AddonPageProps {
  data: AddonData[]
  layout: BlockLayout
  bannerName?: string
  bannerLogoSrc?: string
  introText?: string
  footerText?: string
  onContinue?: () => void
}

/**
 * AddonPage is used to display the list of add ons, the banner with store  logo and continue button as well.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const AddonPage: FC<AddonPageProps> = ({
  data,
  layout,
  bannerName,
  bannerLogoSrc,
  introText,
  footerText,
  onContinue,
}) => {
  useScrollToTop()

  const selectedItem = useSelector(getBasketItem)

  return (
    <AddonPageStyle>
      <div style={{ alignItems: 'left', width: '100%' }}>
        <StoreBanner name={bannerName} logoSrc={bannerLogoSrc} />
      </div>

      {introText && (
        <div
          className="introText"
          dangerouslySetInnerHTML={{ __html: introText }}
        />
      )}
      <h2 style={{ color: '#242048' }}>Choose your add ons</h2>
      <AddonGroup data={data} layout={layout} />
      {footerText && (
        <div
          className="footerText"
          dangerouslySetInnerHTML={{ __html: footerText }}
        />
      )}
      <br />
      {onContinue && (
        <Button onClick={onContinue} style={{ border: '1px solid #242048' }}>
          Continue to basket{' '}
        </Button>
      )}
      <br />
      <br />
    </AddonPageStyle>
  )
}

export default AddonPage
