'use client'

import { motion } from 'framer-motion'

export default function TituloNoticias() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center my-8"
    >
      <h2 className="text-4xl font-extrabold text-[#00927e] pointer-events-none select-none">
        
      </h2>
    </motion.div>
  )
}
