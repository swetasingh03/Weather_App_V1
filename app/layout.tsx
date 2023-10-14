import './globals.css'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Favicon from './favicon.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Created by sweta singh',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
