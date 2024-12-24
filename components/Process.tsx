'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: "1",
    title: "Consult",
    description: "We'll discuss your goals and vision over a call to ensure we're aligned."
  },
  {
    number: "2",
    title: "Design and Developement",
    description: "I'll create a custom design that reflects your brand and meets your needs."
  },
  {
    number: "3",
    title: "Deliver",
    description: "Your website will be delivered, optimized for performance and ready to impress."
  }
]

export function Process() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="bg-black py-24 px-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">My </span>
          <span className="text-[#ff4432]">3-step</span>
          <span className="text-white"> process.</span>
        </motion.h2>

        <div className="relative">
          {/* Connecting Line with Moving Dot */}
          <div className="absolute top-12 left-[16%] right-[15%] h-px bg-white/20">
            {/* Moving Dot */}
            <motion.div
              className="absolute top-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2"
              initial={{ left: "0%" }}
              animate={isInView ? {
                left: ["0%", "100%"],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Dot */}
              <div className="w-full h-full bg-[#ff4432] rounded-full" />
              {/* Dot Glow Effect */}
              <div className="absolute inset-0 bg-[#ff4432] rounded-full animate-ping opacity-75" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="text-7xl md:text-8xl font-bold text-white mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.number}
                </motion.div>
                <motion.h3 
                  className="text-[#ff4432] text-2xl md:text-3xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 text-lg max-w-xs"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

