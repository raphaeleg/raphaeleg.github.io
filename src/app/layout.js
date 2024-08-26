import { cx } from '@/src/utils'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Header from "@/src/components/Header"

const inter = Inter( { subsets: ['latin'], display: "swap", variable: "--font-in" } )
const manrope = Manrope( { subsets: ['latin'], display: "swap", variable: "--font-mr" } )

export const metadata = {
  title: 'Raphaele G.',
  description: 'Game Developer inspired to create something new.',
}

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body
        className={cx( inter.variable, manrope.variable, "font-mr bg-light" )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
