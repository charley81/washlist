import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { tempClients } from '@/lib/temp-data'

export default function ClientScrollMenu() {
  return (
    <div>
      <ScrollArea className="h-48 rounded-md mt-6">
        {tempClients.map((client) => (
          <>
            <p className="text-base text-slate-700 py-4 hover:cursor-pointer">
              {client.name}
            </p>
            <Separator />
          </>
        ))}
      </ScrollArea>
    </div>
  )
}
