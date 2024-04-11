'use client'

import { useState } from 'react'
import Logo from '@/components/logo'
import { cn } from '@/lib/utils'
import { AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

type MyAppNavLink = {
  label: string
  path: string
}

const routes: MyAppNavLink[] = [
  {
    label: 'Dashboard',
    path: '/my-app/dashboard'
  },
  {
    label: 'Account',
    path: '/my-app/account'
  }
]

const linkStyles =
  'text-slate-600 font-semibold text-base hover:text-blue-700 focus:text-blue-700 transition'

export default function MyAppHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleToggleMenu = () => setIsOpen(!isOpen)

  return (
    <header>
      <div className="text-4xl flex justify-between items-center">
        <Logo />
        <AlignJustify
          className="hover:cursor-pointer hover:scale-110 transition-all sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <ul className="hidden sm:flex gap-4 items-center">
          {routes.map(({ label, path }) => (
            <li
              key={path}
              className={cn(linkStyles, {
                'text-slate-950': pathname === path
              })}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
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
          <X onClick={handleToggleMenu} />
        </Button>

        <ul className="flex flex-col gap-4 items-center h-full justify-center">
          {routes.map(({ label, path }) => (
            <li
              key={path}
              className={cn(linkStyles, {
                'text-slate-950': pathname === path
              })}
              onClick={handleToggleMenu}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
