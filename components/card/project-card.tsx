'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  title: string
  image: string
  href: string
  index: number
}

export function ProjectCard({ title, image, href, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 group"
    >
      <motion.div 
        className="relative aspect-[4/3] overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/40 z-10"
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.2 }}
        />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6"
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            {title}
          </motion.h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              variant="outline" 
              className="bg-white text-black hover:bg-white/90 hover:text-black relative overflow-hidden group"
            >
              <Link href={href} className="flex items-center gap-2">
                View Project
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
