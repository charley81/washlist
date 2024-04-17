import { Client } from '@/lib/types'
import { Button } from './ui/button'

type ClientInfoHeaderProps = {
  client: Client
}

export default function ClientInfoHeader({ client }: ClientInfoHeaderProps) {
  return (
    <header>
      <h3>{client.name}</h3>
      <Button size="icon">Edit</Button>
      <Button variant="outline" size="icon">
        Done
      </Button>
    </header>
  )
}
