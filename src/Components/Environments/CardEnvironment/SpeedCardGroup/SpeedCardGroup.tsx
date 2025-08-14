import React, { FC, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { merge } from 'lodash-es'
import { SpeedCardItem } from 'types'
import { CardGroupStyle } from '../CardGroup/CardGroupStyle'
import SpeedCard from '../SpeedCard/SpeedCard'
import { SwiperContainer } from './SpeedCardGroupStyle'
import { getBasketSpeedItem } from 'redux/reducers/logicStore/logicStore.selectors'
import { useSelector } from 'react-redux'

export interface SpeedCardGroupProps {
  items: SpeedCardItem[]
  hidePrice?: boolean
  purchaseButtonText?: string
  selected?: string
  onSelect(id: string): void
  handleCardClick(id: string): void

  selectedCondition?: number
}

/**
 * CardGroup is used to wrap all components we render in order to create each cart.
 * ThemeProvider component is used. By using the theme object we provide same styling options to all components.
 */
const SpeedCardGroup: FC<SpeedCardGroupProps> = ({
  items,
  selected,
  onSelect,
  handleCardClick,
}) => {
  const handleOnClick = (id) => {
    onSelect(id)
  }

  return (
    <SwiperContainer>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: false,
        //   dynamicMainBullets: 3,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        watchOverflow={true}
        freeMode={false}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            centeredSlides: true,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <ThemeProvider
              theme={(theme) => {
                return merge({}, theme, {
                  card: {
                    // backgroundColor: item.cardColor || theme.card?.backgroundColor,
                  },
                  button: {
                    backgroundColor: item.id === selected ? 'green' : 'black',
                    width: '100px',
                  },
                })
              }}
            >
              <SpeedCard
                id={item.id}
                price={item.price}
                currency={item.currency}
                title={item.title}
                subtitle={item.subtitle}
                pricePeriod={item.pricePeriod}
                highlightedText={item.highlightedText}
                highlightedTextBGColor={item.highlightedText && '#000000'}
                onSelect={(id) => handleOnClick(id)}
                selected={item.id === selected}
                purchaseButtonText={
                  item.id === selected ? 'Selected' : 'Select'
                }
                handleCardClick={(id: string) => {
                  handleCardClick(id)
                }}
                mainSpeed={item.mainSpeed}
                downloadSpeed={item.downloadSpeed}
                downloadExample={item.downloadExample}
                downloadTime={item.downloadTime}
                uploadSpeed={item.uploadSpeed}
                uploadExample={item.uploadExample}
                uploadTime={item.uploadTime}
              />
            </ThemeProvider>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  )
}

export default SpeedCardGroup
