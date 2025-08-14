import React, { FC } from 'react'
import Addon from 'Components/Environments/CardEnvironment/Addon/Addon'
import { BlockLayout, AddonData } from 'types'
import { AddonGroupStyle } from './AddonGroupStyle'

export interface AddonGroupProps {
  /**
   * Items contains all the add on and its features
   */
  layout: BlockLayout
  data: AddonData[]
}

/**
 * AddonsGroup is used to wrap all components we render in order to create the list of add on we display on add on page .
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const AddonGroup: FC<AddonGroupProps> = ({ layout, data }) => {
  return (
    <AddonGroupStyle>
      {data.map((item, i) => (
        <Addon
          // disabling the error since we are sure that the add on items won't change
          // but this is better replaced by unique ids
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          data={item}
          layout={layout}
        />
      ))}
    </AddonGroupStyle>
  )
}

export default AddonGroup
