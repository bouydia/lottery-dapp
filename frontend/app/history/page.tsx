'use client'

import { motion } from 'framer-motion'
import { Calendar, Award } from 'lucide-react'

const lotteryHistory = [
  {
    id: 1,
    date: '2024-03-15',
    winner: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    prize: '245.5',
    participants: 156,
  },
  {
    id: 2,
    date: '2024-03-08',
    winner: '0x1234567890123456789012345678901234567890',
    prize: '189.2',
    participants: 142,
  },
  {
    id: 3,
    date: '2024-03-01',
    winner: '0x9876543210987654321098765432109876543210',
    prize: '203.7',
    participants: 168,
  },
]

export default function History() {
  return (
    <main className="p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Lottery History</h1>
          <p className="text-gray-300">Past winners and prize distributions</p>
        </motion.div>

        <div className="space-y-6">
          {lotteryHistory.map((draw, index) => (
            <motion.div
              key={draw.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Calendar className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Draw Date</p>
                    <p className="font-semibold">
                      {new Date(draw.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={`https://effigy.im/a/${draw.winner}.png`}
                    alt={`Winner ${draw.winner}`}
                    className="w-10 h-10 rounded-full border-2 border-yellow-500/30"
                  />
                  <div>
                    <p className="text-sm text-gray-400">Winner</p>
                    <p className="font-mono text-sm">
                      {draw.winner.slice(0, 6)}...{draw.winner.slice(-4)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Prize Pool</p>
                    <p className="font-bold text-yellow-400">
                      {draw.prize} ETH
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <p className="font-semibold text-purple-400">
                    {draw.participants}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
