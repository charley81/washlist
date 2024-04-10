'use client'

import Logo from '@/components/logo'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const linkStyles = 'text-slate-600 font-semibold text-base'

export default function MyAppHeader() {
  const pathname = usePathname()

  return (
    <div className="text-4xl flex justify-between items-center px-2 pt-8 md:px-8 max-w-6xl mx-auto">
      <Logo />
      <AlignJustify className="hover:cursor-pointer hover:scale-110 transition-all sm:hidden" />
      <ul className="hidden sm:flex gap-4 items-center">
        {routes.map(({ label, path }) => (
          <li
            key={path}
            className={
              pathname === path ? 'text-slate-950' + linkStyles : linkStyles
            }
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
