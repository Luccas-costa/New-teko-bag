import React from 'react'
import styles from '@/styles/font-monserat.module.css'

export default function Testimonials() {
  return (
    <div className="bg-[#2F2E0C] pb-[80px] text-white">
      <div
        className={`${styles.font} pt-[120px] text-center text-[2.5rem] font-bold leading-[3.375rem] screen1300:text-[2.875rem]`}
      >
        Pessoas reais sonham junto com a Tekobags
      </div>
      <div className="pt-[80px]">
        <div className="flex h-full justify-center gap-[120px]">
          <div className="h-[600px] w-[400px] overflow-hidden rounded-md bg-black screen1300:h-[800px] screen1300:w-[600px]"></div>
          <div className="flex min-h-full max-w-[488px] flex-col justify-center gap-[30px]">
            <div className="mb-6 text-[2.25rem] font-bold leading-[2.625rem]">
              {'"'}Tive uma ideia de desenho, procurei alguma empresa que
              realiza-se la. Achei a tekobag{"'"}s, super atenciosos e
              prestativos, e fiquei muito feliz com o resultado de minha ecobag.
              {'"'}
            </div>
            <div>Christina Umerez, Toronto</div>
            <div className="underline">
              Leia mais histórias reais de sucesso
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
