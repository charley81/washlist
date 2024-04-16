'use client'

import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { Client } from '@/lib/types'
import { useClientContext } from '@/lib/hooks'
import { cn } from '@/lib/utils'

export default function ClientScrollMenu() {
  const [isAtBottom, setIsAtBottom] = useState(false)
  const { clients, handleChangeSelectedClientId, selectedClientId } =
    useClientContext()

  console.log(selectedClientId)

  const checkScrollPosition = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } =
      event.target as HTMLDivElement
    const atBottom = scrollTop + clientHeight >= scrollHeight
    setIsAtBottom(atBottom)
  }

  return (
    <div>
      <ScrollArea
        className="h-24 rounded-md mt-6"
        onScroll={checkScrollPosition}
      >
        <ul className="hover:cursor-pointer">
          {clients.map((client) => (
            <div key={client.name}>
              <Button
                variant="ghost"
                className={cn('text-base text-slate-700 py-4', {
                  'bg-red-500': selectedClientId === client.id
                })}
                onClick={() => handleChangeSelectedClientId(client.id)}
              >
                {client.name}
              </Button>
              <Separator />
            </div>
          ))}
        </ul>
      </ScrollArea>
      <ChevronDown
        className={`mx-auto text-slate-400 ${isAtBottom ? 'rotate-180' : ''}`}
      />
    </div>
  )
}
