import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'washlist - car washing management system',
  description: 'Manage your car washing business with ease.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-base text-slate-950 bg-blue-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
