"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeader } from "@/components/ui/section-header"
import HeroSection from "@/components/ui/hero-section"
import Navigation from "@/components/ui/navigation"
import Footer from "@/components/ui/footer"
import { AddToCalendar } from "@/components/ui/add-to-calendar"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useMemo } from "react"
import { EventCalendar } from "@/components/ui/event-calendar"
//
interface EventData {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
  startDate: string
  endDate: string
  featured?: boolean
}

export default function EventsPage() {
  const allUpcomingEvents: EventData[] = useMemo(
    () =>
      [
       {

      id: "festifall",
      title: "Festifall",
      date: "August 27, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Table A035",
      description: "Meet the club, learn about our mission, and discover ways to get involved this year!",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2025-08-27T19:00:00",
      endDate: "2025-08-27T20:30:00",
      featured: true,
    },
    {
      id: "open-house-1",
      title: "Open House #1",
      date: "September 1, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Kuenzel (holds 120 people)",
      description: "Explore our club, meet current members, and learn how you can join projects, mentorship, and community programs.",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2025-09-01T18:00:00",
      endDate: "2025-09-01T20:00:00",
      featured: true,
    },
    {
      id: "open-house-2",
      title: "Open House #2",
      date: "September 4, 2025",
      time: "6:00 PM - 7:30 PM",
      location: "Room 4 (holds 50 people)",
      description: "Catch up if you missed the first session and discover opportunities to get involved with the club this semester.",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2025-09-04T18:00:00",
      endDate: "2025-09-04T19:30:00",
      featured: true,
    },
    {
      id: "applications-open",
      title: "Applications Open",
      date: "September 5, 2025",
      time: "12:00 PM",
      location: "Online",
      description: "Submit your application to join the club, share your interests, and let us know how you want to contribute!",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2025-09-05T00:00:00",
      endDate: "2025-09-05T23:59:59",
      featured: true,
    },
    {
      id: "product-design-workshop",
      title: "Product Design Workshop",
      date: "September 7, 2025",
      time: "5:00 PM - 6:30 PM",
      location: "Wolverine Room (Union)",
      description: "Participate in a hands-on PM mini-project, collaborate with peers, and see firsthand how we solve real-world problems together.",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2024-09-09T17:00:00",
      endDate: "2024-09-09T18:30:00",
      featured: true,
    },

      ].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()),
    [],
  )

  const upcomingEvents = useMemo(() => {
    const now = new Date()
    return allUpcomingEvents.filter((event) => new Date(event.startDate) > now)
  }, [allUpcomingEvents])

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const eventsForSelectedDate = useMemo(() => {
    if (!selectedDate) {
      return []
    }
    return upcomingEvents.filter((event) => {
      const eventDate = new Date(event.startDate)
      const normalizedEventDate = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())
      return normalizedEventDate.toDateString() === selectedDate.toDateString()
    })
  }, [selectedDate, upcomingEvents])

  useEffect(() => {
    if (selectedDate && eventsForSelectedDate.length > 0) {
      setSelectedEvent(eventsForSelectedDate[0])
    } else if (!selectedDate && upcomingEvents.length > 0) {
      setSelectedEvent(upcomingEvents[0])
    } else {
      setSelectedEvent(null)
    }
  }, [selectedDate, eventsForSelectedDate, upcomingEvents])

  useEffect(() => {
    if (!selectedEvent) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      return
    }

    const targetDate = new Date(selectedEvent.startDate).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [selectedEvent])

  const pastEvents = [
    {
      title: "Product @ Google Panel",
      date: "November 8, 2024",
      attendees: 100,
      image: "/images/googlepanel.JPG",
    },
  
    {
      title: "Pathways in Tech & Consulting",
      date: "November 16, 2024",
      attendees: 150,
      image: "/images/tech.JPG",
    },

    {
      title: "Pathway to PM Student Panel",
      date: "April 2, 2025",
      attendees: 75,
      image: "/images/pathway.JPG",
    },
    
  ]

  return (
    <div className="min-h-screen text-black font-sans">
      <Navigation />

      <HeroSection
        title="Campus can't wait"
        description="Our public events are open to everyone—whether or not you're in the core club. We host PM panels, resume workshops, interview crash courses, and more."
        primaryButton={{
          text: "View Upcoming Events",
          href: "#upcoming",
        }}
      />

      {/* Upcoming Events with Calendar and Details */}
      <section id="upcoming" className="py-24 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Upcoming Events"
            title="Don't miss out"
            description="Mark your calendars for these upcoming opportunities to learn and connect."
          />

          {upcomingEvents.length === 0 ? (
            <AnimatedCard glowEffect={true} className="h-full min-h-[300px] flex items-center justify-center p-8 mt-16">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-4">No upcoming events scheduled at the moment.</p>
                <p className="text-gray-500 text-base">Check back soon for new events and opportunities!</p>
              </div>
            </AnimatedCard>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12 mt-16">
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <EventCalendar events={upcomingEvents} onDateSelect={setSelectedDate} />
              </motion.div>

              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {selectedEvent ? (
                  <AnimatedCard glowEffect={true} className="h-full min-h-[500px]">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <h4 className="text-xl font-bold mb-4 text-[#0C8731]">Event Starts In:</h4>
                        <div className="grid grid-cols-4 gap-4">
                          {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                              <div className="text-3xl font-bold text-[#0C8731]">{value}</div>
                              <div className="text-sm text-gray-600 capitalize font-medium">{unit}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold mb-4 text-black">{selectedEvent.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-5 w-5 mr-3 text-[#0C8731]" />
                          <span className="font-medium">{selectedEvent.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="h-5 w-5 mr-3 text-[#0C8731]" />
                          <span className="font-medium">{selectedEvent.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="h-5 w-5 mr-3 text-[#0C8731]" />
                          <span className="font-medium">{selectedEvent.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{selectedEvent.description}</p>

                      <AddToCalendar
                        title={selectedEvent.title}
                        description={selectedEvent.description}
                        startDate={selectedEvent.startDate}
                        endDate={selectedEvent.endDate}
                        location={selectedEvent.location}
                        className="w-full"
                      />
                    </div>
                  </AnimatedCard>
                ) : (
                  <AnimatedCard glowEffect={true} className="h-full min-h-[500px] flex items-center justify-center p-8">
                    <p className="text-gray-600 text-lg text-center">
                      {selectedDate
                        ? `No events scheduled for ${selectedDate.toDateString()}.`
                        : "Select a date from the calendar to view events."}
                    </p>
                  </AnimatedCard>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Past Events"
            title="Success stories"
            description="See what our community has been up to and the impact we're making."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {pastEvents.map((event, index) => (
              <AnimatedCard key={index} delay={index * 0.1} hoverScale={1.05} glowEffect={true} className="group">
                <div className="p-0 pt-4">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={150}
                    className="w-full h-32 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2 text-black text-sm">{event.title}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">{event.date}</span>
                      <div className="flex items-center">
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Users className="h-3 w-3 mr-1 text-[#0C8731]" />
                      <span className="font-medium">{event.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">Stay in the loop</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Never miss an opportunity to learn and grow. Get notified about all our events and workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/apply-now">
                <Button
                  className="text-white text-lg px-12 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-[#0C8731]/25 transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/mesh-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  Join the Club
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div
        style={{
          backgroundImage: "url('/images/mesh-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Footer />
      </div>
    </div>
  )
}
