'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isClient, setIsClient] = useState(false)

  // Ensure that the client-side specific logic runs only after the component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-4xl mx-auto backdrop-blur-sm px-6 py-4 border border-white/10 rounded-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center  ">
            <div className="w-8 h-8 bg-white rounded-full mr-8" />

            {/* Render the navigation links only on the client side */}
            {isClient && (
              <div className="hidden md:flex space-x-8">
                <NavLink href="/work">Work</NavLink>
                <NavLink href="/benefits">Benefits</NavLink>
                <NavLink href="/faq">FAQ</NavLink>
              </div>
            )}
          </Link>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-[#ff4432] hover:bg-[#ff4432]/90 hover:shadow-[0_0_30px_#f64231] font-medium flex items-center gap-2 px-4 py-6 rounded-xl text-white transition-all duration-300"
            >
              <Image
                src="https://jainambagrecha.vercel.app/_next/image?url=%2Fjainam.jpeg&w=128&q=75"
                alt="Jainam"
                width={24}
                height={24}
                className="rounded-[45%] object-cover"
              />
              <span>Book a Call With Jainam</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-white/90 hover:text-white transition-colors font-medium"
    >
      {children}
    </Link>
  )
}
