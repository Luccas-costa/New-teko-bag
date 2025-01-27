import React from 'react'

interface DevelopedProps {
  color?: boolean
}

export default function Developed({ color }: DevelopedProps) {
  return (
    <div
      className={`flex h-[80px] items-center justify-around ${color ? 'bg-[#2F2E0C]/5' : 'bg-zinc-200'}`}
    >
      <div className="font-medium text-zinc-600">
        ©TekoBag All Rights Reserved.
      </div>
      <div className="font-medium text-zinc-600">
        Developed by{' '}
        <a
          href="mailto:luccascosta.comercial@gmail.com?subject=Ol%C3%A1%20luccas%20vim%20pelo%20site%20da%20tekobags"
          target="_blank"
          rel="noreferrer"
        >
          luccascosta.comercial@gmail.com
        </a>
      </div>
    </div>
  )
}
