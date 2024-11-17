import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Participant {
  id: number
  name: string
  avatar: string
}

interface ParticipantCardProps {
  participant: Participant
}

export function ParticipantCard({ participant }: ParticipantCardProps) {
  return (
    <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 transition-all duration-300 hover:bg-white/20">
      <Avatar className="h-12 w-12 border-2 border-purple-500">
        <AvatarImage src={participant.avatar} alt={participant.name} />
        <AvatarFallback>
          {participant.name
            .split(' ')
            .map(n => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-medium">{participant.name}</p>
        <p className="text-sm text-gray-300">Ticket #{participant.id}</p>
      </div>
    </div>
  )
}
