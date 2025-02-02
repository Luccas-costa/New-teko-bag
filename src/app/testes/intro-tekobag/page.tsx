'use client'
import React from 'react'
import IntroAnimation from '@/components/ui/intro-tekobag/intro-animation'
import { motion } from 'framer-motion'

export default function IntroTekobag() {
  return (
    <motion.div
      className="min-w-screen min-h-screen overflow-hidden bg-neutral-900 text-white"
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 0 }}
      // transition={{ delay: 0.4, duration: 1 }}
    >
      <IntroAnimation />
    </motion.div>
  )
}
