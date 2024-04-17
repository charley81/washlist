'use client'

import { useClientContext } from '@/lib/hooks'
import ClientInfoHeader from './client-info-header'
import ClientInfoMake from './client-info-make'
import ClientInfoNotes from './client-info-notes'

export default function ClientInfo() {
  const { selectedClient } = useClientContext()

  if (!selectedClient) {
    return (
      <section className="w-full h-full">
        <h1 className="text-2xl text-center">No client selected</h1>
      </section>
    )
  }

  return (
    <section className="w-full h-full">
      <ClientInfoHeader client={selectedClient} />
      <ClientInfoMake client={selectedClient} />
      <ClientInfoNotes client={selectedClient} />
    </section>
  )
}
