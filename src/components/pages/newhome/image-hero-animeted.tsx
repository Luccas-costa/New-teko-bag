import styles from '@/styles/font-monserat.module.css'
import React from 'react'

export default function ImageHeroAnimeted() {
  return (
    <div>
      <div className="mt-[50px] flex w-full justify-center gap-[35px]">
        <div className="size-[390px] rounded bg-[#000000] shadow">
          <div className="absolute size-[140px] translate-x-[-40%] translate-y-[-40%] rotate-[-15deg] rounded-lg bg-[#2F2E0C]"></div>
        </div>

        <div className="relative size-[390px] rounded bg-[#000000] shadow">
          <div
            className={`${styles.font} absolute bottom-0 right-0 flex h-[75px] w-[200px] translate-x-[40%] translate-y-[30%] rotate-[-10deg] items-center justify-center rounded-lg bg-[#2F2E0C] text-3xl font-black uppercase text-white`}
          >
            <div
              className={`absolute flex h-[60px] w-[110px] translate-x-[66%] translate-y-[-70%] rotate-[20deg] items-center justify-center gap-0 rounded-[78%/78%] bg-[#aeff6e]`}
            >
              <div className="text-4xl font-black text-[#2F2E0C]">$$$</div>
            </div>
            Vendido
          </div>
        </div>
      </div>
    </div>
  )
}
