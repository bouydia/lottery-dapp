'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import Image from 'next/image'
import Jazzicon from '@raugfer/jazzicon'

const participants = [
  {
    address: '0x8293cEaF17D3dF4bE12Fa6F327b0Ea1A1a2b',
  },
  {
    address: '0x7172f5B17D4aF4Ce11Eb7F627b3Ac3C43c4d',
  },
  {
    address: '0x6051dEaF18C5Ef4dC11Ac7G737b5eC55e6f',
  },
  {
    address: '0x5940dEbF12B7Ff5dB14Ca8G847d7Gc47g8h',
  },
  {
    address: '0x4829cEaF16D9fF5dB15Ad9I957d9Jc49i0j',
  },
]
function buildAddressAvatar(address: string): string {
  return 'data:image/svg+xml;base64,' + btoa(Jazzicon(address))
}
export function ParticipantList() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Users className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold">Current Participants</h3>
        </div>
        <span className="text-2xl font-bold text-purple-400">
          {participants.length}
        </span>
      </div>

      <div className="space-y-4">
        {participants.map((participant, index) => (
          <motion.div
            key={participant.address}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Image
                src={buildAddressAvatar(
                  '0xf6De04c86508c3563E5C688bf8EDF8ba47A338EF'
                )}
                alt={`Participant ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-purple-500/30"
                width={100}
                height={100}
              />
              <span className="text-sm font-mono">{participant.address}</span>
            </div>
            <span className="text-sm text-gray-400">#{index + 1}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
