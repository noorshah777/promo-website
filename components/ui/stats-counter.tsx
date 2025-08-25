"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatsCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function StatsCounter({ end, duration = 2, suffix = "", prefix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <motion.span
      ref={ref}
      className="font-bold text-4xl text-[#0C8731]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  )
}
