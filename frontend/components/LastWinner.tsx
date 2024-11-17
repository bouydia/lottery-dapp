'use client'

import { motion } from 'framer-motion'
import { Trophy, ExternalLink } from 'lucide-react'

export function LastWinner() {
  const winnerAddress = '0x1234...5678'
  const prizeAmount = '156.8'

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl p-6 backdrop-blur-lg border border-yellow-500/20"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-yellow-500/20 rounded-full">
          <Trophy className="w-6 h-6 text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-yellow-400">Last Winner</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Address</span>
          <a
            href="#"
            className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2"
          >
            {winnerAddress}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">Prize Won</span>
          <span className="text-2xl font-bold text-yellow-400">
            {prizeAmount} ETH
          </span>
        </div>
      </div>
    </motion.div>
  )
}
