'use client'

import { Ticket, Coins } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100,
            y: -20,
            rotate: 0,
            opacity: 0.7,
          }}
          animate={{
            y: '100vh',
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        >
          {i % 2 === 0 ? (
            <Ticket className="w-8 h-8 text-purple-300/30" />
          ) : (
            <Coins className="w-8 h-8 text-blue-300/30" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
