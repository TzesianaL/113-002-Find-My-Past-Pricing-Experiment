import React, { FC, useEffect } from 'react'
import Button from 'Components/Shared/Button/Button'
import { useDispatch } from 'react-redux'
import { addOutput, OutputTypes } from 'redux/reducers/output/outputSlice'
import { CSSProperties } from 'styled-components'
import StoreBanner from '../StoreBanner/StoreBanner'
import {
  BasketPageStyle,
  ButtonContainer,
  ContentWrapper,
  HeaderWrapper,
} from './BasketPageStyle'
import Title from '../Title/Title'

/**
 *
 */
export interface BasketPageProps {
  bannerName?: string
  bannerLogoSrc?: string
  titleStyle?: CSSProperties
  titleText?: string
  introText?: string
  footerText?: string
  checkOutButtonText?: string
  emptyBasketButtonText?: string
  showCancelButton?: boolean
  onCheckout: () => void
  onEmptyBasket: () => void
  onCancel?: () => void
  cancelButtonText?: string

  basketContents: React.ReactNode
}

const BasketPage: FC<BasketPageProps> = ({
  bannerLogoSrc,
  bannerName,
  titleStyle,
  titleText,
  emptyBasketButtonText,
  introText,
  footerText,
  showCancelButton,
  onCancel,
  onCheckout,
  onEmptyBasket,
  checkOutButtonText,
  cancelButtonText,
  basketContents,
}) => {
  if (showCancelButton && !onCancel) {
    throw new Error(
      'OnCancel function is undefined when showCancelButton is provided'
    )
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      addOutput({
        key: OutputTypes.reachedBasket,
        value: 'true',
      })
    )
  }, [dispatch])

  return (
    <BasketPageStyle>
      <StoreBanner name={bannerName} logoSrc={bannerLogoSrc} />
      {titleText && (
        <HeaderWrapper>
          <Title style={titleStyle}>{titleText}</Title>
        </HeaderWrapper>
      )}
      <ContentWrapper>
        {introText && (
          <div
            className="introText"
            dangerouslySetInnerHTML={{ __html: introText }}
          />
        )}
        {basketContents}
        <br />
        {footerText && (
          <div
            className="footerText"
            dangerouslySetInnerHTML={{ __html: footerText }}
          />
        )}
        <ButtonContainer>
          <Button onClick={onEmptyBasket}>
            {emptyBasketButtonText || 'Empty Basket'}
          </Button>
          <Button onClick={onCheckout}>
            {checkOutButtonText || 'Check Out'}
          </Button>
          {showCancelButton && onCancel && (
            <Button onClick={onCancel}>{cancelButtonText || 'Cancel'}</Button>
          )}
        </ButtonContainer>
      </ContentWrapper>
    </BasketPageStyle>
  )
}

export default BasketPage
