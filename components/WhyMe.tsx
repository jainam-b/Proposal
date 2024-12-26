import React from 'react'
// import { FeatureBox } from './FeatureBox'
import { Grid, Zap, PuzzleIcon as PuzzlePiece, Code, Users, Infinity } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
const features = [
  {
    icon: Grid,
    title: 'Responsive Design',
    description: 'Flawless experiences across all devices and screen sizes.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized code for speedy load times and smooth interactions.'
  },
  {
    icon: PuzzlePiece,
    title: 'Custom Solutions',
    description: 'Tailor-made frontend solutions to match your unique requirements.'
  },
  {
    icon: Code,
    title: 'Modern Frameworks',
    description: 'Expertise in React, NextJS, MERN, and other cutting-edge technologies.'
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'I work closely with your team for seamless integration.'
  },
  {
    icon: Infinity,
    title: 'Ongoing Support',
    description: 'Continuous maintenance and updates to keep your frontend fresh.'
  }
]

export const WhyMeSection: React.FC = () => {
  return (
    <section className=" text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          But, like <span className="text-red-500">why</span> me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}





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

