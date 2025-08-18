import Button from 'Components/Shared/Button/Button'
import {
  MutexButton,
  MutexButtonGroup,
} from 'Components/Shared/Mutex/MutexButton'
import { useScrollToTop } from 'hooks/useScrollToTop'
import React, {
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllAddons,
  getSelectedCondition,
} from 'redux/reducers/dataStore/dataStore.selectors'
import {
  addItemToBasket,
  addSpeedItemToBasket,
} from 'redux/reducers/logicStore/logicStore'
import { getCost } from 'redux/reducers/logicStore/logicStore.selectors'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import type { CardItem, SpeedCardItem } from 'types'
import { ContractDuration, isContractDuration } from 'types'
import { StorePageAddonLayout } from '../../../../StandardLayouts/AddonLayouts'
import StoreBanner from '../../../Shared/StoreBanner/StoreBanner'
import CardGroup from '../CardGroup/CardGroup'
import SpeedCardGroup from '../SpeedCardGroup/SpeedCardGroup'
import { StorePageStyle } from './StorePageStyle'

enum ConfigurationStep {
  CONTRACT_LENGTH = 'CONTRACT_LENGTH',
  SPEED_SELECTION = 'SPEED_SELECTION',
  PLAN_SELECTION = 'PLAN_SELECTION',
}

export interface StorePageProps {
  bannerName?: string
  bannerLogoSrc?: string
  introText?: string
  footerText?: string
  hidePrice?: boolean
  showCancelButton?: boolean
  purchaseButtonText?: string
  items: CardItem[]
  speedItems: SpeedCardItem[]
  onCancel: () => void
  onSelect: (id: string) => void
  onSpeedSelect?: (id: string) => void
  cancelButtonText?: string
}

const StorePage: FC<StorePageProps> = ({
  bannerLogoSrc,
  bannerName,
  introText,
  footerText,
  hidePrice,
  showCancelButton,
  purchaseButtonText,
  items,
  speedItems,
  onCancel,
  onSpeedSelect,
  onSelect,
  cancelButtonText,
}) => {
  const dispatch = useDispatch()

  const [planSelected, setPlanSelected] = useState<string | undefined>(
    undefined
  )

  const handlePlanClick = (id: string) => {
    if (showCancelButton && !onCancel) {
      throw new Error(
        'OnCancel function is undefined when showCancelButton is provided'
      )
    }
  }

  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.itemOrderShown,
        value: items.map((item) => item.id).toString(),
      })
    )

    dispatch(
      addOutput({
        key: OutputTypes.numberOfItemsShown,
        value: String(items.length),
      })
    )
  }, [dispatch, items, speedItems])

  useScrollToTop()

  return (
    <StorePageStyle>
      <StoreBanner name={bannerName} logoSrc={bannerLogoSrc} />
      {introText && (
        <div
          className="introText"
          dangerouslySetInnerHTML={{ __html: introText }}
        />
      )}
      <>
        <CardGroup
          items={items}
          hidePrice={hidePrice}
          selected={planSelected}
          onSelect={onSelect}
          handleCardClick={handlePlanClick}
          purchaseButtonText={purchaseButtonText}
          // avgScore={sumOfWeights}
        />
      </>
      {footerText && (
        <div
          className="footerText"
          dangerouslySetInnerHTML={{ __html: footerText }}
        />
      )}
      <br />
      <br />
    </StorePageStyle>
  )
}

export default StorePage
