import React from 'react'
import styles from '@/styles/font-monserat.module.css'
import { CarouselSpacing } from '@/components/ui/carousel-shadcn'

export default function SliderPromotions() {
  return (
    <div className="mt-[60px] text-[#2F2E0C]">
      <div
        className={`${styles.font} leading-[3.375rem} mb-[70px] flex w-full justify-center text-center text-[2.875rem] font-black`}
      >
        Sua nova bag espera por você
      </div>
      <div className="flex h-[180px] w-full justify-center gap-5">
        <CarouselSpacing />
      </div>
    </div>
  )
}
