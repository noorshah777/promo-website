"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  glowEffect?: boolean
  delay?: number
}

export function AnimatedCard({
  children,
  className = "",
  hoverScale = 1.02,
  glowEffect = false,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{
        scale: hoverScale,
        transition: { duration: 0.2 },
      }}
      className="relative group"
    >
      <Card
        className={`
        bg-white border-gray-200 overflow-hidden shadow-sm
        hover:border-[#0C8731] hover:shadow-lg transition-all duration-300
        ${glowEffect ? "hover:shadow-xl hover:shadow-[#0C8731]/10" : ""}
        ${className}
      `}
      >
        {glowEffect && (
          <div className="absolute inset-0 bg-[#0C8731]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <CardContent className="relative z-10">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
