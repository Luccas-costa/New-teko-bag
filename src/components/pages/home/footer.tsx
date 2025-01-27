import React from 'react'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import LogoTransparentBlack from '@/assets/logos/logo-transparent-black'

export default function Footer() {
  const [cart] = useCart()
  return (
    <div
      className="flex h-[30vh] w-full flex-col items-center gap-6 bg-white px-[100px] py-[40px]"
      id="footer"
    >
      <hr className="h-[3px] w-full rounded-lg border-none bg-[#2F2E0C]" />
      <div className="flex w-full justify-between">
        <div className="max-w-[350px]">
          {cart.bagsCart.length > 0 ? (
            <Link href={`/?bagsCart=${cart.bagsCart}`}>
              <div className="flex items-center gap-2">
                <LogoTransparentBlack width={80} height={80} />
                <div className="text-3xl font-bold text-[#2F2E0C]">
                  Teko Bag{"'"}s
                </div>
              </div>
            </Link>
          ) : (
            <Link href={`/`}>
              <div className="flex items-center gap-2">
                <LogoTransparentBlack width={80} height={80} />
                <div className="text-3xl font-bold text-[#2F2E0C]">
                  Teko Bag{"'"}s
                </div>
              </div>
            </Link>
          )}

          <div className="pt-3 text-lg font-medium text-[#2F2E0C]">
            A sua bag sustentavel feita para o seu dia a dia e para o meio
            ambiente
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-2">
            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="text-lg font-medium text-green-500">
                  Descobrir
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="text-lg font-medium text-green-500">
                  Descobrir
                </div>
              </Link>
            )}

            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
                  Nova temporada
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
                  Nova temporada
                </div>
              </Link>
            )}

            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
                  Mais pesquisados
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
                  Mais pesquisados
                </div>
              </Link>
            )}

            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
                  Mais vendidos
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
                  Mais vendidos
                </div>
              </Link>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-green-500">Sobre</div>
            <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
              Ajuda
            </div>
            <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
              Shopping
            </div>
            <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
              Afiliados
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-green-500">Info</div>
            <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
              Contato
            </div>
            <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
              Privacy Policies
            </div>
            <div className="cursor-pointer text-lg font-medium text-[#2F2E0C]/40 transition-all duration-200 hover:text-[#2F2E0C]">
              Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
