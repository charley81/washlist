'use client'

import { useClientContext } from '@/lib/hooks'

export default function ClientInfo() {
  const { selectedClient } = useClientContext()

  return (
    <section className="w-full h-full">
      <h3>{selectedClient?.name}</h3>
      {/* header  */}
      {/* make */}
      {/* notes */}
    </section>
  )
}
