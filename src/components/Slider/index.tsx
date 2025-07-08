// components/ProdutoSlider.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import styles from './Slider.module.css'
import React from 'react'

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
  breakpoints,
  slidesPerView = 1.2,
  spaceBetween = 16,
}: SliderProps) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
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
