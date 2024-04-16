'use client'

import { createContext, useState } from 'react'

export const ClientContext = createContext(null)

export default function ClientContextProvider({ initialClientData, children }) {
  const [clients, setClients] = useState(initialClientData)
  const [selectedClientId, setSelectedClientId] = useState(null)

  return (
    <ClientContext.Provider value={{ clients, selectedClientId }}>
      {children}
    </ClientContext.Provider>
  )
}
