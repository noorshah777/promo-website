"use client"

import { motion } from "framer-motion"
import { ArrowRight, Eye, Wrench, MessageCircle, Heart, Users, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StatsCounter } from "@/components/ui/stats-counter"
import { SectionHeader } from "@/components/ui/section-header"
import HeroSection from "@/components/ui/hero-section"
import Navigation from "@/components/ui/navigation"
import { useState } from "react"
import Footer from "@/components/ui/footer"
import { Timeline } from "@/components/ui/timeline"
import { MeshBg } from "@/components/ui/MeshBg"

export default function HomePage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const values = [
    {
      icon: Eye,
      title: "Curiosity over credentials",
      description: "We value your hunger to learn and explore over your resume lines. Questions drive innovation.",
    },
    {
      icon: Wrench,
      title: "Build to learn",
      description:
        "The best way to understand product management is by doing it. We learn through hands-on experience.",
    },
    {
      icon: MessageCircle,
      title: "Feedback is fuel",
      description: "We embrace constructive criticism and use it to iterate and improve everything we do.",
    },
    {
      icon: Heart,
      title: "Community over competition",
      description: "We lift each other up. Success is shared, and we celebrate wins together.",
    },
  ]

  const timelineItems = [
    {
      title: "The Foundation",
      description: "Product Motion was founded to bridge the gap between students and the PM world at Michigan.",
      date: "2024",
      status: "completed" as const,
    },
    {
      title: "Launchpad Program",
      description:
        "We launched our mentorship-based pilot program, guiding students through every step of the PM journey.",
      date: "Summer 2024",
      status: "completed" as const,
    },
    {
      title: "Full Community",
      description: "Expanding into project teams, events, and building a complete community of product builders.",
      date: "Now",
      status: "current" as const,
    },
    {
      title: "The Future",
      description: "Scaling our impact across campus and beyond, creating the next generation of product leaders.",
      date: "2025+",
      status: "upcoming" as const,
    },
  ]

  const gains = [
    {
      icon: Users,
      title: "Mentorship",
      description: "Learn from students who've been there, done that—from resumes to interviews to offers.",
      stats: "15+ Mentors",
    },
    {
      icon: Target,
      title: "Project Teams",
      description: "Work with a team to build product features from 0 to 1—just like a real PM.",
      stats: "5 Active Projects",
    },
    {
      icon: Heart,
      title: "Community",
      description: "From coffee chats to case practice to team bonding, find your people here.",
      stats: "100+ Members",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Where Your PM Journey Gets Moving"
        description="Building the next generation of product leaders at the University of Michigan"
        primaryButton={{
          text: "Apply Now",
          href: "/apply-now",
        }}
      />

      <section className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto relative z-10 text-white">
          <SectionHeader
            label="Who We Are"
            title="With so few PM-specific opportunities on campus, we decided to create our own: a club that's collaborative, hands-on, and committed to helping each other grow."
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Story"
            title="It started with motion."
            description="From a simple idea to a thriving community of product builders."
          />
          <div className="mt-12">
            <Timeline items={timelineItems} orientation="horizontal" />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Values"
            title="What drives us forward"
            description="The principles that guide everything we do at Product Motion."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <MeshBg className="rounded-xl p-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </MeshBg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Your Path to Excellence"
            title="Real skills. Real impact. Real community."
            description="A simple, effective approach to deliver excellence in product management."
          />
          <div className="mt-12 space-y-12">
            {gains.map((gain, index) => {
              const IconComponent = gain.icon
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-12 ${isEven ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <MeshBg className="rounded-2xl p-4 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </MeshBg>
                      <div className="font-bold text-2xl">{gain.stats}</div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-black">{gain.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{gain.description}</p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <IconComponent className="h-24 w-24 mx-auto mb-4 opacity-20" />
                        
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-4 relative min-h-[calc(60vh-80px)]"
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-black drop-shadow-2xl">
              Choose your next move.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12">
              Keep exploring Product Motion's new opportunities and discover where your passions can take you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/apply-now">
                <Button
                  className="text-white text-xl px-12 py-5 rounded-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/mesh-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  Apply Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:text-white text-xl px-12 py-5 rounded-lg font-bold bg-transparent transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/mesh-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  See Upcoming Events
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
