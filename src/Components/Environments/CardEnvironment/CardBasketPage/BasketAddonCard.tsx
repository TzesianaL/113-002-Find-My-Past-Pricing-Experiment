import React, { FC } from 'react'
import Price from 'Components/Shared/Price/Price'
import { AddonData, Periods } from 'types'
import Title from 'Components/Shared/Title/Title'
import { convertPricePeriods } from 'functions/functions'
import {
  BasketAddonCardStyle,
  BasketAddonCardRowStyle,
} from './BasketAddonCardStyle'

/**
 * AddonCardProps contains all appropriate props we should pass to nested components.
 */
export interface BasketAddonCardProps {
  selectedAddons: AddonData[]
  convertedPricePeriod?: Periods
}

/**
 * BasketAddonCard is used to wrap all components we render in order to display all selected addons.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const BasketAddonCard: FC<BasketAddonCardProps> = ({
  selectedAddons,
  convertedPricePeriod,
}) => {
  return (
    <BasketAddonCardStyle>
      {/* <Title>Add Ons</Title> */}
      {selectedAddons.map((selectedAddon) => (
        <BasketAddonCardRowStyle key={selectedAddon.id}>
          <Title subtitle>{selectedAddon.title}</Title>
          {selectedAddon.price !== undefined && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#242048',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                £{selectedAddon.price.toFixed(2)}
              </div>
              <div style={{ fontSize: '0.8em', marginLeft: '0.5em' }}>
                {' '}
                monthly
              </div>
            </div>
          )}
        </BasketAddonCardRowStyle>
      ))}
    </BasketAddonCardStyle>
  )
}

export default BasketAddonCard
