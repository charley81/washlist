import { useContext } from 'react'
import { ClientContext } from '@/contexts/client-context-provider'

export function useClientContext() {
  const context = useContext(ClientContext)

  if (!context) {
    throw new Error('No context found...')
  }

  return context
}
