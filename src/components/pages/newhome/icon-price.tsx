'use client'
import React, { useState } from 'react'

export default function IconPrice() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className="relative size-[16px] cursor-pointer rounded-full bg-[#2F2E0C] outline outline-offset-4 outline-[#2F2E0C]"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen && (
        <div className="absolute bottom-0 left-0 h-[120px] w-[240px] translate-x-[-46.5%] translate-y-[-35%] bg-[#2F2E0C]">
          <div className="ml-3 mt-3 flex h-[100px] flex-col justify-between">
            <div>
              <div className="text-lg font-bold text-white">
                Bolsa do medina
              </div>
              <div className="text-sm font-bold text-zinc-400/40">#00001</div>
            </div>
            <div className="text-lg font-bold text-[#aeff6e]">R$ 45.55</div>
          </div>
          <div className="absolute bottom-0 left-1/2 size-[20px] translate-x-[-50%] translate-y-[10px] rotate-45 bg-[#2F2E0C]"></div>
        </div>
      )}
    </div>
  )
}
