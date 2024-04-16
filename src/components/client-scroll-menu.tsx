'use client'

import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { Client } from '@/lib/types'

type ClientScrollMenuProps = {
  clients: Client[]
}

export default function ClientScrollMenu({ clients }: ClientScrollMenuProps) {
  const [isAtBottom, setIsAtBottom] = useState(false)
  console.log(clients)
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
              <Button variant="ghost" className="text-base text-slate-700 py-4">
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
