'use client'
import React, { useState } from 'react'
import styles from '@/styles/font-monserat.module.css'
import CardTutorial from './card-tutorial'

export default function Tutorial() {
  const [tutorial, setTutorial] = useState(false)
  return (
    <div className="mt-[80px] pb-[100px] text-[#2F2E0C]">
      <div
        className={`text-[2.5rem] ${styles.font} mb-[40px] flex w-full justify-center font-bold leading-[3rem]`}
      >
        Comece em 4 etapas fáceis
      </div>

      <div className="mb-[40px] flex w-full justify-center">
        <div
          className="flex h-[50px] w-[600px] justify-between rounded-full bg-[#F3F4F1] p-1 shadow-lg"
          onClick={() => setTutorial(!tutorial)}
        >
          <div
            className={`${!tutorial && 'bg-white'} ${tutorial && 'hover:bg-white/60'} flex w-[calc(50%-2px)] cursor-pointer items-center justify-center rounded-full text-lg font-bold text-zinc-500 transition-all duration-300`}
          >
            Modelos prontos
          </div>
          <div
            className={`${tutorial && 'bg-white'} ${!tutorial && 'hover:bg-white/60'} flex w-[calc(50%-2px)] cursor-pointer items-center justify-center rounded-full text-lg font-bold text-zinc-500 transition-all duration-300`}
          >
            Personalize
          </div>
        </div>
      </div>

      {!tutorial && (
        <>
          <div className="flex h-full w-full flex-wrap items-center justify-center gap-[35px]">
            <CardTutorial
              title="1. Selecione"
              description="Escolha entre mais de 100 produtos de alta qualidade, incluindo
          estampas: praianas, animadas, floridas e muito mais."
              titleLink="Escolha seu produto"
              imagem="/steps/steps-select.jpg"
            />
            <CardTutorial
              title="2. Criar"
              description="Use nosso Criador de Produtos gratuito, repleto de ferramentas para iniciantes, para projetar os produtos dos seus sonhos."
              titleLink="Comece a projetar"
              imagem="/steps/steps-create.jpg"
            />
          </div>
          <div className="mt-[35px] flex h-full w-full flex-wrap items-center justify-center gap-[35px]">
            <CardTutorial
              title="3. Nos deixe informado"
              description="Preencha o formulário e nos deixe informado sobre aonde e como gostaria de receber o seu produto."
              titleLink="Preencha seu formulário"
              imagem="/steps/steps-make-money.jpg"
            />
            <CardTutorial
              title="4. Pagamento sem riscos"
              description="Depois que você escolhe sua bag, escolha uma das opções de pagamento e pague sem riscos."
              titleLink="Preencha seu formulário"
              imagem="/steps/steps-publish.jpg"
            />
          </div>
        </>
      )}
      {tutorial && (
        <>
          <div className="flex h-full w-full flex-wrap items-center justify-center gap-[35px]">
            <CardTutorial
              title="1. Selecione"
              description="Se sua bag tem um design prontinho criado por você, ou até mesmo quer um desing totalmente diferenciado com sua cara, para isso temos o Personalize sua bag"
              titleLink="Bags personalizadas"
              imagem="/steps/steps-select.jpg"
            />
            <CardTutorial
              title="2. Entender"
              description="Procure entender como funciona cada passo detalhado de como criar sua bag personalizada."
              titleLink="Entenda como funciona"
              imagem="/steps/steps-create.jpg"
            />
          </div>
          <div className="mt-[35px] flex h-full w-full flex-wrap items-center justify-center gap-[35px]">
            <CardTutorial
              title="3. Nos deixe informado"
              description="Preencha o formulário e nos deixe informado sobre quem e você para podermos entrar em contato com você."
              titleLink="Preencha seu formulário"
              imagem="/steps/steps-make-money.jpg"
            />
            <CardTutorial
              title="4. Nosso Contato"
              description="Entraremos em contano em um periodo maximo de 3 dias uteis, para termos uma conversa sobre como faremos sua ecobag."
              titleLink="Preencha seu formulário"
              imagem="/steps/steps-publish.jpg"
            />
          </div>
        </>
      )}

      <div className="mt-[80px] flex w-full flex-col items-center">
        <div className={`text-[1.5rem] font-bold`}>
          Pronto para escolher sua bag?
        </div>
        <div className="mt-[20px] flex w-full justify-center">
          <button className="treansition-all h-[58px] rounded-md bg-[#aeff6e] px-8 text-[1.125rem] font-bold duration-200 hover:bg-[#c6fb9d]">
            Escolher
          </button>
        </div>
      </div>
    </div>
  )
}
