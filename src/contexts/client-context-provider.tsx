'use client'

import { Client } from '@/lib/types'
import { createContext, useState } from 'react'

type ClientContextProviderProps = {
  initialClientData: Client[]
  children: React.ReactNode
}

type TClientContext = {
  clients: Client[]
  selectedClientId: string | null
  selectedClient: Client | undefined
  handleChangeSelectedClientId: (id: string) => void
}

export const ClientContext = createContext<TClientContext | null>(null)

export default function ClientContextProvider({
  initialClientData,
  children
}: ClientContextProviderProps) {
  // state
  const [clients, setClients] = useState(initialClientData)
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null)

  // derived state
  const selectedClient = clients.find(
    (client) => client.id === selectedClientId
  )!

  // handlers
  const handleChangeSelectedClientId = (id: string) => {
    setSelectedClientId(id)
  }

  return (
    <ClientContext.Provider
      value={{
        clients,
        selectedClientId,
        handleChangeSelectedClientId,
        selectedClient
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}
