'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, History, Book, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'History', href: '/history', icon: History },
  { name: 'Rules', href: '/rules', icon: Book },
  { name: 'Profile', href: '/profile', icon: User },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-t border-white/10 p-4 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-around md:justify-end gap-4">
          {navigation.map(item => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors',
                  pathname === item.href
                    ? 'bg-white/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden md:block">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
