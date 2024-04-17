import ClientCount from '@/components/dashboard/client-count'
import ClientInfo from '@/components/dashboard/client-info'
import ClientScrollMenu from '@/components/dashboard/client-scroll-menu'
import ClientSearch from '@/components/dashboard/client-search'

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
