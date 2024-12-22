import Image from 'next/image'
import React, { useState } from 'react'
import Teko from '@/assets/logos/teko-verde.png'
import { CaretDown } from '@phosphor-icons/react'

export default function Navbar() {
  const [rotatedIndex, setRotatedIndex] = useState<number | null>(null)

  const toggleRotation = (index: number) => {
    setRotatedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="relative flex min-h-[75px] w-full select-none items-center justify-center gap-[30px] border-b border-zinc-500/40 bg-white text-[#2f2e0c]">
      <Image src={Teko} alt="Logo" width={150} height={75} />
      <ul className="ml-[10px] flex items-center gap-[10px] text-[16px] leading-[24px]">
        <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-[#EFEFEB]">
          Catálogo
        </li>
        <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-[#EFEFEB]">
          Preços
        </li>

        <li className="cursor-pointer rounded-lg px-3 py-2 hover:bg-[#EFEFEB]">
          Personalize
        </li>
        <li
          className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#EFEFEB]"
          onClick={() => toggleRotation(0)}
        >
          {rotatedIndex === 0 && (
            <div
              className="absolute top-full flex -translate-x-2 flex-col bg-white px-5 py-8 shadow-xl"
              style={{ zIndex: 100 }}
            >
              <div className="mb-[1rem] pl-3 pr-8 font-black">
                Como funciona
              </div>
              <div className="rounded-md py-2 pl-3 pr-8 font-medium text-zinc-600 hover:bg-[#EFEFEB]">
                Como funciona a TekoBag
              </div>
              <div className="rounded-md py-2 pl-3 pr-8 font-medium text-zinc-600 hover:bg-[#EFEFEB]">
                Como funciona o Pesonalize
              </div>
            </div>
          )}
          <span>Como funciona</span>
          <CaretDown
            size={14}
            color="#2f2e0c"
            weight="bold"
            className={`transform transition-transform ${
              rotatedIndex === 0 ? 'rotate-180' : ''
            }`}
          />
        </li>
        <li
          className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-[#EFEFEB]"
          onClick={() => toggleRotation(1)}
        >
          {rotatedIndex === 1 && (
            <div
              className="absolute top-[70px] flex -translate-x-2 flex-col bg-white px-5 py-8 shadow-xl"
              style={{ zIndex: 90 }}
            >
              <div className="mb-[1rem] pl-3 pr-10 font-black">Apoiar</div>
              <div className="rounded-md py-2 pl-3 pr-10 font-medium text-zinc-600 hover:bg-[#EFEFEB]">
                Central de Ajuda
              </div>
              <div className="rounded-md py-2 pl-3 pr-10 font-medium text-zinc-600 hover:bg-[#EFEFEB]">
                Contate-nos
              </div>
            </div>
          )}
          <span>Apoiar</span>
          <CaretDown
            size={14}
            color="#2f2e0c"
            weight="bold"
            className={`transform transition-transform ${
              rotatedIndex === 1 ? 'rotate-180' : ''
            }`}
          />
        </li>
      </ul>
      <div className="flex items-center gap-[15px]">
        <button className="h-[40px] rounded border border-[#e0e0d7] px-5 text-[1rem] font-bold transition-all duration-200 hover:bg-[#2f2e0c]/10">
          Conecte-se
        </button>
        <button className="h-[40px] rounded bg-[#aeff6e] px-5 text-[1rem] font-bold transition-all duration-200 hover:bg-[#c6fb9d]">
          Inscrever-se
        </button>
      </div>
    </div>
  )
}
