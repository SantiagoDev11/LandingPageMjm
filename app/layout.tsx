import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ChatMJM from "@/components/chatmjm";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap"
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap"
});

export const metadata: Metadata = {
  title: 'Martha J. Mejía Abogados & Asociados | Recuperación de Cartera',
  description: 'Despacho jurídico especializado en recuperación de cartera y cobranzas con más de 20 años de experiencia. Soluciones legales claras, éticas y eficientes.',
  generator: 'v0.app',
  keywords: ['cobranzas', 'recuperación de cartera', 'abogados', 'Cali', 'Colombia', 'despacho jurídico'],
  icons: {
    icon: [
      {
        url: '/icono02.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icono02.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '//icono02.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icono02.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${montserrat.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <ChatMJM />
        <Analytics />
      </body>
    </html>
  )
}
