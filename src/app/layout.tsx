import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import './globals.css'
import { Inter } from 'next/font/google'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Teko Bag',
  description: 'Ecomerce de eco bags',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.className} bg-zinc-200 antialiased transition-all duration-200`}
      >
        {children}
      </body>
    </html>
  )
}
