"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface AddToCalendarProps {
  title: string
  description: string
  startDate: string
  endDate: string
  location?: string
  className?: string
}

export function AddToCalendar({ title, description, startDate, endDate, location, className }: AddToCalendarProps) {
  const handleAddToCalendar = () => {
    const formatDate = (date: string) => {
      return new Date(date).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    }

    const startFormatted = formatDate(startDate)
    const endFormatted = formatDate(endDate)

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startFormatted}/${endFormatted}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location || "")}`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <Button
      onClick={handleAddToCalendar}
      style={{
        backgroundImage: "url('/images/mesh-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`text-white font-semibold rounded-lg ${className} hover:scale-105 transition-transform duration-300`}
    >
      <Calendar className="h-4 w-4 mr-2" />
      Add to Calendar
    </Button>
  )
}
