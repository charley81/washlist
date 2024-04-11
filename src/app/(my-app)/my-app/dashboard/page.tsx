import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

type Client = {
  name: string
  vehicleYear: number
  vehicleColor: string
  vehicleMake: string
  vehicleModel: string
  notes: string
}

const tempClients: Client[] = [
  {
    name: 'Mike Smith',
    vehicleYear: 2018,
    vehicleColor: 'red',
    vehicleMake: 'Toyota',
    vehicleModel: 'Tacoma',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
  },
  {
    name: 'John Doe',
    vehicleYear: 1997,
    vehicleColor: 'blue',
    vehicleMake: 'Ford',
    vehicleModel: 'Mercury',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
  },
  {
    name: 'Amy Jones',
    vehicleYear: 2024,
    vehicleColor: 'Silver',
    vehicleMake: 'Mercedes',
    vehicleModel: 'MK1234',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
  }
]

export default function DashboardPage() {
  return (
    <main>
      <div className="mt-20 flex justify-between items-center">
        <h3 className="font-bold text-base">
          Current Clients: <span>3</span>
        </h3>
        <Plus />
      </div>
      <ScrollArea className="h-16 rounded-md mt-6">
        {tempClients.map((client) => (
          <>
            <p className="text-base text-slate-700">{client.name}</p>
            <Separator />
          </>
        ))}
      </ScrollArea>
    </main>
  )
}
