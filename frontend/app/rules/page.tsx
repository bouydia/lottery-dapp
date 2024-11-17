'use client'

import { motion } from 'framer-motion'
import { Shield, HelpCircle, Timer, Ticket } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const rules = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Fair Distribution',
    description:
      'Every ticket has an equal chance of winning. The lottery uses Chainlink VRF for verifiable randomness.',
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: 'Weekly Draws',
    description:
      'Draws occur every Friday at 3 PM UTC. Make sure to buy your tickets before the cutoff time.',
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: 'Ticket Price',
    description:
      "Each ticket costs 0.1 ETH. There's no limit to how many tickets you can purchase.",
  },
]

const faqs = [
  {
    question: 'How do I participate in the lottery?',
    answer:
      "Connect your wallet, ensure you have enough ETH, and click the 'Buy Ticket' button. The ticket price will be automatically deducted from your wallet.",
  },
  {
    question: 'How are winners selected?',
    answer:
      "Winners are selected using Chainlink's Verifiable Random Function (VRF), ensuring completely fair and transparent selection.",
  },
  {
    question: 'When do I receive my winnings?',
    answer:
      "Winnings are automatically transferred to the winner's wallet immediately after the draw is completed.",
  },
  {
    question: 'What happens if no one wins?',
    answer:
      "The prize pool rolls over to the next draw, making the next lottery's prize even bigger!",
  },
]

export default function Rules() {
  return (
    <main className="p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Rules & FAQ</h1>
          <p className="text-gray-300">
            Everything you need to know about our lottery system
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-purple-500/20 rounded-full mb-4">
                {rule.icon}
              </div>
              <h3 className="font-semibold mb-2">{rule.title}</h3>
              <p className="text-sm text-gray-300">{rule.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-semibold">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </main>
  )
}
