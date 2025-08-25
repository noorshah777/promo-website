"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ label, title, description, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      className={`${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="inline-block px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">{label}</span>
      </motion.div>
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-lg text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
