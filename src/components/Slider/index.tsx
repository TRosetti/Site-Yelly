'use client'

import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import styles from './Slider.module.css'
import React, { useRef } from 'react'

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
  navigation?: boolean
}

export function Slider({
  children,
  breakpoints = {
    1320: { slidesPerView: 3 },
    1120: { slidesPerView: 2.8 },
    1080: { slidesPerView: 2.5 },
    850: { slidesPerView: 2.1 },
    680: { slidesPerView: 1.4 },
    0: { slidesPerView: 1.1 },
  },
  slidesPerView = 1.2,
  spaceBetween = 16,
  navigation = false,
}: SliderProps) {
  const isSingleSlide = children.length === 1
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  
  return (
    <div className={`${styles.sliderWrapper} ${navigation ? styles.withNavigation : ''}`}>
      {navigation && (
        <>
          <div ref={prevRef} className={`${styles.navButton} ${styles.prevButton}`}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.34988C0 4.61466 0.122734 4.86052 0.3682 5.08747C0.60251 5.31442 0.887029 5.49094 1.22176 5.61702C1.29986 5.64224 1.7629 5.83136 2.61088 6.1844C4.11715 6.84003 5.21618 7.28763 5.90795 7.52719C6.15342 7.60284 6.37099 7.69109 6.56067 7.79196C6.88424 7.93065 7.11297 8 7.24686 8C7.43654 8 7.60948 7.90544 7.76569 7.71631C7.9219 7.51458 8 7.29393 8 7.05437C8 6.86525 7.94979 6.68243 7.84937 6.50591C7.74895 6.31678 7.58717 6.1844 7.36402 6.10875C7.16318 6.0331 6.74477 5.8944 6.10879 5.69267C5.24965 5.41529 4.51883 5.17573 3.91632 4.97399C3.31381 4.75965 2.71688 4.5264 2.12552 4.27423L4.33473 3.23404L6.74477 2.08038C6.84519 2.01734 7.00139 1.92277 7.21339 1.79669C7.42538 1.67061 7.57601 1.53822 7.66527 1.39953C7.75453 1.26084 7.79916 1.09062 7.79916 0.888889C7.79916 0.64933 7.74338 0.441292 7.6318 0.264775C7.52022 0.0882585 7.35844 0 7.14644 0C6.95676 0 6.78382 0.0378249 6.62761 0.113475C6.47141 0.176517 6.24268 0.289992 5.94142 0.4539C5.6848 0.617809 5.51743 0.718676 5.43933 0.756501L1.32218 2.93144C0.887029 3.12057 0.557879 3.316 0.334727 3.51773C0.111576 3.71946 0 3.99685 0 4.34988Z" fill="#1A1A1A"/>
            </svg>
          </div>
          <div ref={nextRef} className={`${styles.navButton} ${styles.nextButton}`}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4.34988C8 4.61466 7.87727 4.86052 7.6318 5.08747C7.39749 5.31442 7.11297 5.49094 6.77824 5.61702C6.70014 5.64224 6.2371 5.83136 5.38912 6.1844C3.88285 6.84003 2.78382 7.28763 2.09205 7.52719C1.84658 7.60284 1.62901 7.69109 1.43933 7.79196C1.11576 7.93065 0.887029 8 0.753138 8C0.563459 8 0.390516 7.90544 0.23431 7.71631C0.0781032 7.51458 0 7.29393 0 7.05437C0 6.86525 0.0502093 6.68243 0.150628 6.50591C0.251046 6.31678 0.412831 6.1844 0.635983 6.10875C0.83682 6.0331 1.25523 5.8944 1.89121 5.69267C2.75035 5.41529 3.48117 5.17573 4.08368 4.97399C4.68619 4.75965 5.28312 4.5264 5.87448 4.27423L3.66527 3.23404L1.25523 2.08038C1.15481 2.01734 0.998605 1.92277 0.786611 1.79669C0.574616 1.67061 0.423989 1.53822 0.334728 1.39953C0.245467 1.26084 0.200837 1.09062 0.200837 0.888889C0.200837 0.64933 0.256625 0.441292 0.368201 0.264775C0.479777 0.0882585 0.641562 0 0.853557 0C1.04324 0 1.21618 0.0378249 1.37239 0.113475C1.52859 0.176517 1.75732 0.289992 2.05858 0.4539C2.3152 0.617809 2.48257 0.718676 2.56067 0.756501L6.67782 2.93144C7.11297 3.12057 7.44212 3.316 7.66527 3.51773C7.88842 3.71946 8 3.99685 8 4.34988Z" fill="#1A1A1A"/>
            </svg>
          </div>
        </>
      )}

      <div className={styles.sliderContainer}>
        <Swiper
          key={children.length}
          modules={[Navigation]}
  
          navigation={
            navigation
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : undefined
          }
          onBeforeInit={(swiper) => {
            if (navigation && swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }}

          spaceBetween={spaceBetween}
          slidesPerView={isSingleSlide ? 1 : slidesPerView}
          breakpoints={isSingleSlide ? undefined : breakpoints}
        >
          {children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
