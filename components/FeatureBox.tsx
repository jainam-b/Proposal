import React from 'react'
import { type LucideIcon } from 'lucide-react'

interface FeatureBoxProps {
  icon: LucideIcon
  title: string
  description: string
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

