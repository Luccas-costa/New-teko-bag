import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-[1000px]">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex gap-5 pl-1 md:basis-1/2 lg:basis-1/5"
          >
            <div className="h-[180px] w-[170px] rounded-lg border border-zinc-400"></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
