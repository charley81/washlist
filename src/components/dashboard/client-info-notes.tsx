import { Client } from '@/lib/types'

type ClientInfoNotesProps = {
  client: Client
}

export default function ClientInfoNotes({ client }: ClientInfoNotesProps) {
  return (
    <section>
      <label htmlFor="">Info</label>
      <p>{client.notes}</p>
    </section>
  )
}
