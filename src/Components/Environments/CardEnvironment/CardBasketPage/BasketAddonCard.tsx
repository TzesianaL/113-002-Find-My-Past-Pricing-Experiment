import React, { FC } from 'react'
import { AddonData, Periods } from 'types'
import Title from 'Components/Shared/Title/Title'
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
  const addonTotalCost = selectedAddons.reduce((total, addon) => {
    return total + (addon.price || 0)
  }, 0)

  return (
    <>
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
                  color: 'black',
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
      {addonTotalCost !== 0 && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: '17px',
              fontWeight: '600',
              paddingTop: '1em',
            }}
          >
            <span>Addon cost for the first month :</span>
            <span> &nbsp; £{addonTotalCost.toFixed(2)}</span>
          </div>
          <div
            style={{
              padding: '0 1em',
              fontSize: '8px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            *Your addon subscription will renew automatically every month unless
            cancelled
          </div>
        </>
      )}
    </>
  )
}

export default BasketAddonCard
