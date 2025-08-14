import React, { FC } from 'react'
import { BlockLayout, AddonData } from 'types'
import {
  highlightedCardAddonLayout,
  xtraBroadBandLayout,
} from 'StandardLayouts/AddonLayouts'
import { AddonStyle } from './AddonStyle'
import AddonLayoutFactory from './AddonLayoutFactory'

/**
 * Addon component creates an add on with a specific title, features and price, given by the user.
 * AddonStyle component is used to style the add on
 */
const Addon: FC<{
  layout: BlockLayout
  data: AddonData
}> = ({ layout, data }) => {
  let newLayout = layout

  if (data.title.includes('WiFi Walk')) {
    newLayout = highlightedCardAddonLayout
  }
  if (data.title.includes('Vodafone Xtra Broadband')) {
    newLayout = xtraBroadBandLayout
  }
  return (
    <AddonStyle>
      <AddonLayoutFactory element={newLayout} dataset={data} />
    </AddonStyle>
  )
}

export default Addon
