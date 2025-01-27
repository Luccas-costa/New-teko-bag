'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

// import Hero from 'home/hero'
// import Footer from 'home/footer'
// import Navbar from 'home/navbar'
// import Popular from 'home/popular'
// import Products from 'home/products'
// import Developed from 'home/developed'
// import Testimonials from 'home/testimonials'
// import GenerateFeed from 'home/generate-feed'

// import Tilt from '@/assets/tilt'
// import WavesOpacity from '@/assets/waves-opacity'
// import CurveAsymmstrical from '@/assets/curve-asymmstrical'

import Hero from 'newhome/hero'
import Navbar from 'newhome/navbar'
import Tutorial from 'newhome/tutorial'
import Inspirations from 'newhome/inspirations'
import Testimonials from 'newhome/testimonials'
import SliderPromotions from 'newhome/SliderPromotions'

import IntroAnimationUse from 'ui/intro-tekobag/intro-animation-use'
import Footer from '@/components/pages/home/footer'
import Developed from '@/components/pages/home/developed'

import calltoaction from '../../public/backgrounds/home/call-to-action.png'

export default function Home() {
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500) // 0.5 segundos

    return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
  }, [])

  return (
    <div>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <div className="min-h-screen bg-white antialiased transition-all duration-200">
          <div className="relative">
            <Navbar />
          </div>
          <div style={{ zIndex: -1 }}>
            <Hero />
          </div>

          <Tutorial />
          <SliderPromotions />
          <Inspirations />
          <Testimonials />

          <div className="px-[105px]">
            <div className="mx-auto mt-[40px] flex h-[500px] w-[100%] items-center justify-evenly rounded-3xl bg-[#AEFF6E]">
              <div className="flex flex-col gap-[30px]">
                <div className="text-[3.625rem] font-bold leading-[4.125rem] text-[#2F2E0C]">
                  Compre sua <br /> Tekobag{"'"}s hoje
                </div>
                <button className="h-[50px] w-[120px] rounded-md bg-[#2F2E0C] text-lg text-white">
                  Buscar
                </button>
              </div>
              <div>
                <Image
                  src={calltoaction}
                  width={450}
                  height={450}
                  alt="calltoaction"
                />
              </div>
            </div>
          </div>

          <Footer />
          <Developed color={true} />
        </div>
      )}
    </div>
  )
}

// antiga home
// <div className="bg-zinc-200 antialiased transition-all duration-200">
//   <Navbar />
//   <Hero />

//   <WavesOpacity />

//   <Products />

//   <div className="relative">
//     <div className="absolute left-0 top-0 w-full" style={{ zIndex: 2 }}>
//       <CurveAsymmstrical />
//     </div>

//     <Testimonials />
//   </div>

//   <div className="bg-variant_green2/40 pt-[100px]">
//     <div className="h-full w-full bg-[url('/backgrounds/background-tilt.png')] bg-repeat">
//       <Tilt color={0} />
//       <div className="rotate-180">
//         <Tilt color={1} />
//       </div>
//     </div>
//   </div>
//   <GenerateFeed />
//   <Popular />
//   <Footer />
//   <Developed />
// </div>
