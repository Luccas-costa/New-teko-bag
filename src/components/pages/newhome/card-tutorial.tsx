import React from 'react'

interface CardTutorialProps {
  title: string
  description: string
  titleLink: string
}

export default function CardTutorial({
  title,
  description,
  titleLink,
}: CardTutorialProps) {
  return (
    <div className="h-[580px] w-[600px] bg-[#F3F4F1] px-[30px] text-[#2F2E0C] shadow-lg">
      <div className="h-[300px] w-full"></div>
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
