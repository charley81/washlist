import Link from 'next/link'

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

export default function MyAppHeaderNav() {
  return (
    <nav>
      <ul className="hidden sm:flex gap-4 items-center">
        {routes.map(({ label, path }) => (
          <li
            key={path}
            className={cn('text-slate-600 font-semibold text-base hover:text-blue-700 focus:text-blue-700 transition', {
              'text-slate-950': pathname === path
            })}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
