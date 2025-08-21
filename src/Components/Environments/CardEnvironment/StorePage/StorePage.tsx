import Button from 'Components/Shared/Button/Button'
import { useScrollToTop } from 'hooks/useScrollToTop'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import type { CardItem, SpeedCardItem } from 'types'
import StoreBanner from '../../../Shared/StoreBanner/StoreBanner'
import CardGroup from '../CardGroup/CardGroup'
import { StorePageStyle } from './StorePageStyle'

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
  onSelect: (id: string, price: number, duration: string) => void
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
