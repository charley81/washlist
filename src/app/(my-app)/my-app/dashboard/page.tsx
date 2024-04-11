import ClientCount from '@/components/client-count'
import ClientScrollMenu from '@/components/client-scroll-menu'
import ClientSearch from '@/components/client-search'

export default function DashboardPage() {
  return (
    <main>
      <ClientSearch />
      <ClientCount />
      <ClientScrollMenu />
    </main>
  )
}
