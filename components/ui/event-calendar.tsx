"use client"

import { useState, useMemo, useCallback } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"

interface EventCalendarProps {
  events: {
    id: string
    startDate: string
  }[]
  onDateSelect: (date: Date | null) => void
}

export function EventCalendar({ events, onDateSelect }: EventCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<Date | null>(null)

  const daysInMonth = useCallback((year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }, [])

  const firstDayOfMonth = useCallback((year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }, [])

  const eventDates = useMemo(() => {
    const dates = new Set<string>()
    events.forEach((event) => {
      const date = new Date(event.startDate)
      const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString()
      dates.add(normalizedDate)
    })
    return dates
  }, [events])

  const generateCalendarDays = useCallback(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const numDays = daysInMonth(year, month)
    const firstDay = firstDayOfMonth(year, month)

    const days = []
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let i = 1; i <= numDays; i++) days.push(new Date(year, month, i))
    return days
  }, [currentDate, daysInMonth, firstDayOfMonth])

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
    setSelectedDay(null)
    onDateSelect(null)
  }

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
    setSelectedDay(null)
    onDateSelect(null)
  }

  const handleDayClick = (day: Date | null) => {
    setSelectedDay(day)
    onDateSelect(day)
  }

  const calendarDays = generateCalendarDays()

  return (
    <AnimatedCard glowEffect={true} className="p-6 min-h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
          <ChevronLeft className="h-5 w-5 text-[#0C8731]" />
        </Button>
        <h3 className="text-xl font-bold text-black">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h3>
        <Button variant="ghost" size="icon" onClick={handleNextMonth}>
          <ChevronRight className="h-5 w-5 text-[#0C8731]" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm flex-grow">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-gray-600 mb-2">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => {
          const isEventDay =
            day && eventDates.has(new Date(day.getFullYear(), day.getMonth(), day.getDate()).toDateString())
          const isSelected = selectedDay?.toDateString() === day?.toDateString()

          return (
            <motion.div
              key={index}
              className={`relative p-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-center min-h-[40px]
                ${!day ? "text-gray-300" : "text-black"}
              `}
              style={{
                backgroundColor: isSelected || isEventDay ? "#0C8731" : undefined,
                color: isSelected || isEventDay ? "white" : undefined,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0C8731",
                color: "white",
              }}
              onClick={() => handleDayClick(day)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              {day ? <span className="font-medium">{day.getDate()}</span> : <span className="text-gray-300">-</span>}
            </motion.div>
          )
        })}
      </div>
    </AnimatedCard>
  )
}
