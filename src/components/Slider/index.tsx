// components/ProdutoSlider.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import styles from './Slider.module.css'
import React from 'react'
// import { responseCookiesToRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

interface SliderProps {
  children: React.ReactNode[] 
  breakpoints?: {
    [width: number]: {
      slidesPerView: number
      spaceBetween?: number
    }
  }
  slidesPerView?: number
  spaceBetween?: number
}

export function Slider({
  children,
  breakpoints ={
    1080: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 2.2,
    },
    680: {
      slidesPerView: 2.1,
    },
    0: {
      slidesPerView: 1.2,
    },
  },
  slidesPerView = 1.2,
  spaceBetween = 16,
}: SliderProps) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        // navigation
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

