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
    
    1320:{
      slidesPerView: 3,
    },
    1120:{
      slidesPerView: 2.8,
    },
    1080: {
      slidesPerView: 2.5,
    },
    850: {
      slidesPerView: 2.1,
    },
    680: {
      slidesPerView: 1.4,
    },
    0: {
      slidesPerView: 1.1,
    },
  },
  slidesPerView = 1.2,
  spaceBetween = 16,
}: SliderProps) {
  const isSingleSlide = children.length === 1;

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        key={children.length}
        modules={[Navigation]}
        // navigation
        spaceBetween={spaceBetween}
        slidesPerView={isSingleSlide? 1 : slidesPerView} // verifica se tem mais apenas um slide para deixar ele maior ou não 
        breakpoints={isSingleSlide ? undefined : breakpoints}
        
        
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

