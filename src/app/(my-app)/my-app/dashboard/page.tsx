import ClientCount from '@/components/client-count'
import ClientInfo from '@/components/client-info'
import ClientScrollMenu from '@/components/client-scroll-menu'
import ClientSearch from '@/components/client-search'
import { tempClients } from '@/lib/temp-data'

export default function DashboardPage() {
  // const response = await fetch(
  //   'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
  // )
  // if (!response.ok) {
  //   throw new Error('Failed to fetch pets')
  // }
  // const pets = await response.json()

  return (
    <main className="grid gap-4">
      <div>
        <ClientSearch />
        <ClientCount />
        <ClientScrollMenu clients={tempClients} />
      </div>

      <ClientInfo />
    </main>
  )
}
