import MyAppFooter from '@/components/my-app-footer'
import MyAppHeader from '@/components/my-app-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'washlist - car washing management system',
  description: 'Manage your car washing business with ease.'
}

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col max-w-6xl mx-auto min-h-screen py-8 px-2 md:px-8 ">
      <MyAppHeader />
      {children}
      <MyAppFooter />
    </div>
  )
}
