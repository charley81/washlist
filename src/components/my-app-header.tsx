'use client'

import { useState } from 'react'
import Logo from '@/components/logo'
import { cn } from '@/lib/utils'
import { AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AppNavSlideIn from './app-nav-slide-in'
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
          size={32}
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
      <AppNavSlideIn
        isOpen={isOpen}
        onToggleMenu={handleToggleMenu}
        routes={routes}
        pathname={pathname}
        linkStyles={linkStyles}
      />
    </header>
  )
}
