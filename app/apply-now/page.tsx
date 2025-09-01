"use client"

import { motion } from "framer-motion"
import { ArrowRight, HelpCircle, GraduationCap, Target, Users, CheckCircle, Clock, Award } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeader } from "@/components/ui/section-header"
import HeroSection from "@/components/ui/hero-section"
import { ApplicationTimeline } from "@/components/ui/application-timeline"
import Navigation from "@/components/ui/navigation"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/ui/footer"

export default function ApplyNowPage() {


  const tips = [
    {
      icon: Target,
      title: "Be honest about your goals",
      description: "We want to understand what you're hoping to achieve and how Product Motion fits into your journey.",
      color: "from-[#1DAB19] to-[#0A6E08]",
    },
    {
      icon: HelpCircle,
      title: "Show curiosity—what have you explored?",
      description:
        "Tell us about the products, companies, or problems that fascinate you. Curiosity matters more than expertise.",
      color: "from-[#1DAB19] to-[#0A6E08]",
    },
    {
      icon: Users,
      title: "Highlight collaboration",
      description: "Share examples of how you've worked with others, led teams, or contributed to group projects.",
      color: "from-[#1DAB19] to-[#0A6E08]",
    },
    {
      icon: GraduationCap,
      title: "If you don't know something yet, say so—and show how you'd learn",
      description: "We value growth mindset over perfect knowledge. Show us how you approach learning new things.",
      color: "from-[#1DAB19] to-[#0A6E08]",
    },
  ]

  const whatWeLookFor = [
    {
      title: "Curiosity & Growth Mindset",
      description: "You ask thoughtful questions and actively seek to understand how things work.",
      examples: ["Analyzing products you use daily", "Reading PM blogs or books", "Asking 'why' and 'how' questions"],
    },
    {
      title: "Collaboration & Leadership",
      description: "You work well with others and can influence without authority.",
      examples: ["Group project leadership", "Club or organization involvement", "Peer mentoring experience"],
    },
    {
      title: "Problem-Solving Approach",
      description: "You break down complex problems and think systematically about solutions.",
      examples: ["Case competition participation", "Personal projects", "Analytical coursework"],
    },
  ]

  const faqs = [
    {
      question: "Who can apply?",
      answer:
        "All years and majors are welcome! We believe diverse perspectives make better products, so whether you're a freshman or senior, engineering or liberal arts, we want to hear from you.",
    },
    {
      question: "Do I need experience?",
      answer:
        "No PM experience required! We're looking for curious, collaborative students who want to learn and grow. We'll teach you everything you need to know.",
    },
    {
      question: "What's the time commitment?",
      answer:
        "Approximatealy 5-7 hours per week during the semester. This includes weekly meetings, project work, and events. We understand you have other commitments and work with your schedule.",
    },
    {
      question: "Can I come to events if I'm not in the program?",
      answer:
        "All our public events are open to everyone on campus. You don't need to be a member to attend panels, workshops, and networking events.",
    },
    {
      question: "When do applications open?",
      answer:
        "We recruit once per semester for our internal program. Follow us on social media for the latest updates.",
    },
    {
      question: "What happens after I apply?",
      answer:
        "After submitting your application, selected candidates will be invited for a 30-45 minute conversation with our team. We'll notify all applicants of decisions within 2 weeks of the application deadline.",
    },
  ]

  return (

    <div className="min-h-screen bg-white text-black font-sans">
      <Navigation />

    <div className="min-h-screen bg-white text-black font-sans">
      <Navigation />

        <HeroSection

          title="Ready to get in motion?"
          description="We recruit once a semester for our internal program. Our application process is designed to find students who are curious, collaborative, and ready to grow—no PM experience required."
          primaryButton={{
            text: "Start Application",
            href: "https://docs.google.com/forms/u/0/d/19_7M_zc6PNVUdoBroNWvIuRKc7fFoBfZF0FNd89jx9w/viewform?edit_requested=true",
          }}
        />

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              label="What We Look For"
              title="We're not looking for perfect"
              description="We care more about mindset than resume lines. Here's what catches our attention."
            />

            <div className="grid lg:grid-cols-3 gap-8 mt-16">
              {whatWeLookFor.map((criteria, index) => (
                <AnimatedCard key={index} delay={index * 0.1} hoverScale={1.03} glowEffect={true} className="h-full">
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-black">{criteria.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{criteria.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[#0C8731] mb-3">Examples:</p>
                      {criteria.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#0C8731] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

        </section>

        <section id="timeline" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              label="Application Process"
              title="How to Apply"
              description="Click on any step to get insider tips on how to succeed."
            />
            <div className="mt-12">
              <ApplicationTimeline />
            </div>
          </div>
        </section>

        <section className="py-8 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              label="Success Tips"
              title="How to stand out"
              description="Show us how you think, what you're excited about, and how you want to grow."
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {tips.map((tip, index) => {
                const IconComponent = tip.icon
                return (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.1}
                    hoverScale={1.03}
                    glowEffect={true}
                    className="h-full group"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`bg-gradient-to-r ${tip.color} rounded-xl p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-black">{tip.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="FAQ"
              title="Still have questions?"
              description="Everything you need to know about applying to Product Motion."
            />
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-gray-50 border-gray-200 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-bold text-black hover:text-[#0C8731] py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pb-4 font-medium">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section id="application" className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">
                Your PM journey starts here
              </h2>
              <p className="text-xl text-gray-700 mb-12 font-medium">
                Applications for Fall 2025 are opening soon. Don't wait—spots fill up fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-[#0C8731] to-[#0f9c0c] text-white hover:from-[#0f9c0c] hover:to-[#0C8731] text-lg px-12 py-4 rounded-lg font-bold shadow-2xl shadow-[#0C8731]/25 hover:shadow-[#0C8731]/40 transition-all duration-300 transform hover:scale-105">
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-black text-lg px-8 py-4 rounded-lg font-bold bg-transparent transition-all duration-300 transform hover:scale-105"
                >
                  Join Info Session
                </Button>
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
    </div>
  )
}
