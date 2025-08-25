"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, GraduationCap, Briefcase, Network, Zap, TrendingUp } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import HeroSection from "@/components/ui/hero-section"
import Navigation from "@/components/ui/navigation"
import Footer from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MeshBg } from "@/components/ui/MeshBg"

export default function ProspectiveMembersPage() {
  const memberBenefits = [
    {
      icon: Users,
      title: "Exclusive Mentorship",
      description:
        "Get paired with experienced product leaders for personalized guidance and career development. Our mentors are industry veterans from top tech companies, ready to share their insights and help you navigate your career path.",
    },
    {
      icon: Lightbulb,
      title: "Hands-on Projects",
      description:
        "Work on real-world product challenges, building a portfolio that stands out to recruiters. Our project teams simulate a real product development cycle, from ideation to launch, giving you practical experience.",
    },
    {
      icon: Network,
      title: "Vibrant Community",
      description:
        "Connect with like-minded peers, alumni, and industry professionals through exclusive events. Our community fosters collaboration, shared learning, and lifelong connections, creating a supportive environment for your growth.",
    },
  ]

  const ourApproach = [
    {
      icon: GraduationCap,
      title: "Learn by Doing",
      description:
        "We believe the best way to learn product management is through practical application. Our programs are designed to give you hands-on experience from day one.",
    },
    {
      icon: Briefcase,
      title: "Career Acceleration",
      description:
        "From resume workshops to mock interviews, we provide tailored support to help you land your dream PM internship or full-time role.",
    },
    {
      icon: Zap,
      title: "Innovation Hub",
      description:
        "Join a dynamic environment where new ideas are encouraged, and creativity is celebrated. We foster a culture of continuous improvement and forward-thinking.",
    },
  ]

  const companyLogos = [
    { src: "/images/google.png", alt: "Google Logo" },
    { src: "/images/capitalone.png", alt: "cap1 Logo" },
    { src: "/images/Microsoft-Logo.png", alt: "Microsoft Logo" },
    { src: "/images/ford.png", alt: "ford Logo" }
  ]

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navigation />

      <HeroSection
        title="Your journey into product starts here"
        description="Discover how Product Motion empowers students to become the next generation of product leaders through unparalleled mentorship, hands-on experience, and a supportive community."
        primaryButton={{
          text: "Apply Now",
          href: "/apply-now",
        }}
      />

      {/* Member Benefits */}
      <section id="benefits" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Why Join Product Motion?"
            title="Unlock your product potential"
            description="We provide the resources, network, and experience you need to thrive in the world of product management."
          />

          <div className="mt-16 space-y-24">
            {memberBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
                >
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"} flex flex-col justify-center`}>
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <MeshBg className="p-4 rounded-xl w-fit">
                        <IconComponent className="h-10 w-10 text-white" />
                      </MeshBg>
                    </motion.div>
                    <motion.h3
                      className="text-4xl font-bold mb-4 text-black leading-tight"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {benefit.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-700 leading-relaxed text-lg"
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {benefit.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className={`relative h-64 lg:h-96 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center
                      ${isEven ? "lg:order-2" : "lg:order-1"}
                    `}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <MeshBg className="p-6 rounded-full">
                      <IconComponent className="h-32 w-32 text-white opacity-70" />
                    </MeshBg>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Philosophy"
            title="How we empower your growth"
            description="Our unique approach combines practical learning with strong community support to ensure your success in product management."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {ourApproach.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md p-8 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <MeshBg className="p-4 rounded-xl">
                      <IconComponent className="h-12 w-12 text-white" />
                    </MeshBg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

{/* Our Placements */}
<section className="py-24 px-4 bg-gray-200">
  <div className="max-w-7xl mx-auto text-center">
    <div className="text-center mb-16">
      <div className="inline-block bg-white/50 rounded-full px-4 py-2 mb-4">
        <span className="text-black font-semibold text-sm">Our Placements</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-black">
        Where our members go
      </h2>
      <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
        Product Motion alumni have successfully landed roles at leading tech companies and startups.
      </p>
    </div>

    <motion.div
      className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {companyLogos.map((logo, index) => (
    <motion.div
      key={index}
      className="aspect-square flex items-center justify-center bg-white rounded-lg border border-gray-300 hover:border-gray-500 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-3/4 h-3/4">
        <Image
          src={logo.src || "/placeholder.svg"}
          alt={logo.alt}
          fill
          className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
      ))}
    </motion.div>

    <motion.p
      className="text-xl text-black mt-12 font-medium"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <MeshBg className="inline-block p-2 rounded-md mr-2">
        <TrendingUp className="h-6 w-6 text-white" />
      </MeshBg>
      <span className="font-bold text-[#0C8731]">100%+</span> of our members secure PM internships or full-time roles.
    </motion.p>
  </div>
</section>


      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">
              Ready to make an impact?
            </h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Join a community dedicated to building, learning, and growing together in product management.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/apply-now">
                <Button className="bg-gradient-to-r from-[#0C8731] to-[#0f9c0c] text-white hover:from-[#0f9c0c] hover:to-[#0C8731] text-lg px-12 py-4 rounded-lg font-bold shadow-2xl shadow-[#0C8731]/25 hover:shadow-[#0C8731]/40 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-black text-lg px-8 py-4 rounded-lg font-bold bg-transparent transition-all duration-300 transform hover:scale-105"
                >
                  Attend an Event
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
