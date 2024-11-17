'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TimeUnit {
  value: number
  label: string
}

export function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-12-31T23:59:59')
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    const timeUnits: TimeUnit[] = [
      { value: Math.floor(difference / (1000 * 60 * 60 * 24)), label: 'DAYS' },
      {
        value: Math.floor((difference / (1000 * 60 * 60)) % 24),
        label: 'HOURS',
      },
      { value: Math.floor((difference / 1000 / 60) % 60), label: 'MINUTES' },
      { value: Math.floor((difference / 1000) % 60), label: 'SECONDS' },
    ]

    return timeUnits
  }

  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-4 justify-center">
      {timeLeft.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 w-24 text-center">
            <motion.span
              key={unit.value}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-bold text-white"
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.span>
          </div>
          <span className="text-sm mt-2 text-gray-300">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
