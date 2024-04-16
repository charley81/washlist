import ClientCount from '@/components/client-count'
import ClientInfo from '@/components/client-info'
import ClientScrollMenu from '@/components/client-scroll-menu'
import ClientSearch from '@/components/client-search'

export default function DashboardPage() {
  return (
    <main className="grid gap-4">
      <div>
        <ClientSearch />
        <ClientCount />
        <ClientScrollMenu />
      </div>

      <ClientInfo />
    </main>
  )
}
