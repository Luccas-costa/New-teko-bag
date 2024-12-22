'use client'

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
          {/* trocar a parte do quanto pode ganhar pela pessoas reais mais deixando as cores e depois pular o comece hoje mesmo 100% gratis e o footter so usar oq ja tem so mudar o bg */}
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
