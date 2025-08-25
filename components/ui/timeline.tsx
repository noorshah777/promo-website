"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { ReactNode } from "react"
import { MeshBg } from "@/components/ui/MeshBg"

interface TimelineItem {
  title: string
  description: string
  date: string
  icon?: ReactNode
  status?: "completed" | "current" | "upcoming"
}

interface TimelineProps {
  items: TimelineItem[]
  orientation?: "vertical" | "horizontal"
}

export function Timeline({ items, orientation = "vertical" }: TimelineProps) {
  if (orientation === "horizontal") {
    return (
      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className="flex-1 h-1 bg-gray-300 relative"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {index < items.length - 1 && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C8731] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <MeshBg className="w-8 h-8 rounded-full flex items-center justify-center">
                  {item.icon || <CheckCircle className="w-4 h-4 text-white" />}
                </MeshBg>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0C8731] hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-black">{item.title}</h3>
                <p className="text-[#0C8731] font-semibold text-sm mb-2">{item.date}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <MeshBg className="absolute left-6 w-4 h-4 rounded-full border-4 border-white z-10 flex items-center justify-center"></MeshBg>
            <div className="ml-16 bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0C8731] hover:shadow-lg transition-all duration-300 w-full">
              <h3 className="font-bold text-xl mb-2 text-black">{item.title}</h3>
              <p className="text-[#0C8731] font-semibold mb-2">{item.date}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
