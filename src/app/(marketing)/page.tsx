import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-2 flex flex-col justify-center min-h-screen max-w-3xl mx-auto lg:flex-row lg:items-center lg:gap-8 lg:max-w-6xl">
      <Image src="../icon.svg" alt="hero" width={762} height={762} />

      <div className="mt-16">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Manage your carwash with ease
        </h1>
        <p className="text-slate-700 pt-2">
          Easily keep track of your clients and cars with{' '}
          <span className="text-blue-700 font-bold text-lg">washlist</span>. Get
          lifetime access for $3.99
        </p>
        <div className="pt-16 flex gap-2">
          <Button asChild>
            <Link href="/sign-up">Get started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/log-in">Login</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
