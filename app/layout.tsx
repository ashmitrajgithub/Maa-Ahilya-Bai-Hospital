import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Maa Ahilya Bai Hospital - Trusted Care For A Healthier, Happier Life',
  description: 'Exceptional Care For Every Stage Of Life, From Advanced Diagnostics To Personalized Treatments, Ensuring Your Health And Well-Being.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
