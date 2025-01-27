'use client'
import { motion } from 'framer-motion'
import styles from '@/styles/font-monserat.module.css'
import React, { useEffect, useState } from 'react'

export default function ImageHeroAnimeted() {
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFinished((prev) => !prev)
    }, 4800) // Alterna a cada 4 segundos

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="mt-[50px] flex w-full justify-center gap-[35px]">
        <div className="size-[390px] rounded shadow">
          <motion.div
            className="absolute size-[140px] rotate-[-14deg] rounded-lg bg-[#2F2E0C]"
            key={String(isFinished)} // Reinicia o componente ao alterar isFinished
            initial={{
              translateX: '-20%',
              translateY: '-20%',
              rotate: -14,
              opacity: 0,
            }}
            animate={{
              translateX: '-40%',
              translateY: '-40%',
              opacity: [0, 0.6, 1],
            }}
            transition={{
              duration: 0.8, // Duração da animação de ida e volta
            }}
          >
            {' '}
          </motion.div>

          {isFinished ? (
            <div
              className={`h-full w-full bg-red-500 transition-all duration-700`}
            ></div>
          ) : (
            <div
              className={`h-full w-full bg-purple-500 transition-all duration-700`}
            ></div>
          )}
        </div>

        <div className="relative size-[390px] rounded shadow">
          {isFinished ? (
            <div
              className={`h-full w-full bg-red-500 transition-all duration-700`}
            ></div>
          ) : (
            <div
              className={`h-full w-full bg-blue-500 transition-all duration-700`}
            ></div>
          )}

          <motion.div
            className={`${styles.font} absolute bottom-0 right-0 flex h-[75px] w-[200px] items-center justify-center rounded-lg bg-[#2F2E0C] text-3xl font-black uppercase text-white`}
            key={String(isFinished)}
            initial={{ translateX: '40%' }}
            animate={{
              translateY: ['30%', '35%', '30%'],
              rotate: [-10, -3, -10],
            }}
            transition={{
              duration: 0.7, // Duração da animação de ida e volta
            }}
          >
            <motion.div
              className="absolute flex h-[60px] w-[110px] items-center justify-center gap-0 rounded-[78%/78%] bg-[#aeff6e]"
              key={String(isFinished)}
              initial={{ translateX: '66%' }}
              animate={{
                translateY: ['-70%', '-75%', '-70%'],
                rotate: [20, 30, 20],
              }}
              transition={{
                duration: 0.7, // Duração da animação de ida e volta
              }}
            >
              <div className="text-4xl font-black text-[#2F2E0C]">$$$</div>
            </motion.div>
            Vendido
          </motion.div>
        </div>
      </div>
    </div>
  )
}
