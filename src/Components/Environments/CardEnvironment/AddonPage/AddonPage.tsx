import React, { FC } from 'react'
import Button from 'Components/Shared/Button/Button'
import { BlockLayout, AddonData } from 'types'
import { useSelector } from 'react-redux'
import { useScrollToTop } from 'hooks/useScrollToTop'
import { WifiMaxAddonLayout } from 'StandardLayouts/AddonLayouts'
import {
  getAddonsInBasket,
  getBasketItem,
  getBasketSpeedItem,
  getCost,
  getSelectedCondition,
} from 'redux/reducers/logicStore/logicStore.selectors'
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
  const currentPrice = useSelector(getCost)
  const selectedCondition = useSelector(getSelectedCondition)
  useScrollToTop()
  const selectedItem = useSelector(getBasketItem)

  const normalAddons = data.filter((addon) => addon.group === 3)
  const wifiMaxAddon = data.find((addon) => addon.group === 4)
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
      <h1>
        Add-ons
        <span style={{ fontWeight: 'normal' }}> (optional)</span>
      </h1>
      <AddonGroup data={normalAddons} layout={layout} />
      {console.log(
        'selectedCondition',
        typeof selectedCondition,
        selectedCondition
      )}
      {selectedCondition === 2 && (
        <>
          <h1>
            Add WIFI Max{' '}
            <span style={{ fontWeight: 'normal' }}>to your broadband</span>
          </h1>
          <AddonGroup
            data={wifiMaxAddon ? [wifiMaxAddon] : []}
            layout={WifiMaxAddonLayout}
          />
        </>
      )}
      {footerText && (
        <div
          className="footerText"
          dangerouslySetInnerHTML={{ __html: footerText }}
        />
      )}
      {onContinue && <Button onClick={onContinue}>Continue to basket </Button>}
      <br />
      <br />
    </AddonPageStyle>
  )
}

export default AddonPage
