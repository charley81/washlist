import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'

type AppNavSlideInProps = {
  isOpen: boolean
  onToggleMenu: () => void
  pathname: string
  routes: { label: string; path: string }[]
  linkStyles: string
}

export default function AppNavSlideIn({
  isOpen,
  onToggleMenu,
  pathname,
  routes,
  linkStyles
}: AppNavSlideInProps) {
  return (
    <nav
      className={cn(
        'sm:hidden fixed inset-0 bg-blue-50 z-10 transition-transform transform',
        {
          'translate-x-full': !isOpen,
          'translate-x-0': isOpen
        }
      )}
    >
      <Button
        variant="outline"
        size="icon"
        className="hover:drop-shadow-lg active:scale-105 mt-8 ml-4"
      >
        <X onClick={onToggleMenu} />
      </Button>

      <ul className="flex flex-col gap-4 items-center h-full justify-center">
        {routes.map(({ label, path }) => (
          <li
            key={path}
            className={cn(linkStyles, {
              'text-slate-950': pathname === path
            })}
            onClick={onToggleMenu}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
