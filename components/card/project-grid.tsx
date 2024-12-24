'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

const projects = [
    {
      title: "Wassup Media Co.",
      image: "https://jainambagrecha.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdiyfjjyzv%2Fimage%2Fupload%2Fv1731212514%2Fnvwxlzfk3ypirebcyywd.png&w=1200&q=100",
      href: "https://jainambagrecha.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdiyfjjyzv%2Fimage%2Fupload%2Fv1731212514%2Fnvwxlzfk3ypirebcyywd.png&w=1200&q=100"
    },
    {
      title: "Tranquilnook",
      image: "https://jainambagrecha.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdiyfjjyzv%2Fimage%2Fupload%2Fv1731212514%2Fnvwxlzfk3ypirebcyywd.png&w=1200&q=100",
      href: "/projects/tranquilnook"
    },
    {
      title: "Rivermate",
      image: "https://jainambagrecha.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdiyfjjyzv%2Fimage%2Fupload%2Fv1731212514%2Fnvwxlzfk3ypirebcyywd.png&w=1200&q=100",
      href: "/projects/rivermate"
    }
  ]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function ProjectGrid() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          {...project}
          index={index}
        />
      ))}
    </motion.div>
  )
}

