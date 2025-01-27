import Image from 'next/image'
import React from 'react'

interface CardTutorialProps {
  title: string
  description: string
  titleLink: string
  imagem: string
}

export default function CardTutorial({
  title,
  description,
  titleLink,
  imagem,
}: CardTutorialProps) {
  return (
    <div className="h-[580px] max-w-[600px] bg-[#F3F4F1] px-[30px] text-[#2F2E0C] shadow-lg">
      <div className="h-[300px] w-full">
        <Image src={`${imagem}`} alt="" width={600} height={300} />
      </div>
      <div className="mt-[40px] flex flex-col gap-[30px]">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-lg">{description}</div>
        <div className="cursor-pointer text-lg font-medium underline hover:text-indigo-950">
          {titleLink}
        </div>
      </div>
    </div>
  )
}
