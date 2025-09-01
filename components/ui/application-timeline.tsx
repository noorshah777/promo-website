"use client"

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Button } from "@/components/ui/button"
import { MeshBg } from "@/components/ui/MeshBg"
import {
  Calendar,
  CalendarCheck,
  Clock,
  MapPin,
  Users,
  FileText,
  CheckCircle,
  Lightbulb,
  BookOpen,
  MessageSquare,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"




interface TimelineEvent {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  type:
    | "info-session"
    | "application"
    | "interview"
    | "decision"
    | "workshop"
    | "networking"
    | "case-study"
    | "onboarding"
    | "open-house"
    | "festifall"
  tips: string[]
  startDate: string
  endDate: string
}


const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Festifall",
    date: "August 27, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Ingalls Mall Table A035",
    type: "festifall",
    startDate: "2025-08-27T19:00:00",
    endDate: "2025-08-27T20:30:00",
    description: "Stop by our table to learn about Product Motion, meet current members, and discover how to get involved this semester",
    tips: [
      "Stop by our table to meet members and learn what Product Motion is all about.",
      "Ask about the upcoming open houses to plan your attendance.",
      "Share your contact info so you don’t miss application updates.",
      "Bring a friend who may also be interested in product management."
    ],
  },
{
  id: "2",
  title: "Applications Open",
  date: "September 1, 2025",
  time: "12PM",
  location: "Virtual",
  description: "Submit your application to express interest in joining Product Motion and provide your background and availability for next steps.",
  type: "application",
  startDate: "2024-09-01T00:00:00",
  endDate: "2024-09-01T23:59:59",
  tips: [
    "Submit your application early to avoid last-minute stress.",
    "Highlight experiences that showcase collaboration and problem-solving.",
    "Be authentic in your responses — we want to get to know you.",
    "Double-check your availability for interviews and assignments."
  ],
},
  {
    id: "3",
    title: "BBA MTC",
    date: "September 2, 2025",
    time: "5:30 PM - 7:30 PM",
    location: "Ross Basement - Table 41",
    description: "Get an inside look at the perks of joining our community. Ask questions and network with current members.",
    type: "open-house",
    startDate: "2024-09-02T17:30:00",
    endDate: "2024-09-02T19:30:00",
    tips: [
      "Stop by our table to meet members and learn what Product Motion is all about.",
      "Introduce yourself to board members and ask about their experiences.",
      "Take notes on what excites you most for your application later."
    ],
  },
  {
    id: "4",
    title: "Open House #1",
    date: "September 4, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Room 4, Michigan Union",
    description: "Learn about our recruiting process, meet the team, and connect with other prospective members.",
    type: "open-house",
    startDate: "2024-09-04T18:00:00",
    endDate: "2024-09-04T19:30:00",
    tips: [
      "Engage with board members and current members to learn their stories.",
      "Jot down details about the projects and perks you find most interesting.",
      "Show enthusiasm and curiosity — it makes a lasting impression."
    ],
  },


{
  id: "5",
  title: "Design Workshop",
  date: "September 7, 2025",
  time: "5:00 PM - 6:30 PM",
  location: "Wolverine Room (Union)",
  description: "Participate in a hands-on mini PM project to showcase your problem-solving, creativity, and collaboration skills.",
  type: "workshop",
  startDate: "2024-09-09T17:00:00",
  endDate: "2024-09-09T18:30:00",
  tips: [
    "Come ready to brainstorm and contribute ideas in a team setting.",
    "Stay open-minded and build on others’ perspectives.",
    "Practice communicating your thought process clearly.",
    "Show enthusiasm — creativity and collaboration matter most."
  ],
},

  {
    id: "6",
    title: "Application Deadline",
    date: "September 8, 2025",
    time: "11:59PM",
    location: "Virtual",
    description: "Product Motion's written applications will close at 11:59PM. Make sure to get your apps in to be considered for the Fall 2025 cohort!",
    type: "interview",
    startDate: "2024-09-11T17:00:00",
    endDate: "2024-09-11T22:00:00",
    tips: [
      "Submit early to avoid last minute technological difficulties.",
    ],
  },

  {
    id: "7",
    title: "Interviews",
    date: "Invitation Only",
    time: "Invitation Only",
    location: "Invitation Only",
    description: "Short interviews with board members to explore your fit for the club and assess PM skills in a friendly, professional setting.",
    type: "interview",
    startDate: "2024-09-11T17:00:00",
    endDate: "2024-09-11T22:00:00",
    tips: [
      "Review your application and be ready to expand on your experiences.",
      "Practice structured problem-solving and communication.",
      "Show curiosity about product management and Product Motion’s mission.",
      "Relax — the interview is also about getting to know you as a person."
    ],
  },
  {
    id: "8",
    title: "Written Assignment",
    date: "Invitation Only",
    time: "Invitation Only",
    location: "Invitation Only",
    description: "Complete a brief written PM exercise to demonstrate your approach to a real-world product challenge",
    type: "interview",
    startDate: "2024-09-15T00:00:00",
    endDate: "2024-09-15T23:59:59",
    tips: [
      "Read the prompt carefully and structure your response clearly.",
      "Focus on clarity of thought over flashy ideas.",
      "Demonstrate both creativity and practicality in your solution.",
      "Manage your time — concise, thoughtful answers stand out."
    ],
  },
  {
    id: "9",
    title: "Final Decisions & Cohort Notification",
    date: "September 17, 2024",
    time: "TBD", 
    location: "TBD",
    description: "Accepted members are notified and onboarding begins. Welcome to the Product Motion cohort!",
    type: "onboarding",
    startDate: "2024-09-17T00:00:00",
    endDate: "2024-09-17T23:59:59",
    tips: [
      "Keep an eye on your email for results.",
      "Celebrate the effort you put into the process regardless of outcome.",
      "Reach out to members if you’d like feedback for the future.",
      "If accepted, get ready for onboarding and an exciting semester ahead!"
    ],
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "info-session":
      return Users; // group discussion / session
    case "application":
      return FileText; // form / application
    case "interview":
      return MessageSquare; // conversation / interview
    case "decision":
      return CheckCircle; // final decision / acceptance
    case "workshop":
      return BookOpen; // learning / workshop
    case "networking":
      return Users; // connecting people
    case "case-study":
      return Lightbulb; // ideas / problem solving
    case "onboarding":
      return CalendarCheck; // schedule / onboarding process
    case "festifall":
      return Award; // showcase / promotional event
    default:
      return Calendar; // generic event
  }
}

