import MyAppFooter from '@/components/my-app-footer'
import MyAppHeader from '@/components/my-app-header'
import ClientContextProvider from '@/contexts/client-context-provider'
import type { Metadata } from 'next'
import { tempClients } from '@/lib/temp-data'

export const metadata: Metadata = {
  title: 'washlist - car washing management system',
  description: 'Manage your car washing business with ease.'
}

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // const response = await fetch(
  //   'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
  // )
  // if (!response.ok) {
  //   throw new Error('Failed to fetch pets')
  // }
  // const pets = await response.json()

  return (
    <div className="flex flex-col max-w-6xl mx-auto min-h-screen py-8 px-2 md:px-8 ">
      <MyAppHeader />
      <ClientContextProvider initialClientData={tempClients}>
        {children}
      </ClientContextProvider>
      <MyAppFooter />
    </div>
  )
}
