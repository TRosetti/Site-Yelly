// components/ProdutoSlider.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import styles from './Slider.module.css'

export function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className={styles.card}>
              <img src={`/produto-${i + 1}.jpg`} alt={`Produto ${i + 1}`} />
              <h3>Produto {i + 1}</h3>
              <p>Descrição do produto {i + 1}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
