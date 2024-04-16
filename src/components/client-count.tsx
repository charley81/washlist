import { Button } from './ui/button'

export default function ClientCount() {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-base">
        Current Clients: <span>3</span>
      </h3>
      <Button
        variant="default"
        size="icon"
        className="hover:drop-shadow-lg active:scale-105"
      >
        Add
      </Button>
    </div>
  )
}
