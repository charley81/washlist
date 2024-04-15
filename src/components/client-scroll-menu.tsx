'use client'

import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { tempClients } from '@/lib/temp-data'
import { ChevronDown } from 'lucide-react'

export default function ClientScrollMenu() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  const checkScrollPosition = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target
    const atBottom = scrollTop + clientHeight >= scrollHeight
    setIsAtBottom(atBottom)
  }

  return (
    <div>
      <ScrollArea
        className="h-48 rounded-md mt-6"
        onScroll={checkScrollPosition}
      >
        {tempClients.map((client) => (
          <>
            <p className="text-base text-slate-700 py-4 hover:cursor-pointer">
              {client.name}
            </p>
            <Separator />
          </>
        ))}
      </ScrollArea>
      <ChevronDown className={`mx-auto ${isAtBottom ? 'rotate-180' : ''}`} />
    </div>
  )
}
