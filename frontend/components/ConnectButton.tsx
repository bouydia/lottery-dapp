'use client'

import { useState } from 'react'
import { Wallet2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export function ConnectButton() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = async () => {
    setIsConnecting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsConnected(true)
      toast.success('Wallet connected successfully!', {
        description: 'You can now participate in the lottery',
      })
    } catch (error) {
      toast.error('Failed to connect wallet', {
        description: 'Please try again later',
      })
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <Button
      size="lg"
      onClick={connectWallet}
      disabled={isConnecting || isConnected}
      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
    >
      <Wallet2 className="mr-2 h-5 w-5" />
      {isConnecting
        ? 'Connecting...'
        : isConnected
        ? 'Connected!'
        : 'Connect Wallet to Join'}
    </Button>
  )
}
