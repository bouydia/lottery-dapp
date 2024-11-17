'use client'

import { useState, useEffect } from 'react'
import { FloatingIcons } from '@/components/FloatingIcons'
import { ConnectButton } from '@/components/ConnectButton'
import { CountdownTimer } from '@/components/CountdownTimer'
import { LastWinner } from '@/components/LastWinner'
import { ParticipantList } from '@/components/ParticipantList'
import { Navigation } from '@/components/Navigation'

// Wrapper component for client-side only content
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? children : null
}

export default function Home() {
  // State to track if we're mounted on client
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <main className="relative overflow-hidden">
      {/* Decorative Elements - Static content that's safe to render on server */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Wrap dynamic components in ClientOnly */}
      <ClientOnly>
        <FloatingIcons />
      </ClientOnly>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header Section - Static content */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              Decentralized Lottery
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Join the most transparent and fair lottery system on the
              blockchain. Every ticket has an equal chance to win the grand
              prize!
            </p>
            {/* Wrap interactive components in ClientOnly */}
            <ClientOnly>
              <ConnectButton />
            </ClientOnly>
          </div>

          {/* Timer Section */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Next Draw In</h2>
            {isMounted && <CountdownTimer />}
          </div>

          {/* Main Content Grid */}
          {isMounted && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Last Winner Section */}
              <div className="lg:col-span-1">
                <LastWinner />
              </div>

              {/* Participants List Section */}
              <div className="lg:col-span-2">
                <ParticipantList />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
