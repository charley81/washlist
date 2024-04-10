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
    <>
      <MyAppHeader />
      {children}
      <MyAppFooter />
    </>
  )
}
