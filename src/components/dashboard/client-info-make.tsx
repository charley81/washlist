import { Client } from '@/lib/types'

type ClientInfoMakeProps = {
  client: Client
}

export default function ClientInfoMake({ client }: ClientInfoMakeProps) {
  return (
    <div>
      <p>
        {client.vehicleYear} {client.vehicleColor} {client.vehicleMake}{' '}
        {client.vehicleModel}
      </p>
    </div>
  )
}
