'use client'

import { motion } from 'framer-motion'
import { Ticket, History, Trophy } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const userProfile = {
  address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
  ticketsBought: 45,
  totalWinnings: '89.5',
  participatedDraws: 12,
}

const ticketHistory = [
  { id: 1, drawDate: '2024-03-15', tickets: 5, result: 'No Win' },
  { id: 2, drawDate: '2024-03-08', tickets: 3, result: 'Won 45.2 ETH' },
  { id: 3, drawDate: '2024-03-01', tickets: 4, result: 'No Win' },
]

export default function Profile() {
  return (
    <main className="p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8"
        >
          <div className="flex items-center gap-6">
            <img
              src={`https://effigy.im/a/${userProfile.address}.png`}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-purple-500/30"
            />
            <div>
              <h1 className="text-2xl font-bold mb-2">My Profile</h1>
              <p className="font-mono text-sm text-gray-300">
                {userProfile.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Ticket className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Total Tickets</span>
              </div>
              <p className="text-2xl font-bold">{userProfile.ticketsBought}</p>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Total Winnings</span>
              </div>
              <p className="text-2xl font-bold">
                {userProfile.totalWinnings} ETH
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <History className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Participated Draws</span>
              </div>
              <p className="text-2xl font-bold">
                {userProfile.participatedDraws}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="history" className="flex-1">
                Ticket History
              </TabsTrigger>
              <TabsTrigger value="active" className="flex-1">
                Active Tickets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <div className="space-y-4">
                {ticketHistory.map(entry => (
                  <div
                    key={entry.id}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">
                        {new Date(entry.drawDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-300">
                        Tickets: {entry.tickets}
                      </p>
                    </div>
                    <div
                      className={`text-sm ${
                        entry.result.includes('Won')
                          ? 'text-green-400'
                          : 'text-gray-400'
                      }`}
                    >
                      {entry.result}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
                <p className="text-gray-300">
                  No active tickets for upcoming draws
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </main>
  )
}
