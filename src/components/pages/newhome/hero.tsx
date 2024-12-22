'use client'
import React from 'react'
import styles from '@/styles/font-monserat.module.css'
import { Check, Star, StarHalf } from '@phosphor-icons/react/dist/ssr'
import ImageHeroAnimeted from './image-hero-animeted'

export default function Hero() {
  return (
    <div className="pb-[50px] text-[#2F2E0C]">
      <div
        className={`mt-[60px] ${styles.font} flex w-full justify-center text-center text-[64px] font-black uppercase leading-[74px]`}
      >
        Torne a ecobag dos seus <br /> sonhos em realidade
      </div>

      <div className="mt-[30px] flex items-center justify-center gap-[30px]">
        <div className="flex items-center gap-2">
          <Check size={20} weight="regular" color="#2F2E0C" />
          <div>100% gratuito para uso</div>
        </div>
        <div className="flex items-center gap-2">
          <Check size={20} weight="regular" color="#2F2E0C" />
          <div>Mais de 1000 produtos</div>
        </div>
        <div className="flex items-center gap-2">
          <Check size={20} weight="regular" color="#2F2E0C" />
          <div>Entrega global</div>
        </div>
      </div>

      <div className="mt-[40px] flex w-full justify-center">
        <button className="treansition-all h-[58px] rounded-md bg-[#aeff6e] px-8 text-[1.125rem] font-bold duration-200 hover:bg-[#c6fb9d]">
          Comece gratuitamente
        </button>
      </div>

      <div className="mt-[20px] flex w-full justify-center text-[15px]">
        Salvando aos poucos o planeta juntos
      </div>

      <ImageHeroAnimeted />

      <div className="mt-[50px] flex w-full items-center justify-center gap-4 text-[#2F2E0C]">
        <div className="font-extrabold">
          Confiado por mais de 1000 de clientes
        </div>
        <div className="font-bold">|</div>
        <div className="flex items-center gap-1 font-black">
          <Star size={24} weight="fill" color="#2F2E0C" />
          <Star size={24} weight="fill" color="#2F2E0C" />
          <Star size={24} weight="fill" color="#2F2E0C" />
          <Star size={24} weight="fill" color="#2F2E0C" />
          <StarHalf size={24} weight="fill" />
          <span className="ml-2">4.8</span>
        </div>
      </div>
    </div>
  )
}
