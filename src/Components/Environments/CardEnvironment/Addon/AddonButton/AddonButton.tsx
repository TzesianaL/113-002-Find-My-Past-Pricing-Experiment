import Button from 'Components/Shared/Button/Button'
import React, { useCallback, VFC } from 'react'
import { AddonData } from 'types'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  getAddonsInBasket,
  selectAnyMutexAddonsInBasket,
  selectAnyMutexAddonsInBasketGroup4,
} from 'redux/reducers/logicStore/logicStore.selectors'
import {
  addAddonToBasket,
  removeAddon,
} from 'redux/reducers/logicStore/logicStore'
import { CSSProperties } from 'styled-components'
import { selectAddonPageOptions } from 'redux/reducers/dataStore/dataStore.selectors'

interface AddonButtonProps {
  addon: AddonData
  styleOverride?: CSSProperties
}

/**
 * Add/Remove button for Addons.
 *
 * If the Button is for a normal addon, then clicking this toggles adding/removing the addon with
 * the appropriate text.
 *
 * If the Button is for a mutex addon, then this will show a `unable to click` style label
 * if another mutex item is in the basket
 */
const AddonButton: VFC<AddonButtonProps> = ({ addon, styleOverride }) => {
  const removeStyle = {
    backgroundColor: 'green',
    color: 'white',
    width: '100px',
    minWidth: '80px',
    border: '1px solid #242048',
    padding: `0.2em 0em`,
  }

  const disableButtonStyle = {
    alignSelf: 'center',
    background: 'grey',
    color: 'white',
    width: '200px',
  }

  const newAddButtonStyle = {
    alignSelf: 'center',
    background: '#005000',
    color: 'white',
    width: '200px',
  }

  const dispatch = useDispatch()
  const history = useHistory()

  // setup the actions, as these can be memoized
  const handleAddAddon = useCallback(() => {
    dispatch(addAddonToBasket(addon))
  }, [dispatch, addon])

  const handleRemoveAddon = useCallback(() => {
    dispatch(removeAddon(addon))
  }, [dispatch, addon])

  // check to see if this addon is in the basket or not
  // so we can then use the right text and onClick functionality
  const addonsInBasket = useSelector(getAddonsInBasket)
  const addonPageOptions = useSelector(selectAddonPageOptions)
  const isMutexInBasket = useSelector(selectAnyMutexAddonsInBasket)
  const isMutexInBasketGroup4 = useSelector(selectAnyMutexAddonsInBasketGroup4)

  const addonAlreadyInBasket = addonsInBasket.some(
    (basketAddon) => basketAddon.id === addon.id
  )

  if (addonAlreadyInBasket) {
    // Button should remove the addon
    return (
      <Button style={removeStyle} onClick={handleRemoveAddon}>
        {addonPageOptions?.removeButtonText || 'Remove'}
      </Button>
    )
  }

  // check for mutex
  if (addon.mutex && isMutexInBasket) {
    return (
      <Button style={disableButtonStyle} disabled>
        {addonPageOptions?.mutexBlockedButtonText || 'Unable to select'}
      </Button>
    )
  }

  if (addon.mutexGroup4 && isMutexInBasketGroup4) {
    return (
      <Button style={disableButtonStyle} disabled>
        {addonPageOptions?.mutexBlockedButtonText || 'Unable to select'}
      </Button>
    )
  }

  return (
    <Button
      style={addon.group === 1 ? newAddButtonStyle : styleOverride}
      onClick={() => {
        handleAddAddon()
      }}
    >
      {addonPageOptions?.addButtonText || 'Add'}
    </Button>
  )
}

export default AddonButton