export function ApplicationTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(timelineEvents[0]?.id || null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }


  return (
    <div className="space-y-8">
      {/* Timeline View - Horizontal Scroll with Navigation Arrows */}
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-[#0C8731] text-[#0C8731] hover:bg-[#0C8731] hover:text-white shadow-lg"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-[#0C8731] text-[#0C8731] hover:bg-[#0C8731] hover:text-white shadow-lg"
          onClick={scrollRight}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 px-12 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex space-x-6 md:space-x-8 lg:space-x-10 min-h-[450px] items-stretch">
            {timelineEvents.map((event, index) => {
              const IconComponent = getIcon(event.type)
              const isSelected = selectedEvent === event.id

              return (
                <motion.div
                  key={event.id}
                  className="flex-shrink-0 w-64 md:w-72 lg:w-80"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <AnimatedCard
                    hoverScale={1.05}
                    glowEffect={true}
                    className={`cursor-pointer transition-all duration-300 h-full ${
                      isSelected ? "ring-2 ring-[#0C8731] bg-white" : ""
                    }`}
                  >
                    <div
                      className="p-6 text-center flex flex-col h-full"
                      onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                    >
                      <div className="mb-4 flex justify-center">
                        <MeshBg className={`rounded-xl p-3 flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </MeshBg>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-black">{event.title}</h3>
                      <div className="space-y-1 mb-3 text-sm text-gray-600 flex-grow">
                        <div className="flex items-center justify-center">
                            <Calendar className="h-3 w-3 text-[#0C8731]" />
                          <span className="ml-1">{event.date}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <Clock className="h-3 w-3 text-[#0C8731]" />
                          <span className="ml-1">{event.time}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <MapPin className="h-3 w-3 text-[#0C8731]" />
                          <span className="ml-1">{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                      <Button
                        variant={isSelected ? "default" : "outline"}
                        className={`w-full text-sm rounded-lg ${
                          isSelected
                            ? "bg-[#0C8731] text-white"
                            : "border-[#0C8731] text-[#0C8731] hover:bg-[#0C8731] hover:text-white"
                        }`}
                      >
                        {isSelected ? "Hide Tips" : "View Tips"}
                      </Button>
                    </div>
                  </AnimatedCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tips Panel */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedCard glowEffect={true} className="mt-8">
            <div className="p-8">
              {(() => {
                const event = timelineEvents.find((e) => e.id === selectedEvent)
                if (!event) return null

                return (
                  <>
                    <div className="flex items-center mb-6">
                      <MeshBg className="rounded-xl p-3 mr-4 flex items-center justify-center">
                        <Lightbulb className="h-6 w-6 text-white" />
                      </MeshBg>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Tips for {event.title}</h3>
                        <p className="text-gray-600">How to succeed in this stage</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-[#0C8731] mb-3">Success Tips:</h4>
                        <ul className="space-y-2">
                          {event.tips.map((tip, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <div className="w-2 h-2 bg-[#0C8731] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-black mb-3">Event Details:</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-[#0C8731]" />
                            <span className="ml-2">{event.date}</span>
                          </div>
                          <div className="flex items-center">
                              <Clock className="h-4 w-4 text-[#0C8731]" />
                            <span className="ml-2">{event.time}</span>
                          </div>
                          <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-[#0C8731]" />
                            <span className="ml-2">{event.location}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button
                            onClick={() => {
                              const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                                event.title
                              )}&dates=${new Date(event.startDate)
                                .toISOString()
                                .replace(/[-:]/g, "")
                                .split(".")[0]}Z/${new Date(event.endDate)
                                .toISOString()
                                .replace(/[-:]/g, "")
                                .split(".")[0]}Z&details=${encodeURIComponent(
                                event.description
                              )}&location=${encodeURIComponent(event.location)}`
                              window.open(googleCalendarUrl, "_blank")
                            }}
                            className="w-full bg-[#0C8731] text-white hover:bg-[#0C8731]/90 rounded-lg"
                          >
                              <Calendar className="h-4 w-4 text-white mr-2" />
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>
          </AnimatedCard>
        </motion.div>
      )}
    </div>
  )
}
