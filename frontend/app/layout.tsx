import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Toaster } from 'sonner'
import { Navigation } from '@/components/Navigation'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Lottery Avatar',
  description: 'the most tustable lottery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <div className="md:pt-[73px] min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white ">
          {children}
        </div>
        <Toaster position="top-center" expand={true} richColors />
      </body>
    </html>
  )
}
