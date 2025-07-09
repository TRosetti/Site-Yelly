'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Slider.module.css'
import React from 'react'

interface SliderProps {
  children: React.ReactNode[]
}

export function SliderTeste({ children }: SliderProps) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={3}
        breakpoints={{
          1080: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 2.4,
          },
          680: {
            slidesPerView: 2.2,
          },
          0: {
            slidesPerView: 1.2,
          },
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
