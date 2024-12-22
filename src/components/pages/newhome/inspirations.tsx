import React from 'react'
import IconPrice from './icon-price'

export default function Inspirations() {
  return (
    <div className="mt-[70px] flex flex-col items-center pb-[100px] text-[#2F2E0C]">
      <div>
        <div className="mb-8 text-3xl font-bold">Ideias e inspirações</div>
        <div className="flex gap-[30px]">
          <div className="h-[724px] w-[530px] rounded bg-[#aeff6e]">
            <IconPrice />
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="h-[370px] w-[666px] rounded bg-[#aeff6e]">
              <IconPrice />
            </div>
            <div className="flex gap-[30px]">
              <div className="h-[320px] w-[320px] rounded bg-[#aeff6e]">
                <IconPrice />
              </div>
              <div className="h-[320px] w-[320px] rounded bg-[#aeff6e]">
                <IconPrice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
